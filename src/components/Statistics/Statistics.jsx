import { Item, List, Title, Wrapper } from './Statistics.styled';

export const Statistics = ({ statsData, title }) => {
  return (
    <Wrapper>
      {title && <Title>{title}</Title>}

      <List>
        {statsData.map(data => {
          return (
            <Item key={data.id}>
              <span>{data.label}</span>
              <span>{data.percentage}</span>
            </Item>
          );
        })}
      </List>
    </Wrapper>
  );
};
