import React, { useState,useContext } from 'react'
import Notes from './Notes'
import Notecontext from '../context/Notes/Notecontext'

export default function Main() {
  const handleclick=(e)=>{
    e.preventDefault()
     Addnote(note.title,note.description,note.tag)
    }
    const onchange= async(e)=>{
     setnote({ ...note, [e.target.name]: e.target.value, })
    } 
  const context = useContext(Notecontext)
  const {Addnote}=context
  const[note,setnote]=useState({title:"",description:"",tag:""})
  return (
    <>
      <div>
        <form className='m-4'>
          <div className="mb-6">
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              <h1 className='text-2xl text-black font-mono'>Title</h1>
            </label>
            <input
              type="text"
              id="title"
              name='title'
              onChange={onchange}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required=""
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              <h1 className='text-2xl text-black font-mono'>Decription</h1>
            </label>
            <input
              type="text"
              id="description"
              name='description'
              onChange={onchange}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="tag"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              <h1 className='text-2xl text-black font-mono'>Tag</h1>
            </label>
            <input
              type="text"
              id="tag"
              name='tag'
              onChange={onchange}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            />
          </div>
          <button
            type="submit"
            className="text-black bg-yellow-400 hover:bg-yellow-300 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-xl p-5  text-center dark:bg-yellow-400 dark:hover:bg-yellow-300 dark:focus:ring-yellow-300" onClick={handleclick}
          >
            Add to your diary❤
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
