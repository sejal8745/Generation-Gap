import React from "react";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { IconButton } from "@material-ui/core";
import "./Notes.css";

function Notes(props) {

  const deleteNote = () => {
       props.deleteNote(props.id);
  };
  return (
    <div className="notes">
      <h1 className="titleNote"> {props.title} </h1>
      <br />
      <p className="subNote"> {props.subject} </p>
      <IconButton onClick={deleteNote}>
        <DeleteOutlineIcon className="deleteIcon"/>
      </IconButton>
    </div>
  );
}

export default Notes;
