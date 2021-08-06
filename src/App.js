import { useState } from 'react';
import ToDoList from './ToDoList';
import './App.css';

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [userInput, setUserInput] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!userInput) return;
    addListItem(userInput);
    setUserInput('');
  }

  const handleInputChange = (event) => {
    setUserInput(event.currentTarget.value)
  }

  const addListItem = (userInput) => {
    let copy = [...toDoList];

    copy = [...copy, {
      id: toDoList.length + userInput,
      taskName: userInput,
      complete: false,
    }];
    setToDoList(copy);
  }

  const handleToggle = (id) => {
    let mapped = toDoList.map(taskName => {
      return taskName.id === id ? { ...taskName, complete: !taskName.complete } : { ...taskName};
    });

    setToDoList(mapped);
  }

  const handleUnfinished = () => {
    let unfinished = toDoList.filter(task => {
      return !task.complete;
    });

    setToDoList(unfinished);
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
          <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleUnfinished={handleUnfinished} />
        </form>
      </main>
    </div>
  );
}

export default App;
