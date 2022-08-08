import React from 'react'
import Notes from './Notes'
export default function Main() {
 
  return (
    <>
      <div>
        <form className='m-4'>
          <div className="mb-6">
            <label
              htmlFor="Title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              <h1 className='text-2xl text-black font-mono'>Title</h1>
            </label>
            <input
              type="Title"
              id="Title"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required=""
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="Description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              <h1 className='text-2xl text-black font-mono'>Decription</h1>
            </label>
            <input
              type="Description"
              id="Description"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="Tag"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              <h1 className='text-2xl text-black font-mono'>Tag</h1>
            </label>
            <input
              type="Tag"
              id="Tag"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            />
          </div>
          <button
            type="submit"
            className="text-black bg-yellow-400 hover:bg-yellow-300 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-xl p-5  text-center dark:bg-yellow-400 dark:hover:bg-yellow-300 dark:focus:ring-yellow-300"
          >
            Add to your diary
          </button>
        </form>
        <div className="mt-7 ml-4 mr-4 mb-4">
          <h1 className="text-4xl text-black font-mono"> Your notes</h1>
        <Notes/>
        </div>
      </div>
    </>
  )
}