import React from 'react';
import ReactHelmet from 'react-helmet';

const Helmet = () =>
  <ReactHelmet
    title="Elvis' Songs Discoverer"
    meta={[
      { charset: 'utf-8' },
      {
        'http-equiv': 'X-UA-Compatible',
        content: 'IE=edge',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
    ]}
  />;

export default Helmet;
