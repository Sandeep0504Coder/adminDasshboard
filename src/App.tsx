import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader";

const Dashboard = lazy( ( ) => import( "./pages/Dashboard" ) );
const Products =lazy( ( ) => import( "./pages/Products" ) );
const Transaction = lazy( ( ) => import( "./pages/Transaction" ) );
const Customers = lazy( ( ) => import( "./pages/Customers" ) );
const NewProduct = lazy( ( ) => import( "./pages/management/NewProduct" ) );
const TransactionManagement = lazy( ( ) => import("./pages/management/TransactionManagement") );
const ProductManagement = lazy( ( ) => import("./pages/management/ProductManagement") );
const BarCharts = lazy( ( ) => import( "./pages/charts/BarCharts" ) );
const LineCharts = lazy( ( ) => import( "./pages/charts/LineCharts" ) );
const PieCharts = lazy( ( ) => import( "./pages/charts/PieCharts" ) );

const App = () => {
  return (
    <Router>
      <Suspense fallback = { <Loader /> }>
        <Routes>
          <Route path="/" element={
            <Link to="/admin/dashboard">
              <button>Visit Dashboard</button>
            </Link>
          } />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/product" element={<Products />} />
          <Route path="/admin/transaction" element={<Transaction />} />
          <Route path="/admin/customer" element={<Customers />} />

          {/* Charts */}
          <Route path="admin/chart/bar" element={<BarCharts/>}/>
          <Route path="admin/chart/pie" element={<PieCharts/>}/>
          <Route path="admin/chart/line" element={<LineCharts/>}/>
          {/* Apps */}

          {/* Management */}
          <Route path="/admin/product/new" element={<NewProduct />} />
          <Route path="/admin/product/:id" element={<ProductManagement />} />
          <Route path="/admin/transaction/:id" element={<TransactionManagement />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App
