import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('ToDoListApp', () => {
  const renderComponent = () => {
    return render(
      <App/>
    );
  };

  test('Checks ToDo form input existence', () => {
    renderComponent();
    const formInput = screen.getByPlaceholderText('Што мае быць зроблена?');
    expect(formInput).toBeInTheDocument();
  });

  test('Checks if new ToDo item adds on enter press', async () => {
    renderComponent();
    const formInput = screen.getByPlaceholderText('Што мае быць зроблена?');
    const formList = screen.getByRole('list');

    expect(formList).toBeEmptyDOMElement();
    await userEvent.click(formInput);
    await userEvent.type(formInput, 'A new item{enter}');
    expect(formList).not.toBeEmptyDOMElement();
  });

  test('Should add 3 items', async () => {
    renderComponent();
    const formInput = screen.getByPlaceholderText('Што мае быць зроблена?');

    const itemsContent = [
      'Нумар адзін',
      'Нумар два',
      'Нумар тры',
    ];

    itemsContent.map(itemText => createItem(formInput, itemText));

    const itemsNodes = screen.getAllByRole('listitem');
    expect(itemsNodes.length).toBe(3);

    itemsNodes.forEach((itemNode, index) => expect(itemNode).toHaveTextContent(itemsContent[index]));
  });
})

const createItem = (formInput, itemText) => {
  expect(formInput).not.toHaveValue();

  fireEvent.change(formInput, { target: { value: itemText } })

  expect(formInput).toHaveValue(itemText)

  userEvent.type(formInput, 'A new item{enter}');

  expect(formInput).not.toHaveValue();
}
