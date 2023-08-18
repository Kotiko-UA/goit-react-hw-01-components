import { Td, Th, Tr, Wrapper } from './Transactions.styled';

export const TransactionHistory = ({ transactionData }) => {
  return (
    <Wrapper>
      <thead>
        <tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </tr>
      </thead>
      <tbody>
        {transactionData.map(data => {
          return (
            <Tr key={data.id}>
              <Td>{data.type}</Td>
              <Td>{data.amount}</Td>
              <Td>{data.currency}</Td>
            </Tr>
          );
        })}
      </tbody>
    </Wrapper>
  );
};
