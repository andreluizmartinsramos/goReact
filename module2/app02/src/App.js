import React from 'react';
import styled from 'styled-components';
import './styles/global';

const Title = styled.h1`
  font-size: 12px;
  color: red;
`;

const App = () => (
  <div className="App">
    <Title>Hello World!</Title>
  </div>
);

export default App;
