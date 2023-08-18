import { StatisticsTitle } from './StatisticsTitle';

export const Statistics = ({ statsData }) => {
  return (
    <section>
      <Statistics title="Upload stats" stats={statsData} />
      <Statistics stats={statsData} />
    </section>
  );
};
