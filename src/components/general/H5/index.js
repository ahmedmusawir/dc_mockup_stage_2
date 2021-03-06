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
export const H5 = styled.h5`
  font-family: ${props => props.theme.font.family.primaryFontFamily};
  font-size: ${props => props.theme.font.groups.sm.size};
  font-weight: ${props => props.theme.font.groups.sm.weight};
  font-variant: ${props => props.theme.font.groups.sm.variant};
  transform: ${props => props.theme.font.groups.sm.transform};
  padding: ${props => props.theme.font.groups.sm.padding};
  line-height: ${props => props.theme.font.groups.sm.height};
  color: ${props => getColor(props)};
`;

H5.defaultProps = {
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
        sm: {
          size: '1.25rem',
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

export default H5;
