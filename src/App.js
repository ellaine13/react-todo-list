import { useState } from 'react';
import ToDoList from './ToDoList';
import './App.css';

let localStorageList = [];

try {
  const localStorageList_ = JSON.parse(localStorage.getItem('toDoItems'));

  if (Array.isArray(localStorageList_)) {
    localStorageList = localStorageList_;
  }
} catch {}

function App() {
  const [toDoList, setToDoListState] = useState(localStorageList);
  const [userInputValue, setUserInputValue] = useState('');

  const saveData = (toDoItems) => {
    localStorage.setItem('toDoItems', JSON.stringify(toDoItems));
  }

  const setToDoList = (toDoItems) => {
    setToDoListState(toDoItems);
    saveData(toDoItems);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!userInputValue) return;
    addListItem(userInputValue);
    setUserInputValue('');
  }

  const handleInputChange = (event) => {
    setUserInputValue(event.currentTarget.value)
  }

  const addListItem = (userInput) => {
    const copy = [...toDoList, {
      id: toDoList.length + userInput,
      taskName: userInput,
      complete: false,
      index: toDoList.length,
    }];

    setToDoList(copy);
  }

  const handleToggle = (id) => {
    const mapped = toDoList.map(task => {
      return task.id === id ? { ...task, complete: !task.complete } : { ...task};
    });

    setToDoList(mapped);
  }

  const handleUnfinished = () => {
    const unfinished = toDoList.filter(task => {
      return !task.complete;
    });

    setToDoList(unfinished);
  }

  const handleItemRemove = (event) => {
    const itemText = event.target.previousSibling.textContent;

    const cleared = toDoList.filter(task => {
      return task.taskName !== itemText;
    });

    setToDoList(cleared);
  }

  const handleLabelChange = (index, event) => {
    const mappedList = toDoList.map(task => {
      return task.index === index ? { ...task, taskName: event.target.value } : { ...task};
    });

    setToDoList(mappedList);
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
            value={userInputValue}
          />
        </form>
        <ToDoList
          toDoList={toDoList}
          handleToggle={handleToggle}
          handleUnfinished={handleUnfinished}
          handleItemRemove={handleItemRemove}
          handleLabelChange={handleLabelChange}
        />
      </main>
    </div>
  );
}

export default App;
