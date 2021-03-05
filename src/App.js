import { useState } from 'react';
import './App.css';

function App() {
  const [listItem, setListItem] = useState([]);

  const handleFormSubmit = (event) => {
    console.log(listItem, event.target.textContent);
    event.preventDefault();
    setListItem([event.target.textContent]);

    event.target.reset();
  }

  const itemsListRender = (event) => {
    // if (listItem.length) {
      console.log(listItem);
      return (
        <li className="form__item" key={listItem}>{listItem}</li>
      )
    // }
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
              onChange={e => setListItem(e.target.value)}
          />
          <ul className="form__list">
            {itemsListRender()}
          </ul>
        </form>
      </main>
    </div>
  );
}

export default App;
