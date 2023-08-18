import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #dadada;
  padding: 20px 15px;
`;

export const Text = styled.p`
  padding: 0;
  margin: 0;
  text-align: center;
  font-size: 20px;
`;
export const List = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;

  background-color: #ff9797;
`;
export const Item = styled.li`
  padding: 20px 10px;
  border: 1px solid black;
  font-size: 16px;
`;
