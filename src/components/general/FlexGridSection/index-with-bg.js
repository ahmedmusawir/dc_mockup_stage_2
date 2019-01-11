/**
 *
 * FlexGridSection.js
 *
 * Renders a Content Section with styles and props
 */
import styled from 'styled-components';

const getBackground = props => {
  let bgColor;
  if (props.bgImgLink) {
    bgColor = `url(${props.bgImgLink})`;
  } else if (props.bgColor === 'dark') {
    bgColor = props.theme.palette.background.dark;
  } else if (props.bgColor === 'light') {
    bgColor = props.theme.palette.background.light;
  } else if (props.bgColor === 'grey') {
    bgColor = props.theme.palette.background.grey;
  } else if (props.bgColor === 'dimgray') {
    bgColor = props.theme.palette.background.dimgray;
  } else if (props.bgColor === 'gradient') {
    bgColor = props.theme.palette.background.gradient;
  } else {
    bgColor = props.theme.palette.background.neutral;
  }
  return bgColor;
};

export const FlexGridSection = styled.section`
  background: ${props => getBackground(props)};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 2rem;

  @media screen and (min-width: 760px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export default FlexGridSection;
