import React , {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
 // set useState for title input 
const[title,setTitle]= useState([]) // an array
// set useState for content input 
const[content,setContent]= useState([]) // an array

var Createtitle; // hold value of new title 
var CreateContent; // hold value of new content

// function to get input (Title of Note) when user enter input and store in var {Createtitle}
function getTitle(event){ 
  Createtitle =event.target.value;
}
// function to get input (Content of Note) when user enter TextArea and store in var {Createtitle}
function getContent(event){ 

  CreateContent= event.target.value
 
}

// When user click Add button ==> function to update {title} and {content} by Hook useState
function addNote(event){
// adding newCreatetitle to the stack {title}
  setTitle(function (previous){
    return([...previous,Createtitle]) // applied Spread operator

  });
 // adding newCreatetitle to the stack {Content} 
  setContent(function (previous){
    return ([...previous,CreateContent]) // applied Spread operator
  });
  console.log("Title go here") 
  console.log(title);
  event.preventDefault()  // 
}

// pre-condition: user click delete button
// delete any chosen note
function deleteNote(id){
// update new state of Title
  setTitle(function (prev) {
    return (prev.filter(function chosen (element,index){
    return (index!==id)          // return the stack {title} with indexs is different than the one user choose
  }
  ))}
  );
// update new state of Content
  setContent(function(prev) {
    return (prev.filter(function chosen (element,index){
    return (index!==id)           // return the stack {content} with indexs is different than the one user choose
  })
  )})
}
 // Render start from here
  return (
    <div>
{/* // React components */}
      <Header />
      <CreateArea
      // property list
       getText={getTitle} 
       getTextErea ={getContent}
       addNote={addNote}
      />
{
  title.map(function loop(element,index) { 
  
  return (<Note 
        // property list
            key={index} 
            id= {index}
            title={element} 
            content={content[index]}
            delete={deleteNote}
          />)
}) 
}

      <Footer />
    </div>
  );
}

export default App;
