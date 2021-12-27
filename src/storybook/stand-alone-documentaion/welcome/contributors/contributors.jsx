import { Contributor } from "../contributor/contributor";
import { Evgeniy, Hadas, Orr, Sahar, Moshe, Nick } from "../assets";
import "./contributors.scss";

export const Contributors = () => (
  <div className="monday-storybook-welcome-contributors">
    <Contributor
      imgSrc={Orr}
      fullName="Orr Gottlieb"
      title="Tech lead"
      className="monday-storybook-welcome-contributors_contributor--orr"
    />
    <Contributor
      imgSrc={Evgeniy}
      fullName="Evgeniy Kazenic"
      title="Product Designer Lead"
      className="monday-storybook-welcome-contributors_contributor--evgeniy"
    />
    <Contributor
      imgSrc={Hadas}
      fullName="Hadas Farhi"
      title="Full Stack Developer"
      className="monday-storybook-welcome-contributors_contributor--hadas"
    />
    <Contributor
      imgSrc={Moshe}
      fullName="Moshe Zemah"
      title="Senior Tech Lead"
      className="monday-storybook-welcome-contributors_contributor--moshe"
    />
    <Contributor
      imgSrc={Sahar}
      fullName="Sahar Brodbeker"
      title="Tech lead"
      className="monday-storybook-welcome-contributors_contributor--sahar"
    />
    <Contributor
      imgSrc={Nick}
      fullName="Nik Savchenko"
      title="Tech lead"
      className="monday-storybook-welcome-contributors_contributor--nick"
    />
  </div>
);
