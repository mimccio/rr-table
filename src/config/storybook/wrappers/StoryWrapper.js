import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import BorderWrapper from './BorderWrapper';

/** Styles */
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
`;

const Content = styled.div`
  box-sizing: content-box;
  width: 100%;
  padding: 3rem;
`;

/** Component */
const StoryWrapper = ({ children, style, border }) => (border ? (
  <Wrapper style={style}>
    <Content>
      <BorderWrapper border={border}>{children}</BorderWrapper>
    </Content>
  </Wrapper>
) : (
  <Wrapper style={style}>
    <Content>{children}</Content>
  </Wrapper>
));

/** PropTypes */
StoryWrapper.propTypes = {
  border: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  /** Elements to display together */
  children: PropTypes.node.isRequired,
  /** Custom style */
  style: PropTypes.object,
};

export default StoryWrapper;
