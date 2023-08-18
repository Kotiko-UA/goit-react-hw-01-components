import { Item, List, OnlineStatus, Text } from './FriendList.styled';

export const FriendList = ({ dataFriends }) => {
  return (
    <List>
      {dataFriends.map(friend => {
        return (
          <Item key={friend.id}>
            <OnlineStatus friend={friend}></OnlineStatus>
            <img src={friend.avatar} alt={friend.name} width="48" />
            <Text>
              <b>{friend.name}</b>
            </Text>
          </Item>
        );
      })}
    </List>
  );
};
