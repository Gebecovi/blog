import React, { FunctionComponent, ReactElement } from 'react'
import AppImageStyles from '../assets/styles/Components/AppImage';

type Props = {
  url: string;
}

export const AppImage: FunctionComponent<Props> = ({ url }): ReactElement => {
  const imageStyles = {
    ...AppImageStyles.image,
    backgroundImage: `url(${url})`
  }

  return (
    <div style={AppImageStyles.imageComponent}>
      <div style={AppImageStyles.imageWrapper}>
        <div style={imageStyles}></div>
      </div>
    </div>
  );
}
