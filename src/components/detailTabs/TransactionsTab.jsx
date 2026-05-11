import DataGrid, {
  Column,
  Paging
} from "devextreme-react/data-grid";
import PropTypes from "prop-types";

const TransactionsTab = ({ transactions }) => {
  return (
    <DataGrid
      dataSource={transactions|| []}
      showBorders
      showColumnLines
      showRowLines
      columnAutoWidth
      width="100%"
    >
      <Paging defaultPageSize={5} />

      <Column
        dataField="transactionId"
        caption="Transaction ID"
      />

      <Column
        dataField="date"
        caption="Transaction Date"
        dataType="date"
      />

      <Column
        dataField="amount"
        caption="Amount"
        format="currency"
      />

      <Column
        dataField="rewards"
        caption="Rewards"
      />
    </DataGrid>
  );
};
TransactionsTab.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      transactionId: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      rewards: PropTypes.number
    })
  )
};

TransactionsTab.defaultProps = {
  transactions: []
};
export default TransactionsTab;