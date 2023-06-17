import { useState } from "react";
import "./App.css";
import Input from "./Component/Input/Input";
import Inputcontainer from "./Component/Inputcontainer/Inputcontainer";
import Popup from "./Component/Popup/Popup";
import Userslist from "./Component/Userslist/Userslist";

function App() {
  const [display, setDisplay] = useState("none");
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelecteduser] = useState("");
  return (
    <div className="App">
      {/* <Input/> */}
      <div onClick={() => {
          setDisplay("none")
        }} className="usersContainer">
        <Userslist/>
      </div>
      <div className="chatContainer">
        <div onClick={() => {
          setDisplay("none")
        }} className="chat">
          <div>
          {selectedUser ? `This conversation is just between you and @${selectedUser} . Take a
          look at their profile to learn more about them.`:null}
          </div>
        </div>
        <div onClick={() => {
          setDisplay("none")
        }} className="chatInput">
          <Inputcontainer setDisplay={setDisplay} setUsers={setUsers} selectedUser={selectedUser} />
        </div>
        <Popup
          display={display}
          users={users}
          setSelecteduser={setSelecteduser}
          setDisplay={setDisplay}
        />
      </div>
    </div>
  );
}

export default App;
