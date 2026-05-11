import StatsCard from "../components/cards/statsCards";
import CustomerDataGrid from "../components/grids/customerDataGrid";
import useFetch from "../hooks/useFetch";
import getTransactions from "../api/dashboardApi";
import transformCustomerData from "../utils/transformCustomerData";
import getDashboardMetrics from "../utils/getDashboardMetrics";
import "../styles/dashboard.css";
import {
  FaUsers,
  FaReceipt,
  FaDollarSign,
  FaGift
} from "react-icons/fa";
const Dashboard = () => {

  const {
    data,
    loading,
    error
  } = useFetch(getTransactions);

  const customerData =
    transformCustomerData(data);

  const metrics =
    getDashboardMetrics(
      data,
      customerData
    );

  // ERROR STATE
  if (error) {
    return (
      <div className="error-state">
        {error}
      </div>
    );
  }

  // LOADING STATE
  if (loading) {
    return <p>Loading...</p>;
  }

  // EMPTY STATE
  if (!data?.length) {
    return (
      <div className="empty-state">
        No transactions found
      </div>
    );
  }

  return (
    <div className="dashboard-page">

      <div className="dashboard-card-container">

        <StatsCard
          title="Customers"
          value={metrics.totalCustomers}
           icon={<FaUsers />}
        />

        <StatsCard
          title="Total Transactions"
          value={metrics.totalTransactions}
          icon={<FaReceipt />}
        />

        <StatsCard
          title="Total Amount"
          value={`$${metrics.totalAmount}`}
          icon={<FaDollarSign />}
        />

        <StatsCard
          title="Total Rewards"
          value={metrics.totalRewards}
          icon={<FaGift />}
        />

      </div>

      <div className="dashboard-grid-container ">

        <CustomerDataGrid
          data={customerData}
        />

      </div>

    </div>
  );
};

export default Dashboard;