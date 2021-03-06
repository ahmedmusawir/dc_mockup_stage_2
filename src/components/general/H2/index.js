import styled from 'styled-components';

const getColor = props => {
  let color;
  if (props.light) {
    color = props.theme.colors.text.light;
  } else {
    color = props.theme.colors.text.dark;
  }
  return color;
};
export const H2 = styled.h2`
  font-family: ${props => props.theme.font.family.primaryFontFamily};
  font-size: ${props => props.theme.font.groups.xl.size};
  font-weight: ${props => props.theme.font.groups.xl.weight};
  font-variant: ${props => props.theme.font.groups.xl.variant};
  transform: ${props => props.theme.font.groups.xl.transform};
  padding: ${props => props.theme.font.groups.xl.padding};
  line-height: ${props => props.theme.font.groups.xl.height};
  color: ${props => getColor(props)};
`;

H2.defaultProps = {
  theme: {
    colors: {
      text: {
        dark: '#333',
      },
    },
    font: {
      family: {
        primaryFontFamily: 'Montserrat, sans-serif',
      },
      groups: {
        xl: {
          size: '2rem',
          weight: 'bold',
          height: '1.5rem',
          spacing: null,
          variant: null,
          style: null,
          transform: null,
          padding: '1rem',
        },
      },
    },
  },
};

export default H2;
