import React from 'react';

//-- Components --//
import Directory from '../../components/directory/directory.component';

//-- Style --//
import { HomePageContainer } from './homepage.styles';

//-----------------------------------------------------------------------------//
//-----------------------------------------------------------------------------//

const HomePage = () => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default HomePage;
