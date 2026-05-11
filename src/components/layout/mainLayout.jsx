import Header from "./header";

const MainLayout = ({ children }) => {
  return (
    <div className="app-layout">
      <div className="main-content">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default MainLayout;