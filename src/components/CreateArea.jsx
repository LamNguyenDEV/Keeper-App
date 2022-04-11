import React from "react";

function CreateArea(props) {
  return (
    <div>
      <form>
        <input 
        name="title"
        placeholder="Title"
        onChange={props.getText}
         />
        < textarea 
        name="content" 
        placeholder="Take a note..." 
        rows="3" 
        onChange={props.getTextErea} 
        />
        <button onClick={props.addNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
