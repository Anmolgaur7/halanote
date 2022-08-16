import React ,{ useState } from "react";
import Notecontext from "./Notecontext";
// i have to learn more  about use context hook but as i know now it is used to deliver state to difffrent components of a project even witht passing down to them.
const Notestate = (props)=>{
const host = "http://localhost:5000"
const notecontext= []
  const [notes, setNotes] = useState(notecontext)
  // 
  const Getnotes = async () => {
    // API Call 
    const response = await fetch(`${host}/api/note/fetchnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      }
    });
    const json = await response.json()
    setNotes(json)
  }
  //Here data is  asdded through the api we created in the backend  i 
    const Addnote = async (title, description, tag) => {
      const response = await fetch(`${host}/api/note/addnotes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": localStorage.getItem('token')
        },
        body: JSON.stringify({title, description, tag})
      });
      const json=await response.json()
      const note=json
      setNotes(notes.concat(note))
  }
  // this shit isnnot working right now
  const Updatenote = async (id, title, description, tag) => {
    // API Call 
    const response = await fetch(`${host}/api/note/updatenote/${id}`, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({title, description, tag})
    });
    const json = response.json();
    console.log(json);
    // Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        notes[index].title = title;
        notes[index].description = description;
        notes[index].tag = tag;
      }
    }
  }

// 
const Deletenote = async (id) => {
  // API Call
  const response = await fetch(`${host}/api/note/deletenote/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      "auth-token": localStorage.getItem('token')
    }
  });
  const json = response.json();
  console.log(json)

  console.log("Deleting the note with id" + id);
  const newNotes = notes.filter((note) => { return note._id !== id })
  setNotes(newNotes)
}
  return(
  <Notecontext.Provider value={{notes,Addnote,Updatenote,Deletenote,Getnotes}}>
    {props.children}
</Notecontext.Provider>)
}
export default Notestate