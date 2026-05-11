import calculateRewards from "./calculateRewards";

const transformCustomerData = (transactions) => {
  const grouped = {};

  transactions.forEach((txn) => {
    const rewards = calculateRewards(txn.amount);

    if (!grouped[txn.customerId]) {
      grouped[txn.customerId] = {
        customerId: txn.customerId,
        customerName: txn.customerName,
        totalSpend: 0,
        totalRewards: 0,
        transactionCount: 0,
        transactions: []
      };
    }

    grouped[txn.customerId].totalSpend += txn.amount;

    grouped[txn.customerId].totalRewards += rewards;

    grouped[txn.customerId].transactionCount += 1;

    grouped[txn.customerId].transactions.push({
      ...txn,
      rewards
    });
  });

  return Object.values(grouped);
};

export default transformCustomerData;