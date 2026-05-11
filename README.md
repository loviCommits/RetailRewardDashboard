# Retail Rewards Dashboard

A React-based retail rewards dashboard.  
The application displays customer transactions, monthly rewards, and spending insights using DevExtreme DataGrid with advanced master-detail functionality.

---

## Features

- Customer rewards dashboard
- DevExtreme DataGrid integration
- Master-detail expandable rows
- Monthly transaction summary
- Rewards calculation logic
- KPI cards for dashboard insights
- Search and filter functionality
- Mock API integration
- Error handling and loading states
- Null/undefined safety handling
- Responsive dashboard layout
- Prop validation using PropTypes
- Unit test cases using Jest & React Testing Library

---

## Tech Stack

- React
- Create React App
- DevExtreme React DataGrid
- React Icons
- CSS
- Jest
- React Testing Library

---

## Project Structure
```txt
src/
│
├── api/
│   └── dashboardApi.js
│
├── components/
│   ├── cards/
│   │   └── StatsCard.jsx
│   │
│   ├── detailTabs/
│   │   └── CustomerDetailTabs.jsx
│   │   └── MonthlySummaryTab.jsx
│   │   └── RewardsTab.jsx
│   │   └── TransactionsTab.jsx
│   │
│   ├── grids/
│   │   ├── CustomerDataGrid.jsx
│   │
│   ├── layout/
│   │   ├── header.jsx
│   │   └── mainLayout.jsx
│
├── hooks/
│   └── useFetch.js
│
├── mockData/
│   └── transactionsjson
│
├── pages/
│   └── Dashboard.jsx
│
├── styles/
│   ├── global.css
│   ├── dashboard.css
│   ├── cards.css
│   └── grid.css
│
├── tests/
│   ├──calculateRewards.test.js
│   ├── cutsomerGrid.test.jsx
│   ├── StatsCard.test.jsx
│
├── utils/
│   ├── calculateRewards.js
│   ├── transformCustomerData.js
│   ├── getDashboardMetrics.js

```
## Application Screenshots

### Dashboard Overview

<img width="800" height="457" alt="image" src="https://github.com/user-attachments/assets/f73d644e-ff06-4099-b8b1-7ef3c20cd851" />

### Table Overview
<img width="800" height="432" alt="image" src="https://github.com/user-attachments/assets/3625cc06-e4eb-4519-ba8c-c03d3212da7f" />




