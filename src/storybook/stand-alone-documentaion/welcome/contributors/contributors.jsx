import React from "react";
import { Flex } from "components";
import { Contributor } from "../contributor/contributor";
import { Evgeniy, Hadas, Moshe, Nik, Omri, Orr, Sahar, Yonatan } from "../assets";
import "./contributors.scss";

const CONTRIBUTORS = [
  {
    imgSrc: Orr,
    fullName: "Orr Gottlieb",
    email: "orr@monday.com",
    title: "Developer",
    className: "monday-storybook-welcome-contributors_contributor--bg-pattern-1"
  },
  {
    imgSrc: Evgeniy,
    fullName: "Evgeniy Kazenic",
    email: "evgeniy@monday.com",
    title: "Designer",
    className: "monday-storybook-welcome-contributors_contributor--bg-pattern-2"
  },
  {
    imgSrc: Hadas,
    fullName: "Hadas Farhi",
    email: "hadasfa@monday.com",
    title: "Developer",
    className: "monday-storybook-welcome-contributors_contributor--bg-pattern-3"
  },
  {
    imgSrc: Moshe,
    fullName: "Moshe Zemah",
    email: "moshe@monday.com",
    title: "Developer",
    className: "monday-storybook-welcome-contributors_contributor--bg-pattern-4"
  },
  {
    imgSrc: Sahar,
    fullName: "Sahar Brodbeker",
    email: "saharb@monday.com",
    title: "Developer",
    className: "monday-storybook-welcome-contributors_contributor--bg-pattern-5"
  },
  {
    imgSrc: Nik,
    fullName: "Nik Savchenko",
    email: "niksa@monday.com",
    title: "Developer",
    className: "monday-storybook-welcome-contributors_contributor--bg-pattern-4"
  },
  {
    imgSrc: Omri,
    fullName: "Omri Lavi",
    email: "omrila@monday.com",
    title: "Developer",
    className: "monday-storybook-welcome-contributors_contributor--bg-pattern-2"
  },
  {
    imgSrc: Yonatan,
    fullName: "Yonatan Lev Ari",
    email: "yonatanari@monday.com",
    title: "Developer",
    className: "monday-storybook-welcome-contributors_contributor--bg-pattern-3"
  }
];

export const Contributors = () => (
  <Flex
    className="monday-storybook-welcome-contributors"
    direction={Flex.directions.ROW}
    align={Flex.align.START}
    wrap
    gapRow={90}
    gapColumn={20}
  >
    {CONTRIBUTORS.map(({ imgSrc, fullName, email, title, className }) => (
      <Contributor key={email} imgSrc={imgSrc} fullName={fullName} email={email} title={title} className={className} />
    ))}
  </Flex>
);
