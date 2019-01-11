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
export const H3 = styled.h3`
  font-family: ${props => props.theme.font.family.primaryFontFamily};
  font-size: ${props => props.theme.font.groups.lg.size};
  font-weight: ${props => props.theme.font.groups.lg.weight};
  font-variant: ${props => props.theme.font.groups.lg.variant};
  transform: ${props => props.theme.font.groups.lg.transform};
  padding: ${props => props.theme.font.groups.lg.padding};
  line-height: ${props => props.theme.font.groups.lg.height};
  color: ${props => getColor(props)};
`;

H3.defaultProps = {
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
        lg: {
          size: '1.75rem',
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

export default H3;