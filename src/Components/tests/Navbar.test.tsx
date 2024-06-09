import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "../Navbar";

describe("Navbar", () => {
  it("renders correct text", () => {
    render(
      <Router>
        <Navbar />
      </Router>,
    );

    expect(screen.getByText("Главная")).toBeInTheDocument();
    expect(screen.getByText("О нас")).toBeInTheDocument();
    expect(screen.getByText("Контакты")).toBeInTheDocument();
    expect(screen.getByText("Войти")).toBeInTheDocument();
  });
});
