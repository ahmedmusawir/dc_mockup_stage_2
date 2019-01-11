/**
 *
 * Section.js
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

export const FlexGridSection = styled.section`
  background: ${props => getBackground(props)};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 2rem;

  @media screen and (min-width: ${props => props.gridStart}) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;

FlexGridSection.defaultProps = {
  gridStart: '760px',
};

export const GridSection = styled.section`
  background: ${props => getBackground(props)};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 2rem;

  @media screen and (min-width: ${props => props.gridStart}) {
    display: grid;
    grid-gap: ${props => props.gap};
    grid-template-columns: repeat(auto-fit, minmax(5rem, 1fr));
    grid-auto-flow: row dense;
    list-style: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    width: 100%;
    max-width: 120rem;
    overflow: hidden;
  }
`;

GridSection.defaultProps = {
  gap: '8px',
  gridStart: '760px',
};

export class Section extends Component {
  static propTypes = {
    bgColor: PropTypes.string,
    bgImgLink: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
  };

  render() {
    const { bgColor, bgImgLink, type, children, className } = this.props;
    const childrenBlocks = React.Children.map(children, child => {
      return React.cloneElement(child, {
        type: this.props.type,
      });
    });
    if (type === 'grid') {
      return (
        <GridSection
          bgColor={bgColor}
          bgImgLink={bgImgLink}
          className={className}
        >
          {childrenBlocks}
        </GridSection>
      );
    } else {
      return (
        <FlexGridSection
          bgColor={bgColor}
          bgImgLink={bgImgLink}
          className={className}
        >
          {childrenBlocks}
        </FlexGridSection>
      );
    }
  }
}

Section.defaultProps = {
  bgColor: 'neutral',
  type: 'flex',
};

export default Section;
