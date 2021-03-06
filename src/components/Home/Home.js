import React, { Component } from 'react';
import styled from 'styled-components';

import './Home.css';

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${props => props.Color || "palevioletred"} ;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

class Home extends Component {
    render() {
        return (
            <Wrapper>
                <Title Color="red">
                    Hello World!
                </Title>
          </Wrapper>
        )
    }
}

export default Home;