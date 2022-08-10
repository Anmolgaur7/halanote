import React, { useEffect } from 'react'
import { useContext, useState, useRef } from 'react'
import Notecontext from '../context/Notes/Notecontext'
import Noteitem from './Noteitem'

export default function Notes() {
  // here created the notes component which contains all notes here it is using context api  as is is taking all the states in NOte context and tehn passing it to its childerens as props
  const context = useContext(Notecontext)
  const { notes, Getnotes } = context
  useEffect(() => {
    Getnotes()
  })
  const ref = useRef(null)
  const [note, setnote] = useState({ etitle: "", edescription: "", etag: "" })

  const updatenote = (currentNote) => {
    ref.current.click();
    setnote({ etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })
  }

  const handleClick = (e) => {
    console.log("Updating the note...", note)
    e.preventDefault();
  }

  const onChange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value })
  }
  return (
    <>
   {/* Modal toggle */}
   <button
    className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    ref={ref}
    type="button"
    data-modal-toggle="authentication-modal"
    >
    Toggle modal
  </button>
  {/* Main modal */}
  <div
    id="authentication-modal"
    tabIndex={-1}
    aria-hidden="true"
    className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full"
  >
    <div className="relative p-4 w-full max-w-md h-full md:h-auto">
      {/* Modal content */}
      <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <button
          type="button"
          className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
          data-modal-toggle="authentication-modal"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
          <span className="sr-only">Close modal</span>
        </button>
        <div className="py-6 px-6 lg:px-8">
          <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
            Rewrite your note to your diary❤
          </h3>
          <form className="space-y-6" action="#">
            <div>
              <label
                htmlFor="etitle"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Title
              </label>
              <input
                type="text"
                name="etitle"
                id="etitle"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@company.com"
                required="" onChange={onChange}
              />
            </div>
            <div>
              <label
                htmlFor="edescription"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
               Description
              </label>
              <input
                type="text"
                name="edescription"
                id="edescription"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                onChange={onChange}
              />
            </div>
            <div>
              <label
                htmlFor="etab"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
               Tag
              </label>
              <input
                type="text"
                name="etab"
                id="etab"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required="" onChange={onchange}
              />
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleClick}
            >
              Go for it👍
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
    <div className='flex justify-evenly mt-4 flex-wrap'>
        {notes.map((note) => {
          return <Noteitem key={note._id} updatenote={updatenote} note={note} />
        })}
      </div></>
  )
}
