import React from 'react';

const SideBar = () => {

  const categories = [
    "Category 1",
    "Category 2",
    "Category 3",
    "Category 4",
    "Category 5",
    "Category 6",
    "Category 7",
    "Category 8",
    "Category 9",
    "Category 10"
  ];

  
  return (
    <div className='h-screen overflow-y-auto fixed top-0 left-0 bottom-0 bg-gray-800 text-white w-64'>
      <div className='px-3 flex justify-start h-full items-center'>
        <ul>
          {categories.map((category, index) => (
            <li key={index} className="text-base py-1">{category}</li>
          ))}
        </ul>

      </div>
    </div>
  );
}

export default SideBar;
