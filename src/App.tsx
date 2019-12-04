import React, { FunctionComponent, ReactElement } from 'react';
import AppStyles from './assets/styles/Pages/App';

import { AppImage, ItemLink } from './Components';

import * as MartinJson from './data/Martin/Knizky.json';
import * as OndraJson from './data/Ondra/Nabytek.json';

type jsonDataType = {
  "name": string;
  "image": string;
  "data": {
      "title": string;
      "author"?: string;
      "url": string;
  }[];
}

const App: FunctionComponent = (): ReactElement => {

  const renderData: FunctionComponent<jsonDataType> = (data): ReactElement => (
    <div>
      <h2>{data.name}</h2>
      {data.image && <AppImage url={data.image} />}
      <ul>{data.data.map(row => <ItemLink data={row} />)}</ul>
    </div>
  )

  return (
    <div style={AppStyles.wrapper}>
      <div>
        <h1 style={AppStyles.header}>Ondra:</h1>
        {OndraJson.furniture.map(itemBulk => renderData(itemBulk))}
      </div>
      <div>
        <h1 style={AppStyles.header}>Martin:</h1>
        {MartinJson.books.map(itemBulk => renderData(itemBulk))}
      </div>
    </div>
  );
}

export default App;
