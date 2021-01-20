import React from "react";
import renderer from "react-test-renderer";
import StepIndicator from "../components/StepIndicator/StepIndicator";
import MultiStepIndicator from "../MultiStepIndicator";

describe("MultiStepIndicator", () => {
  describe("Render tests", () => {
    it("Renders correctly with empty props", () => {
      const tree = renderer.create(<MultiStepIndicator />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("Renders correctly with non-default props", () => {
      const exampleSteps = [
        {
          status: MultiStepIndicator.stepStatuses.FULFILLED,
          titleText: "Title",
          subtitleText: "Subtitle"
        },
        {
          status: MultiStepIndicator.stepStatuses.ACTIVE,
          titleText: "Active",
          subtitleText: "Active Subtitle"
        },
        {
          status: MultiStepIndicator.stepStatuses.PENDING,
          titleText: "Pending",
          subtitleText: "Pending Subtitle"
        }
      ];
      const tree = renderer.create(<MultiStepIndicator type={MultiStepIndicator.types.SUCCESS} steps={exampleSteps} />);
      expect(tree).toMatchSnapshot();
    });
  });
});
