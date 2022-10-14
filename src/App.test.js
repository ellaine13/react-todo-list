import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('ToDoListApp', () => {
  const renderComponent = () => {
    return render(
      <App/>
    );
  };

  afterEach(() => {
    window.localStorage.clear();
  });

  const fillItems = async () => {
    renderComponent();
    const formInput = screen.getByPlaceholderText('Што мае быць зроблена?');
    const formList = screen.getByRole('list');

    const itemsContent = [
      'Нумар адзін',
      'Нумар два',
      'Нумар тры',
      'Нумар чатыры',
      'Нумар пяць',
    ];

    expect(formList).toBeEmptyDOMElement();
    await userEvent.click(formInput);
    await userEvent.type(formInput, `${itemsContent[0]}{enter}`);
    await userEvent.type(formInput, `${itemsContent[1]}{enter}`);
    await userEvent.type(formInput, `${itemsContent[2]}{enter}`);
    await userEvent.type(formInput, `${itemsContent[3]}{enter}`);
    await userEvent.type(formInput, `${itemsContent[4]}{enter}`);
    expect(formList).not.toBeEmptyDOMElement();

    await userEvent.click(screen.getByText('Нумар два'));
    await userEvent.click(screen.getByText('Нумар чатыры'));
    expect(screen.getByLabelText('Нумар адзін')).not.toBeChecked();
    expect(screen.getByLabelText('Нумар два')).toBeChecked();
    expect(screen.getByLabelText('Нумар тры')).not.toBeChecked();
    expect(screen.getByLabelText('Нумар чатыры')).toBeChecked();
    expect(screen.getByLabelText('Нумар пяць')).not.toBeChecked();
  }

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

  test('Item deletes when Remove button clicked', async () => {
    renderComponent();

    const formInput = screen.getByPlaceholderText('Што мае быць зроблена?');
    const formList = screen.getByRole('list');
    const undoneItemsCount = screen.getByTestId('undoneItemsCount');

    expect(formList).toBeEmptyDOMElement();
    await userEvent.click(formInput);
    await userEvent.type(formInput, 'A new item{enter}');
    expect(formList).not.toBeEmptyDOMElement();

    const item = screen.getByText('A new item');

    const todoDeleteButton = screen.getByText('Выдаліць');
    fireEvent.click(todoDeleteButton);

    const items = screen.queryAllByTestId('toDoItem');

    expect(undoneItemsCount).toHaveTextContent('Засталося зрабіць: 0');

    expect(item).not.toBeInTheDocument();

    expect(items.length).toBe(0);
  });

  test('Should add 3 items', async () => {
    renderComponent();
    const formInput = screen.getByPlaceholderText('Што мае быць зроблена?');
    const formList = screen.getByRole('list');

    const itemsContent = [
      'Нумар адзін',
      'Нумар два',
      'Нумар тры',
    ];
    expect(formList).toBeEmptyDOMElement();
    await userEvent.click(formInput);

    await userEvent.type(formInput, `${itemsContent[0]}{enter}`);
    await userEvent.type(formInput, `${itemsContent[1]}{enter}`);
    await userEvent.type(formInput, `${itemsContent[2]}{enter}`);

    expect(formList).not.toBeEmptyDOMElement();

    const itemsNodes = screen.getAllByRole('listitem');
    expect(itemsNodes.length).toBe(3);
  });

  test('Checks that selected checkboxes were actually checked, and other ones not', async () => {
    renderComponent();
    const formInput = screen.getByPlaceholderText('Што мае быць зроблена?');
    const formList = screen.getByRole('list');

    const itemsContent = [
      'Нумар адзін',
      'Нумар два',
      'Нумар тры',
      'Нумар чатыры',
      'Нумар пяць',
    ];

    expect(formList).toBeEmptyDOMElement();
    await userEvent.click(formInput);
    await userEvent.type(formInput, `${itemsContent[0]}{enter}`);
    await userEvent.type(formInput, `${itemsContent[1]}{enter}`);
    await userEvent.type(formInput, `${itemsContent[2]}{enter}`);
    await userEvent.type(formInput, `${itemsContent[3]}{enter}`);
    await userEvent.type(formInput, `${itemsContent[4]}{enter}`);
    expect(formList).not.toBeEmptyDOMElement();

    await userEvent.click(screen.getByText('Нумар два'));
    await userEvent.click(screen.getByText('Нумар чатыры'));
    expect(screen.getByLabelText('Нумар адзін')).not.toBeChecked();
    expect(screen.getByLabelText('Нумар два')).toBeChecked();
    expect(screen.getByLabelText('Нумар тры')).not.toBeChecked();
    expect(screen.getByLabelText('Нумар чатыры')).toBeChecked();
    expect(screen.getByLabelText('Нумар пяць')).not.toBeChecked();
  });
})
