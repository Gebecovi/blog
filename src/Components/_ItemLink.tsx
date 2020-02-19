import React, { FunctionComponent, ReactElement } from "react";
import ItemLinkStyles from "../assets/styles/Components/ItemLink";

type Props = {
  data: {
    title: string;
    author?: string;
    url: string;
  };
};

export const ItemLink: FunctionComponent<Props> = ({ data }): ReactElement => {
  return (
    <li>
      <span style={ItemLinkStyles.text}>
        {data.title} {data.author && `- ${data.author} `}
      </span>
      <a
        style={ItemLinkStyles.link}
        href={data.url}
        about="_blank"
        rel="noopener noreferrer"
      >
        (odkaz)
      </a>
    </li>
  );
};
