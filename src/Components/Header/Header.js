import { IconButton } from "@material-ui/core";
import NoteIcon from "@material-ui/icons/Note";
import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <IconButton>
          <NoteIcon className="noteIcon" />
        </IconButton>
        <h1 className="header_note">Notes</h1>
      </div>
    </div>
  );
}
