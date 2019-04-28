import React from 'react';
import { Route } from 'react-router-dom';

import Shelfs from '../components/Shelfs/Shelfs';
import Search from '../components/Search/Search';

const route = () => (
    <>
        <Route exact path="/" render={() => <Shelfs />} />
        <Route exact path="/search" render={() => <Search />} />
    </>
);

export default route;