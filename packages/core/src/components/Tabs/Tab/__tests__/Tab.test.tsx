import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Tab from "../Tab";

describe("Tab tests", () => {
  let onClickMock: jest.Mock<any, any>;
  const text = "tab";

  beforeEach(() => {
    onClickMock = jest.fn();
    render(<Tab onClick={onClickMock}>{text}</Tab>);
  });

  it("should call the click callback when clicked", () => {
    fireEvent.click(screen.getByText(text));
    expect(onClickMock.mock.calls.length).toBe(1);
  });
});
