import { Description } from './Description';
import { Stats } from './Stats';

export const Profile = ({ dataUser }) => {
  return (
    <div>
      <Description user={dataUser} />
      <Stats stats={dataUser.stats} />
    </div>
  );
};
