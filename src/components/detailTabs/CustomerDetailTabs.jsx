import TabPanel from "devextreme-react/tab-panel";
import PropTypes from "prop-types";
import TransactionsTab from "./TransactionsTab";
import MonthlySummaryTab from "./MonthlySummaryTab";
import RewardsTab from "./RewardsTab";

const CustomerDetailTabs = ({ customer }) => {
  const tabItems = [
    {
      title: "Transactions",
      component: (
        <TransactionsTab
          transactions={customer.transactions}
        />
      )
    },
    {
      title: "Monthly Summary",
      component: (
        <MonthlySummaryTab
          transactions={customer.transactions}
        />
      )
    },
    {
      title: "Rewards Breakdown",
      component: (
        <RewardsTab
          transactions={customer.transactions}
        />
      )
    }
  ];

  return (
    <div className="customer-detail-tabs">
      <TabPanel
        items={tabItems}
        animationEnabled={true}
        swipeEnabled={false}
        deferRendering={false}
        itemTitleRender={(item) => (
          <span>{item.title}</span>
        )}
        itemRender={(item) => (
          <div className="tab-content">
            {item.component}
          </div>
        )}
      />
    </div>
  );
};
CustomerDetailTabs.propTypes = {
  customer: PropTypes.shape({
    customerId: PropTypes.string,
    customerName: PropTypes.string,
    totalSpend: PropTypes.number,
    totalRewards: PropTypes.number,
    transactions: PropTypes.array
  })
};

CustomerDetailTabs.defaultProps = {
  customer: {}
};
export default CustomerDetailTabs;