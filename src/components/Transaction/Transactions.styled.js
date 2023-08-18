import styled from 'styled-components';

export const Wrapper = styled.table`
  border-collapse: collapse;
  margin: 0 auto;
`;
export const Th = styled.th`
  padding: 10px;
  border: 1px solid #2a2a2a;
  text-transform: uppercase;
  color: #fff;
  background-color: #14c4ed;
`;
export const Td = styled.td`
  padding: 10px;
  border: 1px solid #2a2a2a;
`;
export const Tr = styled.tr`
  background-color: #eefcff;
  :nth-child(even) {
    background-color: #c6f5ff;
  }
`;
