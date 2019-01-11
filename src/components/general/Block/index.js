/**
 *
 * Block.js
 *
 * Renders a Content Section with styles and props
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const getBackground = props => {
  let bgColor;
  const themeBgColor = props.theme.palette.background;

  if (props.bgImgLink) {
    bgColor = `url(${props.bgImgLink})`;
  } else if (props.bgColor === 'dark') {
    bgColor = themeBgColor.dark;
  } else if (props.bgColor === 'light') {
    bgColor = themeBgColor.light;
  } else if (props.bgColor === 'grey') {
    bgColor = themeBgColor.grey;
  } else if (props.bgColor === 'dimgray') {
    bgColor = themeBgColor.dimgray;
  } else if (props.bgColor === 'gradient') {
    bgColor = themeBgColor.gradient;
  } else {
    bgColor = themeBgColor.neutral;
  }
  return bgColor;
};

const Content = styled.div`
  // border: 3px solid red;
  display: flex;
  align-items: center;
  justify-contents: center;
  padding: 2rem;
`;

const FlexGridBlock = styled.section`
  background: ${props => getBackground(props)};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 2rem;

  flex-basis: ${props => props.basis + '%'};
`;

const GridBlock = styled.div`
  cursor: move;
  background: ${props => getBackground(props)};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 2rem;

  grid-area: ${props => {
    let ratio;
    if (props.size === 'xs') {
      ratio = 'span 1 / span 1';
    } else if (props.size === 'sm') {
      ratio = 'span 2 / span 3';
    } else if (props.size === 'md') {
      ratio = 'span 3 / span 3';
    } else if (props.size === 'lg') {
      ratio = 'span 4 / span 6';
    } else if (props.size === 'custom') {
      ratio = 'span 4 / span 4';
    }
    return ratio;
  }};
`;

GridBlock.defaultProps = {
  size: 'md',
};

export class Block extends Component {
  static propTypes = {
    bgColor: PropTypes.string,
    flexBasis: PropTypes.string,
    gridSize: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
  };

  render() {
    const {
      children,
      bgColor,
      flexBasis,
      gridSize,
      type,
      className,
    } = this.props;

    if (type === 'grid') {
      return (
        <GridBlock bgColor={bgColor} size={gridSize} className={className}>
          {children}
        </GridBlock>
      );
    } else {
      return (
        <FlexGridBlock
          bgColor={bgColor}
          basis={flexBasis}
          className={className}
        >
          <Content>{children}</Content>
        </FlexGridBlock>
      );
    }
  }
}

Block.defaultProps = {
  bgColor: 'neutral',
  type: 'flex',
  flexBasis: '100',
  gridSize: 'md',
};

export default Block;
