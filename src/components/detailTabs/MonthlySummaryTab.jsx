import DataGrid, {
  Column
} from "devextreme-react/data-grid";
import PropTypes from "prop-types";
const MonthlySummaryTab = ({ transactions }) => {

  const monthlyData = (transactions || []).reduce((acc, txn) => {

    const month = new Date(txn.date).toLocaleString(
      "default",
      { month: "long" }
    );

    const existingMonth = acc.find(
      (item) => item.month === month
    );

    if (existingMonth) {
      existingMonth.totalSpend += txn.amount;
      existingMonth.totalRewards += txn.rewards;
      existingMonth.transactionCount += 1;
    } else {
      acc.push({
        month,
        totalSpend: txn.amount,
        totalRewards: txn.rewards,
        transactionCount: 1
      });
    }

    return acc;

  }, []);

  return (
    <DataGrid
      dataSource={monthlyData || []}
      showBorders
      showColumnLines
      showRowLines
      columnAutoWidth
      width="100%"
    >
      <Column
        dataField="month"
        caption="Month"
      />

      <Column
        dataField="transactionCount"
        caption="Transactions"
      />

      <Column
        dataField="totalSpend"
        caption="Total Spend"
        format="currency"
      />

      <Column
        dataField="totalRewards"
        caption="Total Rewards"
      />
    </DataGrid>
  );
};
MonthlySummaryTab.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      amount: PropTypes.number,
      rewards: PropTypes.number,
      date: PropTypes.string
    })
  )
};

MonthlySummaryTab.defaultProps = {
  transactions: []
};
export default MonthlySummaryTab;