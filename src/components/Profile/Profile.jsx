import { Wrapper, Text, List, Item } from './Profile.styled';

export const Profile = ({ dataUser }) => {
  return (
    <Wrapper>
      <div>
        <img src={dataUser.avatar} alt={dataUser.username} />
        <Text>
          <b>{dataUser.username}</b>
        </Text>
        <Text>&#64;{dataUser.tag}</Text>
        <Text>{dataUser.location}</Text>
      </div>
      <List>
        <Item>
          <span>Followers</span>
          <span>{dataUser.stats.followers}</span>
        </Item>
        <Item>
          <span>Views</span>
          <span>{dataUser.stats.views}</span>
        </Item>
        <Item>
          <span>Likes</span>
          <span>{dataUser.stats.likes}</span>
        </Item>
      </List>
    </Wrapper>
  );
};
