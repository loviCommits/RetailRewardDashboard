const getDashboardMetrics = (transactions, customers) => {

  const totalCustomers = customers?.length|| 0;

  const totalTransactions = transactions?.length|| 0;

  const totalAmount = (transactions || []).reduce(
    (sum, txn) => sum + txn.amount,
    0
  );

  const totalRewards =(customers || []).reduce (
    (sum, customer) => sum + customer.totalRewards,
    0
  );

  return {
    totalCustomers,
    totalTransactions,
    totalAmount,
    totalRewards
  };
};

export default getDashboardMetrics;