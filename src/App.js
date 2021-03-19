import { useState } from 'react';
import './App.css';
import ToDoList from './ToDoList';

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [userInput, setUserInput] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    addListItem(userInput);
    setUserInput('');
  }

  const handleInputChange = (event) => {
      setUserInput(event.currentTarget.value)
  }

  const addListItem = (userInput) => {
      let copy = [...toDoList];

      copy = [...copy, {
          id: toDoList.length + 1,
          task: userInput,
      }];

      setToDoList(copy);
  }

  return (
    <div className="App">
      <header className="header">
        <h1>Сьпіс спраў</h1>
      </header>
      <main>
        <form
          onSubmit={handleFormSubmit}
          className="form"
        >
          <input
            type="text"
            placeholder="Што мае быць зроблена?"
            className="form__input"
            onChange={handleInputChange}
            value={userInput}
          />
          <ToDoList toDoList={toDoList} />
        </form>
      </main>
    </div>
  );
}

export default App;
