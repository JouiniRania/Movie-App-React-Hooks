import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button"; 
import ModalExample from './components/Modal' 

//import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function App() {
  const [newtask, setTask] = useState("add task list");
  const [task, addTask] = useState([]);
  const [show, setShow] = useState(false);
  const [cible, setcible] = useState("");
  const handleChange = (e) => {
    setTask(e.target.value);
  };
  const add = () => {
    if (newtask)
    addTask([...task, newtask])
    else
      alert("add task first")
      addTask([newtask]);
      setTask("");
  };

  const removetask = (e) => {
    task.splice(e.target.name, 1);
    addTask([...task]);
  };
  const change = (e) => {
    setTask(e.target.value);
  };
  const addChange = () => {
    if (newtask)
    (task[cible] = newtask)
    else
    alert("add task first");
    addTask([...task]);
    setTask("");
    handleCancel();
  };
  const handleCancel = () => setShow(false);
  const handleShow = (e) => {
    setShow(true);
    setcible(e.target.name);
  };


  return (
    <div className="App">
      <div className="col-12" style={{ margin: 20 }}>
        <div className="col-3"></div>
        <input
          className="col-4 "
          placeholder="your task "
          type="text"
          onChange={handleChange}
          value={newtask}
        ></input>
        <Button  class="btn btn-outline-secondary" style={{ margin: 100}} onClick={add}>
          Add task
        </Button>
      </div>
      <div className="tasklist col-12">
        {task.map((el, i) => {
          return (
            <div className="task ">
              <h3 key={i + 100} className="col-8 border">
                {el}
              </h3>
              <Button
                key={i + 10000}
                className="col-2"
                variant="primary"
                name={i}
                onClick={handleShow}
              >
                Edit
              </Button>
              <Button
                key={i + 1000000}
                className="col-2"
                variant="secondary"
                name={i}
                onClick={removetask}
              >
                Delete
              </Button>
            </div>
          );
        })}
      </div>
 

      <>
        <Modal show={show} onHide={handleCancel}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Todo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input
              type="text"
              onChange={change}
              placeholder={task[cible]}
            ></input>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCancel}>
              Close
            </Button>
            <Button variant="primary" onClick={addChange}>
              Edit Todo
            </Button>
          </Modal.Footer>
        </Modal>
      </>

       <ModalExample></ModalExample>

    </div>
  );
}

export default App;
