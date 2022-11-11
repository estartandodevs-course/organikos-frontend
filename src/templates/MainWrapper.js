import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
