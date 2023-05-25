import { renderHook } from "@testing-library/react-hooks";
import useDisableScroll from "..";

describe("useDisableScroll", () => {
  let addEventListenerSpy;
  let removeEventListenerSpy;

  beforeEach(() => {
    addEventListenerSpy = jest.spyOn(document, "addEventListener");
    removeEventListenerSpy = jest.spyOn(document, "removeEventListener");
  });

  afterEach(() => {
    addEventListenerSpy.mockRestore();
    removeEventListenerSpy.mockRestore();
  });

  test("should add event listeners when disableScroll is called", () => {
    const { result } = renderHook(() => useDisableScroll(".scrollable"));

    result.current.disableScroll();

    expect(addEventListenerSpy).toHaveBeenCalledTimes(1);
    expect(addEventListenerSpy).toHaveBeenCalledWith("wheel", expect.any(Function));
  });

  test("should remove event listeners when disableScroll is called", () => {
    const { result } = renderHook(() => useDisableScroll(".scrollable"));

    result.current.disableScroll();

    expect(removeEventListenerSpy).toHaveBeenCalledTimes(1);
    expect(removeEventListenerSpy).toHaveBeenCalledWith("wheel", expect.any(Function));
  });

  test("should not throw an error when disableScroll is called after unmounting", () => {
    const { result, unmount } = renderHook(() => useDisableScroll(".scrollable"));

    unmount();

    expect(() => {
      result.current.disableScroll();
    }).not.toThrow();
  });
});
