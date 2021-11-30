import React from "react";
import renderer from "react-test-renderer";
import Search from "../Search";

describe("Search renders correctly", () => {
  it("with placeholder", () => {
    const tree = renderer.create(<Search  placeholder="placeholder" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with value", () => {
    const tree = renderer.create(<Search value="value" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("when disabled", () => {
    const tree = renderer.create(<Search disabled />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("when underline", () => {
    const tree = renderer.create(<Search underline />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with wrapperClassName", () => {
    const tree = renderer.create(<Search wrapperClassName="testClassName" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with className", () => {
    const tree = renderer.create(<Search className="testClassName" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with id", () => {
    const tree = renderer.create(<Search id="testId" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with validation", () => {
    const tree = renderer.create(<Search validation={{ status: "error" }} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with value", () => {
    const tree = renderer.create(<Search value="value" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with value", () => {
    const tree = renderer.create(<Search value="value" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
