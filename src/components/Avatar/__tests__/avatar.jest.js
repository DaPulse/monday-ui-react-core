import React from "react";
import renderer from "react-test-renderer";
import Avatar from "../Avatar.scss";
import { WhatsNew } from "../../Icon/Icons";

jest.mock("../../Icon", icon => <div data-testid="icon-mock">{icon}</div>);
const IMG_SRC =
  "https://files.monday.com/use1/photos/16447897/small/16447897-Hadas_Farhi_photo_2020_10_04_10_14_06.png?1601806446";
const BADGE_SRC = "https://cdn7.monday.com/images/working-status/wfh.svg";

describe("AttentionBox Tests", () => {
  describe("Snapshot Tests", () => {
    it("renders correctly with empty props", () => {
      const tree = renderer.create(<Avatar />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("renders correctly with image and text", () => {
      const tree = renderer.create(<Avatar img={IMG_SRC} text="Name" />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("renders correctly with image", () => {
      const tree = renderer.create(<Avatar img={IMG_SRC} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("renders correctly with not valid image", () => {
      const tree = renderer.create(<Avatar img="not valid src" />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("renders correctly with text", () => {
      const tree = renderer.create(<Avatar />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("renders correctly square avatar", () => {
      const tree = renderer.create(<Avatar isSquare />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("renders correctly an icon", () => {
      const tree = renderer.create(<Avatar tabIndex={-1} ariaHidden icon={WhatsNew} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("renders correctly with badges", () => {
      const tree = renderer
        .create(
          <Avatar
            tabIndex={-1}
            ariaHidden
            topRightBadgeProps={{ src: BADGE_SRC }}
            topLeftBadgeProps={{ src: BADGE_SRC }}
            bottomRightBadgeProps={{ src: BADGE_SRC }}
            bottomLeftBadgeProps={{ src: BADGE_SRC }}
          />
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
    it("renders correctly with damaged src badges", () => {
      const tree = renderer
        .create(
          <Avatar
            tabIndex={-1}
            ariaHidden
            topRightBadgeProps={{ src: "not valid" }}
            topLeftBadgeProps={{ src: "not valid" }}
            bottomRightBadgeProps={{ src: "not valid" }}
            bottomLeftBadgeProps={{ src: "not valid" }}
          />
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("renders correctly accessibility props", () => {
      const tree = renderer.create(<Avatar tabIndex={-1} ariaHidden />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
