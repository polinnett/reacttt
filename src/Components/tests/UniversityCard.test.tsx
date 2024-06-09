import React from "react";
import { render, screen } from "@testing-library/react";
import UniversityCard from "../UniversityCard";

describe("UniversityCard", () => {
  it("renders h1 and span tags", () => {
    const testData = {
      name: "Test University",
      country: "Test Country",
    };

    render(<UniversityCard data={testData} />);

    const h1Element = screen.getByText("Test University");
    const spanElement = screen.getByText("Test Country");

    expect(h1Element).toBeInTheDocument();
    expect(spanElement).toBeInTheDocument();

    expect(h1Element.tagName).toBe("H1");
    expect(spanElement.tagName).toBe("SPAN");
  });
});
