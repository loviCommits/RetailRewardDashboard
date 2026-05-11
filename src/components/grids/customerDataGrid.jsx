import DataGrid, {
  Column,
  MasterDetail,
  Paging,
  SearchPanel,
  FilterRow
} from "devextreme-react/data-grid";

import CustomerDetailTabs from "../detailTabs/CustomerDetailTabs";
import PropTypes from "prop-types";
import "../../styles/grid.css";

const CustomerGrid = ({ data }) => {
  return (
    <DataGrid
      dataSource={data|| []}
      showBorders
      showColumnLines
      showRowLines
      columnAutoWidth
      width="100%"
    >
      <SearchPanel visible />
      <Paging defaultPageSize={10} />
      <FilterRow visible={true} />
      <Column
        dataField="customerId"
        caption="Customer ID"
      />

      <Column
        dataField="customerName"
        caption="Customer Name"
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

      <MasterDetail
        enabled
        component={({ data }) => (
          <CustomerDetailTabs
            customer={data.data}
          />
        )}
      />
    </DataGrid>
  );
};

CustomerGrid.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      customerId: PropTypes.string.isRequired,
      customerName: PropTypes.string.isRequired,
      transactionCount: PropTypes.number.isRequired,
      totalSpend: PropTypes.number.isRequired,
      totalRewards: PropTypes.number.isRequired,
      transactions: PropTypes.array
    })
  )
};

CustomerGrid.defaultProps = {
  data: []
};

export default CustomerGrid;