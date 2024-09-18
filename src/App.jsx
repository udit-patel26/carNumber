import React, { useState } from 'react';

function App() {
 
  const [formData, setFormData] = useState({
    visitor: '',
    phoneNumber: '',
    allowedEntry: '' 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log(formData);
  };

  return (
    <div className='w-full min-h-[100vh] flex justify-center items-center'>
      <form className="max-w-sm mx-auto sm:p-10" onSubmit={handleSubmit}>
        <div className="mb-5">
          <label htmlFor="visitor" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Visitor Checkin
          </label>
          <input
            type="text"
            id="visitor"
            name="visitor"
            value={formData.visitor}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter vehicle number"
            required
          />
        </div>
        <div className="mb-5">
          <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            placeholder='Enter Phone Number'
            value={formData.phoneNumber}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="flex mb-4 gap-4">
          <label>Allowed Entry</label>
          <div className="flex items-center">
            <input
              id="Yes"
              type="radio"
              name="allowedEntry"
              value="Yes"
              checked={formData.allowedEntry === 'Yes'}
              onChange={handleChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor="Yes" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Yes
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="No"
              type="radio"
              name="allowedEntry"
              value="No"
              checked={formData.allowedEntry === 'No'}
              onChange={handleChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor="No" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              No
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
