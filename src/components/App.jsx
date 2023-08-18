import user from '../user.json';
import data from '../data.json';

import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
export const App = () => {
  return (
    <>
      <Profile dataUser={user} />
      <Statistics title="Upload stats" statsData={data} />
    </>
  );
};
