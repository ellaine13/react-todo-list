import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('ToDoListApp', () => {
  const renderComponent = () => {
    return render(
      <App/>
    );
  };

  beforeEach(() => {
    renderComponent();
  });

  test('Checks ToDo form input existence', () => {
    const formInput = screen.getByPlaceholderText('Што мае быць зроблена?');
    expect(formInput).toBeInTheDocument();
  });

  test('Checks if new ToDo item adds on enter press', async () => {
    const formInput = screen.getByPlaceholderText('Што мае быць зроблена?');
    const formList = screen.getByTestId('form-list');

    expect(formList).toBeEmptyDOMElement();
    userEvent.click(formInput);
    userEvent.type(formInput, 'A new item{enter}');
    expect(formList).not.toBeEmptyDOMElement();
  });
})
