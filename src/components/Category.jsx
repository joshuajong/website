import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing

function Category({ icon: Icon, categoryName, route }) {
  return (
    <Link to={route}>
      <div className="hover:relative hover:opacity-100 hover:scale-150 opacity-50 text-slate-900 p-8 h-48 w-60 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <Icon size="24" className="mb-2" />
          <p className="text-slate-900">{categoryName}</p>
        </div>
      </div>
    </Link>
  );
}

export default Category;
