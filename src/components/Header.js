import React from 'react';
import { Navbar } from 'react-materialize';

const headerStyle = {
    backgroundColor: '#24292e',
};

const Header = () => (
    <Navbar brand='Redux Tutorial' style={ headerStyle } fixed>
    </Navbar>
);

export default Header;
