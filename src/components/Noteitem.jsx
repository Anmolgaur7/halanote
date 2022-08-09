import React ,{useContext}from 'react'
import Notecontext from '../context/Notes/Notecontext'
export default function Noteitem(props) {
    // here it is taking props from the notes and then it is rendreing according to them
    const context = useContext(Notecontext)
    // 
    const {Deletenote,Updatenote} = context
    const {note} = props
    return (
        <>
            <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {note.title}
                        </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {note.description}
                    </p>
                    {/*  */}
                    <i className="fa-solid fa-trash-can m-4 text-xl text-yellow-200 cursor-pointer hover:text-yellow-300"onClick={()=>{Deletenote(note._id)}} ></i>
                    <i className="fa-solid fa-pen-to-square m-4 text-xl text-yellow-200 cursor-pointer hover:text-yellow-300" onClick={()=>{Updatenote(note._id,note.title,note.description,note.tag)}}></i>
                </div>
            </div>
      </>
    )
}
