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
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJlZWJkNDU4ZTY3MTVkZGEzMjc0NGI3In0sImlhdCI6MTY1OTgxMzE5NH0.q_A_K7PI2PotMMty1RBJktAoOzpMeI_nKGntOHPQj9M"
      }
    });
    const json = await response.json()
    console.log(json)
    setNotes(json)
  }
  // 
  const Addnote=(title,description,tag)=>{
  console.log("Adding");
  const note={
    "_id": "61322f19553781a8c68d0e08",
    "user": "6131dc5e3e4037cd4734a066",
    "title": title,
    "description": description,
    "tag": tag,
    "date": "2021-09-03T14:20:09.668Z",
    "__v": 0
  }
  setNotes(notes.concat(note))
  }
  // 
  const Updatenote=(id,title,description,tag)=>{
  for (let index = 0; index < notes.length; index++) {
    const element = notes[index];
    if (element._id===id) 
    {
    element.title=title
    element.description=description
    element.tag=tag 
    }
  }
  }

// 
  const Deletenote=(id)=>{
    console.log("Deleting the note with id" + id);
    const newNotes = notes.filter((note)=>{return note._id!==id})
    setNotes(newNotes)
  }
  return(
  <Notecontext.Provider value={{notes,Addnote,Updatenote,Deletenote,Getnotes}}>
    {props.children}
</Notecontext.Provider>)
}
export default Notestate