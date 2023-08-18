import styled from 'styled-components';

const onlineStatus = ({ friend }) => {
  return friend.isOnline ? 'green' : 'red';
};
export const List = styled.ul`
  padding: 20px 15px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  flex-direction: column;
  background-color: #dadada;
`;
export const Item = styled.li`
  min-width: 200px;
  padding: 10px 20px;
  border: 1px solid black;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
`;
export const Text = styled.p`
  padding: 0;
  margin: 0;
  text-align: center;
  font-size: 20px;
`;
export const OnlineStatus = styled.span`
  border-radius: 50%;
  height: 40px;
  width: 40px;
  background-color: ${onlineStatus};
`;
