export const Statistics = ({ statsData, title }) => {
  return (
    <section>
      <h2>{title}</h2>
      <ul>
        {statsData.map(data => {
          return (
            <li key={data.id}>
              <span>{data.label}</span>
              <span>{data.percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
