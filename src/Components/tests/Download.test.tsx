import { render, screen } from "@testing-library/react";
import React from "react";
import PdfForm from "../pages/Download";

describe('PdfForm component', () => {
  test('renders form inputs and submit button', () => {
    render(<PdfForm />);

    expect(screen.getByPlaceholderText('Введите ваше имя')).toBeInTheDocument();
    expect(screen.getByTestId('input-update')).toBeInTheDocument();
    expect(screen.getByText('Сохранить')).toBeInTheDocument();
    expect(screen.getByText('Сохранить')).toBeEnabled();
  });
});