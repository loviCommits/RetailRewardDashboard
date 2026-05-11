import DataGrid, {
  Column
} from "devextreme-react/data-grid";
import PropTypes from "prop-types";

const RewardsTab = ({ transactions }) => {

  const rewardsData = transactions?.map((txn) => {

    let baseRewards = 0;
    let bonusRewards = 0;

    if (txn.amount > 50) {
      baseRewards = Math.min(txn.amount, 100) - 50;
    }

    if (txn.amount > 100) {
      bonusRewards = (txn.amount - 100) * 2;
    }

    return {
      transactionId: txn.transactionId,
      amount: txn.amount,
      baseRewards,
      bonusRewards,
      totalRewards: txn.rewards
    };

  });

  return (
    <DataGrid
      dataSource={rewardsData|| []}
      showBorders
      showColumnLines
      showRowLines
      columnAutoWidth
      width="100%"
    >
      <Column
        dataField="transactionId"
        caption="Transaction ID"
      />

      <Column
        dataField="amount"
        caption="Amount"
        format="currency"
      />

      <Column
        dataField="baseRewards"
        caption="Base Rewards"
      />

      <Column
        dataField="bonusRewards"
        caption="Bonus Rewards"
      />

      <Column
        dataField="totalRewards"
        caption="Total Rewards"
      />
    </DataGrid>
  );
};
RewardsTab.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      transactionId: PropTypes.string,
      amount: PropTypes.number,
      rewards: PropTypes.number
    })
  )
};

RewardsTab.defaultProps = {
  transactions: []
};
export default RewardsTab;