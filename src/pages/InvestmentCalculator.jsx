import React, { useState } from 'react';

function calculateInvestmentGrowth(initialAmount, annualROI, monthlyAddition, years) {
  const annualAddition = monthlyAddition * 12
  let baseAmount = initialAmount;
  let annualRoiInDollars = [];
  let finalInvestmentAmountAtYearEnd = [];

  for (let year = 1; year <= years; year++) {
    baseAmount += annualAddition; // Final value of investment at end of the year

    // Calculate annual ROI
    const annualReturn = baseAmount * (annualROI / 100);
    annualRoiInDollars.push(annualReturn.toFixed(2));

    // Add annual ROI to the total
    baseAmount += annualReturn;

    finalInvestmentAmountAtYearEnd.push(baseAmount.toFixed(2));
  }
  return [finalInvestmentAmountAtYearEnd, annualRoiInDollars]; // Round to 2 decimal places
}

const InvestmentCalculator = () => {
  const [currentAmount, setCurrentAmount] = useState('0');
  const [monthlyAmount, setMonthlyAmount] = useState('0');
  const [roiPercentage, setRoiPercentage] = useState('0');
  const [yearsInvested, setYearsInvested] = useState('1');
  const [annualRoi, setAnnualRoi] = useState('');
  const [monthlyRoi, setMonthlyRoi] = useState('');
  const [dailyRoi, setDailyRoi] = useState('');
  const [totalValue, setTotalValue] = useState('');
  const [currencyCode, setCurrencyCode] = useState('');

  const currencyCodes = ['SGD', 'MYR', 'AUD', 'USD', 'GBP'];

  const calculateRoi = () => {
    const currentInvestmentAmountFloat = parseFloat(currentAmount);
    const monthlyRecurringInvestmentAmountFloat = parseFloat(monthlyAmount);
    const roiPercentageFloat = parseFloat(roiPercentage);
    const yearsInvestedFloat = parseFloat(yearsInvested);

    // const totalAmount = currentInvestmentAmountFloat + (monthlyRecurringInvestmentAmountFloat * 12)
    const calculatedValues = calculateInvestmentGrowth(currentInvestmentAmountFloat, roiPercentageFloat, monthlyRecurringInvestmentAmountFloat, yearsInvestedFloat);
    const totalValue = calculatedValues[0];
    const annualRoiValue = calculatedValues[1];
    const monthlyRoiValue = annualRoiValue.map((value) => (value / 12).toFixed(2));
    const dailyRoiValue =  annualRoiValue.map((value) => (value / 365).toFixed(2));

    let currencySymbol = ''
    switch(currencyCode) {
      case 'GBP':
        currencySymbol = '£';
        break;
      case 'MYR': 
        currencySymbol = 'RM';
        break;
      default:
        currencySymbol = '$';
        break;
    }

    const formattedAnnualRoi = annualRoiValue.map((value) => `${currencySymbol}${value}`);
    const formattedMonthlyRoi = monthlyRoiValue.map((value) => `${currencySymbol}${value}`);
    const formattedDailyRoi = dailyRoiValue.map((value) => `${currencySymbol}${value}`);
    const formattedTotalValue = totalValue.map((value) => `${currencySymbol}${value}`);

    setAnnualRoi(formattedAnnualRoi);
    setMonthlyRoi(formattedMonthlyRoi);
    setDailyRoi(formattedDailyRoi);
    setTotalValue(formattedTotalValue);
  };

  return (

    <div className="min-h-screen flex flex-col items-center bg-white text-slate-400 p-4">
      <h1 className="text-2xl font-bold">Investment Calculator</h1>
      <div className="p-8 flex flex-wrap w-full items-start">
        <div id="roiInput" className="mt-4 mb-4 mr-8 ml-8 flex-1">
          <div className="mt-5">
            <label className="mb-2">Currency:</label>
            <select className="border border-slate-400 p-2 w-full rounded" value={currencyCode} onChange={(e) => setCurrencyCode(e.target.value)}>
              {currencyCodes.map(symbol => (
                <option key={symbol} value={symbol}>{symbol}</option>
              ))}
            </select>
          </div>
          <div className="mt-5">
            <label className="mb-2">Amount at Beginning of Year:</label>
            <input className="border border-slate-400 p-2 w-full rounded" type="number" value={currentAmount} onChange={(e) => setCurrentAmount(e.target.value)} />
          </div>
          <div className="mt-5">
            <label className="mb-2">Amount Added Monthly:</label>
            <input className="border border-slate-400 p-2 w-full rounded" type="number" value={monthlyAmount} onChange={(e) => setMonthlyAmount(e.target.value)} />
          </div>
          <div className="mt-5">
            <label className="mb-2">Expected ROI in %:</label>
            <input className="border border-slate-400 p-2 w-full rounded" type="number" value={roiPercentage} onChange={(e) => setRoiPercentage(e.target.value)} />
          </div>
          <div className="mt-5">
            <label className="mb-2">Number of years invested</label>
            <input className="border border-slate-400 p-2 w-full rounded" type="number" value={yearsInvested} onChange={(e) => setYearsInvested(e.target.value)} />
          </div>

          <button className="bg-blue-500 mx-auto text-white px-4 py-2 rounded hover:bg-blue-600 mt-12 mb-5 " onClick={calculateRoi}>Calculate Potential ROI</button>
        </div>
        <div id="roiResults" className="bg-slate-400 rounded p-4 mb-4 mt-4 mr-8 ml-8 text-white flex-1">
          <table>
            <thead>
              <tr>
                <th>Column Name</th>
                {totalValue.map((_, index) => (
                  <th key={index}>Row {index + 1}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Annual ROI</td>
                {annualRoi.map((value, index) => (
                  <td key={index}>{value}</td>
                ))}
              </tr>
              <tr>
                <td>Monthly ROI</td>
                {monthlyRoi.map((value, index) => (
                  <td key={index}>{value}</td>
                ))}
              </tr>
              <tr>
                <td>Daily ROI</td>
                {dailyRoi.map((value, index) => (
                  <td key={index}>{value}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default InvestmentCalculator;