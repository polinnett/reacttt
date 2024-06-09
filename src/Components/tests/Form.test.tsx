import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Form } from "../Form";

describe('Form component', () => {
  test('renders form inputs and submit button', () => {
    render(<Form />);

    expect(screen.getByPlaceholderText('Введите ваше имя')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Введите ваш возраст')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Введите вашу почту')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Введите номер вашего телефона')).toBeInTheDocument();

    const submitButton = screen.getByText('Сохранить');
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toBeDisabled();
  });

  test('submits form with valid input', async () => {
    render(<Form />);

    userEvent.type(screen.getByPlaceholderText('Введите ваше имя'), 'John');
    userEvent.type(screen.getByPlaceholderText('Введите ваш возраст'), '30');
    userEvent.type(screen.getByPlaceholderText('Введите вашу почту'), 'john@example.com');
    userEvent.type(screen.getByPlaceholderText('Введите номер вашего телефона'), '1234567890');

    expect(screen.queryByText('Обязательно к заполнению')).not.toBeInTheDocument();

  });
});
