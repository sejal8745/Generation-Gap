import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import "./CreateNote.css";
import { IconButton } from "@material-ui/core";

function CreateNote(props) {
  const [expand, setExpand] = useState(false);
  const [note, setNote] = useState({
    title: "",
    subject: "",
  });

  const InputEvent = (event) => {
    // const value = event.target.value;
    // const name = event.target.name;

    const { name, value } = event.target;

    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const addEvent = () => {
    props.passNote(note);
    setNote({
      title: "",
      subject: "",
    });
  };

  const expandit = () => {
    setExpand(true);
  };

  const normal = () => {
    setExpand(false);
  };

  return (
    <div className="main_note" onDoubleClick={normal}>
      <form>
        {expand ? (
          <input
            name="title"
            className="title"
            type="text"
            value={note.title}
            onChange={InputEvent}
            placeholder="Title"
            autoComplete="off"
          />
        ) : null}
        <textarea
          name="subject"
          className="subject"
          value={note.subject}
          onChange={InputEvent}
          rows=""
          column=""
          placeholder="Write your note...."
          autoComplete="off"
          onClick={expandit}
        />
        {expand ? (
          <IconButton onClick={addEvent}>
            <AddIcon className="plus_sign" />
          </IconButton>
        ) : null}
      </form>
    </div>
  );
}

export default CreateNote;
