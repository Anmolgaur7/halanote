import React, { useEffect } from 'react'
import { useContext } from 'react'
import Notecontext from '../context/Notes/Notecontext'
import Noteitem from './Noteitem'

export default function Notes() {
    // here created the notes component which contains all notes here it is using context api  as is is taking all the states in NOte context and tehn passing it to its childerens as props
    const context = useContext(Notecontext)
    const {notes,Getnotes} = context
    useEffect(()=>{
    Getnotes()
    })

  return (
    <div className='flex justify-evenly mt-4 flex-wrap'>
    {notes.map((note)=>{
          return <Noteitem note={note}/>
    })}
    </div>
  )
}
