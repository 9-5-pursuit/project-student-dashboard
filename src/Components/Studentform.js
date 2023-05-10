import React from 'react'
import {useState} from 'react'
import {v1 as generateUniqueID} from 'uuid'

export default function Studentform() {
    
    const [user, setuser] = useState({
    commenterName:"",
    comment:"",
 })

 function addComment(){
    const createPost ={
        id: generateUniqueID(),
        name: user.commenterName,
        note: user.comment
    }
    setuser(createPost)
 }
 function handleSubmit(e){
    e.preventDefault();
    resetForm()
    addComment()
  }  
  function handleTextChange(e){
 

      setuser({
        ...user,
       [e.target.id]: e.target.value
     });
    }
    function resetForm(){
     setuser({
       commenterName:"",
       comment:"",
       
     })
    }

    return (
    <div className='App'>
        <form onSubmit={handleSubmit}>
            <h3>1-on-1 Notes</h3>
        </form>
        <label htmlFor="name">Commenter Name:</label>
           <input
           type="text"
           id="commenterName"
           name="commmentername"
           value={user.commenterName}
          onChange={handleTextChange}
          />
          <br />
          <label htmlFor="comment">Comment:</label>
           <input
          type="text"
          id="comment"
          name="comment"
          value={user.comment}
          onChange={handleTextChange}
          />
          <br />
          <button type='submit'>Add Note</button>
    </div>
  )
}
