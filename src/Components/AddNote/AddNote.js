import React, { useState } from 'react'
import Notes from '../../Pages/Notes/Notes'
import CreateNote from '../CreateNote/CreateNote'
import Header from '../Header/Header'

const AddNote = () => {
    const [addnote, setAddnote] = useState([]);
    const addNote = (note) => {
        // alert("I am clicked");
        setAddnote((prevData)=>{
           return[ ...prevData,note];
        });

        console.log(note);
    };

    const onDelete = (id) => {
     setAddnote((oldData) => 
         oldData.filter((currdata, indx) => {
             return indx!==id;
         })
     );
    };

    return (
        <div className="addNote">
            <Header />
            <CreateNote passNote={addNote} />
            {addnote.map((val,index)=>{
                return <Notes
                    key={index}
                    id={index}
                    title={val.title}
                    content={val.subject}
                    deleteNote={onDelete}
                />
            })}
        </div>
    )
}

export default AddNote
