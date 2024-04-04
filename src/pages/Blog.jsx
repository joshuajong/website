import React from 'react';
import Category from '../components/Category';
import { FaPlane, FaWifi } from 'react-icons/fa';

function Blog() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-white text-slate-900 p-4">
      <div className="mb-16">
        <h1 className="text-2xl md:text-3xl lg:text-6xl">blog</h1>
      </div>
      <div className="flex space-x-12 md:space-x-16 lg:space-x-24">
        <Category icon={FaPlane} categoryName="travel" route="/blog/travel" />
        <Category icon={FaWifi} categoryName="tech" route="/blog/tech" />
        <Category icon={FaPlane} categoryName="thoughts" route="/blog/thoughts" />
      </div>
    </div>
  );
}



export default Blog;