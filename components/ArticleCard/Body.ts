import styled from 'styled-components';

const Body = styled.div(
  ({ theme: { space } }) => css`
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    background: none;
    padding: ${space[1]}px;
    border-radius: ${space[0]};
  `
);

export default Body;
