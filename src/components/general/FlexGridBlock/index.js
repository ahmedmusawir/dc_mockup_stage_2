import styled from 'styled-components';

export const FlexGridBlock = styled.section`
  flex-basis: ${props => props.basis + '%'};
  @media (min-width: 761px) and (max-width: 1023px) {
    flex-basis: 50%;
  }
`;
