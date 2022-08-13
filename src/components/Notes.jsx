import React, { useEffect } from 'react'
import { useContext, useState} from 'react'
import Notecontext from '../context/Notes/Notecontext'
import Noteitem from './Noteitem'

export default function Notes() {
  // here created the notes component which contains all notes here it is using context api  as is is taking all the states in NOte context and tehn passing it to its childerens as props
  const context = useContext(Notecontext)
  const { notes, Getnotes,Updatenote } = context
  // here i used use effect hook it acts as compnent didmount  used to fetch data from the api
  useEffect(() => {
    Getnotes()
  })
  // the shit is not working though
  const [note, setnote] = useState({id:"", etitle: "", edescription: "", etag: "" })
  const [toggle,setoggle]=useState(false)

  // To display modale i used another state hook to toggle it but it is not closing yet 
  const updatenote = (note) => {
    setoggle(true);
    console.log("update note was fired",note);
    setnote({id:note._id, etitle: note.title, edescription: note.description, etag: note.tag })
  }

  const handleClick = (e) => {
    console.log("Updating the note...", note)
    Updatenote(note.id,note.etitle,note.edescription,note.etag)
    setoggle(false)
    e.preventDefault();
    alert("The note was successfully updated ❤👍")
  }

  const onChange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value })
  }
  return (
    <>
{toggle&&<div className="relative p-4 w-full  h-full   backdrop-blur-md ">

<div className="relative bg-white rounded-lg shadow  dark:bg-gray-700">
  <button
    type="button"
    className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
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
    <h3 className="mb-4 text-3xl font-medium text-gray-900 dark:text-white">
    Wanna Update something🤔
    </h3>
    <form className="space-y-6" action="#">
      <div>
        <label
          htmlFor="etitle"
          className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
        >
        Title
        </label>
        <input
          type="etitle"
          name="etitle"
          id="text"
          value={note.etitle}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          required
          minLength={5}
          onChange={onChange}
        />
      </div>
      <div>
        <label
          htmlFor="edescription"
          className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
        >
         Description
        </label>
        <input
          type="edescription"
          name="edescription"
          id="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          required
          minLength={5}
          value={note.edescription}
          onChange={onChange}
        />
      </div>
      <div>
        <label
          htmlFor="etag"
          className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
        >
         Tag
        </label>
        <input
          type="etag"
          name="etag"
          id="text"
          value={note.etag}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          onChange={onChange}

        />
      </div>
      <button
        type="submit"
        className="w-full text-black bg-yellow-500 hover:bg-yellow-300 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center dark:bg-yellow-300 dark:hover:bg-yellow-400 dark:focus:ring-yellow-300"
        onClick={handleClick}
        disabled={note.etitle.length<5||note.edescription.length<5}
      >
      Rewrite to your diary👍
      </button>
    </form>
  </div>
</div>
</div> }
    
    <div className='flex justify-evenly mt-4 flex-wrap'>
        {notes.length===0 && <h1 className='text-center text-black font font-bold font-mono text-2xl'>Please add some notes first 😊</h1>}
        {notes.map((note) => {
          return <Noteitem key={note._id} updatenote={updatenote} note={note} />
        })}
      </div></>
  )
}
