import { useState } from "react";
import "./App.css";
import General from "./components/General";
import GeneralEdit from "./components/GeneralEdit";

const initialPerson = [
  { name: "William Jacob", id: 0 },
  { email: "williamjacob0910@gmail.com", id: 1 },
  { phone: "98852803", id: 2 },
];



function App() {
  const [editMode, setEditMode] = useState(false);
  const [person, setPerson] = useState(initialPerson);
  function setEdit() {
    setEditMode(!editMode);
    console.log("clicked")
  }

  function handleGeneralEdit(id, e) {
    setPerson(person.map(info => {
      if (info.id == id) {
        return {...info, 
        name: e.target.value,
        email: e.target.value,
        phone: e.target.value
      } 
      } else {
        return info
      }
    }))
  }

  
  return (
    <div>
      {editMode && <General person={person} setEdit={setEdit} />}
      {!editMode && <GeneralEdit person={person} handleEdit={handleGeneralEdit} setEdit={setEdit}/>}
      
    </div>
  );
}

export default App;
