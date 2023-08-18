export const Profile = ({ dataUser }) => {
  console.log(dataUser);
  return (
    <div>
      <div>
        <img src={dataUser.avatar} alt={dataUser.username} />
        <p>{dataUser.username}</p>
        <p>{dataUser.tag}</p>
        <p>{dataUser.location}</p>
      </div>
      <ul>
        <li>
          <span>Followers</span>
          <span>{dataUser.stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{dataUser.stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{dataUser.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
