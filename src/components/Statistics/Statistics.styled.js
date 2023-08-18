import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: 20px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #dadada;
`;
export const Title = styled.h2`
  margin: 0;
  padding: 20px 60px;
  background-color: #fff;
  text-transform: uppercase;
`;
export const List = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;

  background-color: #8bc34a;
`;
export const Item = styled.li`
  padding: 10px 20px;
  border: 1px solid black;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
`;
