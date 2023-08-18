import user from '../user.json';
import data from '../data.json';
import transactions from '../transactions.json';
import friends from '../friends.json';

import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './Transaction/Transactions';
export const App = () => {
  return (
    <>
      <Profile dataUser={user} />
      <Statistics title="Upload stats" statsData={data} />
      <FriendList dataFriends={friends} />
      <TransactionHistory transactionData={transactions} />
    </>
  );
};
