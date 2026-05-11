import transactions from "../mockData/transactions.json";

const getTransactions = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(transactions);
    }, 1000);
  });
};

export default getTransactions;