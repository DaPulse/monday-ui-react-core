import React from "react";
import { act, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { snapshotDiff } from "../../../../jest/utils";
import { renderSliderInNonRangeMode } from "./slider-tests.utils";

jest.useFakeTimers();

jest.mock("../../TextField/TextField", () => {
  const TextField = props => {
    return <div data-testid="mock-text-field-comp">{JSON.stringify(props)}</div>;
  };
  return TextField;
});

it("a. Non-ranged Slider: basic renderer", async () => {
  const { asFragment } = await renderSliderInNonRangeMode();
  expect(asFragment().firstChild).toMatchSnapshot();
});

describe("b. Non-ranged Slider Active/Inactive", () => {
  it("01. show Tooltip when hover Thumb", async () => {
    let before;
    let after;
    await act(async () => {
      const { asFragment, elThumb } = await renderSliderInNonRangeMode();
      before = asFragment().firstChild;
      userEvent.hover(elThumb);
      jest.advanceTimersByTime(999);
      after = asFragment().firstChild;
    });
    expect(snapshotDiff(before, after)).toMatchSnapshot();
  });

  it("02. hide Tooltip when unhover Thumb", async () => {
    let before;
    let after;
    await act(async () => {
      const { asFragment, elThumb } = await renderSliderInNonRangeMode();
      userEvent.hover(elThumb);
      jest.advanceTimersByTime(999);
      before = asFragment().firstChild;
      userEvent.unhover(elThumb);
      jest.advanceTimersByTime(999);
      after = asFragment().firstChild;
    });
    expect(snapshotDiff(before, after)).toMatchSnapshot();
  });

  it("03. activate Thumb by Tab key press ", async () => {
    let before;
    let after;
    await act(async () => {
      const { asFragment } = await renderSliderInNonRangeMode();
      before = asFragment().firstChild;
      userEvent.tab();
      jest.advanceTimersByTime(999);
      after = asFragment().firstChild;
    });
    expect(snapshotDiff(before, after)).toMatchSnapshot();
  });

  it("04. de-activate Thumb by Tab key press, when Thumb focused ", async () => {
    let before;
    let after;
    await act(async () => {
      const { asFragment, elThumb } = await renderSliderInNonRangeMode();
      elThumb.focus();
      before = asFragment().firstChild;
      userEvent.tab();
      jest.advanceTimersByTime(999);
      after = asFragment().firstChild;
    });
    expect(snapshotDiff(before, after)).toMatchSnapshot();
  });
});

describe("c. Non-ranged Slider Key Events", () => {
  it("01. decrease value by Left/Down keys press", async () => {
    let before;
    let after;
    await act(async () => {
      const { asFragment, elThumb } = await renderSliderInNonRangeMode({ showValue: true });
      elThumb.focus();
      before = asFragment().firstChild;
      userEvent.keyboard("{arrowleft}");
      userEvent.keyboard("{arrowdown}");
      after = asFragment().firstChild;
    });
    expect(snapshotDiff(before, after)).toMatchSnapshot();
  });

  it("02. increase value by Right/Up keys press", async () => {
    let before;
    let after;
    await act(async () => {
      const { asFragment, elThumb } = await renderSliderInNonRangeMode({ showValue: true });
      elThumb.focus();
      before = asFragment().firstChild;
      userEvent.keyboard("{arrowright}");
      userEvent.keyboard("{arrowup}");
      after = asFragment().firstChild;
    });
    expect(snapshotDiff(before, after)).toMatchSnapshot();
  });

  it("03. decrease value (step 10%) by PageDown key press", async () => {
    let before;
    let after;
    await act(async () => {
      const { asFragment, elThumb } = await renderSliderInNonRangeMode({ showValue: true });
      elThumb.focus();
      before = asFragment().firstChild;
      userEvent.keyboard("{pagedown}");
      after = asFragment().firstChild;
    });
    expect(snapshotDiff(before, after)).toMatchSnapshot();
  });

  it("04. increase value (step 10%) by PageUp key pres", async () => {
    let before;
    let after;
    await act(async () => {
      const { asFragment, elThumb } = await renderSliderInNonRangeMode({ showValue: true });
      elThumb.focus();
      before = asFragment().firstChild;
      userEvent.keyboard("{pageup}");
      userEvent.keyboard("{pageup}");
      after = asFragment().firstChild;
    });
    expect(snapshotDiff(before, after)).toMatchSnapshot();
  });

  it("05. change value by keys press in Step and Label mode", async () => {
    let before;
    let after;
    await act(async () => {
      const { asFragment, elThumb } = await renderSliderInNonRangeMode({
        indicateSelection: true,
        showValue: true,
        step: 10
      });
      elThumb.focus();
      // jest.advanceTimersByTime(999);
      before = asFragment().firstChild;
      await userEvent.keyboard("{arrowright}");
      await userEvent.keyboard("{arrowright}");
      // jest.advanceTimersByTime(999);
      after = asFragment().firstChild;
    });
    expect(snapshotDiff(before, after)).toMatchSnapshot();
  });
});

describe("d. Non-ranged Slider Mouse Events", () => {
  let getBoundingClientRectMock;
  beforeAll(async () => {
    getBoundingClientRectMock = jest.spyOn(global.HTMLElement.prototype, "getBoundingClientRect");
    getBoundingClientRectMock.mockImplementation(() => ({
      bottom: 32,
      height: 16,
      left: 24,
      right: 508,
      top: 16,
      width: 484,
      x: 24,
      y: 16
    }));
  });

  afterAll(async () => {
    getBoundingClientRectMock.mockRestore();
  });

  it("01. decrease by mouse click on Track", async () => {
    let before;
    let after;
    await act(async () => {
      const { asFragment } = await renderSliderInNonRangeMode({ showValue: true });
      const elRail = screen.getByTestId("monday-slider__rail");
      jest.advanceTimersByTime(999);
      before = asFragment().firstChild;
      userEvent.click(elRail, { clientX: 100 });
      jest.advanceTimersByTime(999);
      after = asFragment().firstChild;
    });
    expect(snapshotDiff(before, after)).toMatchSnapshot();
  });

  it("02. increase value by mouse click on Track", async () => {
    let before;
    let after;
    await act(async () => {
      const { asFragment } = await renderSliderInNonRangeMode({ showValue: true });
      const elRail = screen.getByTestId("monday-slider__rail");
      jest.advanceTimersByTime(999);
      before = asFragment().firstChild;
      userEvent.click(elRail, { clientX: 200 });
      jest.advanceTimersByTime(999);
      after = asFragment().firstChild;
    });
    expect(snapshotDiff(before, after)).toMatchSnapshot();
  });
});
