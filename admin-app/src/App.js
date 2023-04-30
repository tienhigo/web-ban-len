
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

import MainLayout from './components/MainLayout';
import Enquiries from './pages/Enquiries';
import Orders from './pages/Orders';
import Customers from './pages/Customers';
import Colorlist from './pages/Colorlist';

import Categorylist from './pages/Categorylist';

import Brandlist from './pages/Brandlist';
import Productlist from './pages/Productlist';
import Addcolor from './pages/Addcolor';
import Addcat from './pages/Addcat';
import Addbrand from './pages/Addbrand';
import Addproduct from './pages/Addproduct';
import Couponlist from './pages/Couponlist';
import Addcoupon from './pages/Addcoupon';
import ViewEnq from './pages/ViewEnq';
import ViewOrder from './pages/ViewOrder';
import { PrivateRoutes } from './routes/PrivateRoutes';
import { OpenRoutes } from './routes/OpenRoutes';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OpenRoutes><Login /></OpenRoutes>} />
        <Route path="/admin" element={<PrivateRoutes><MainLayout /></PrivateRoutes>}>
          <Route index element={<Dashboard />} />
          <Route path="enquiry" index element={<Enquiries />} />
          <Route path="enquiry/:id" index element={<ViewEnq />} />
          <Route path="order" index element={<Orders />} />
          <Route path="order/:id" index element={<ViewOrder />} />
          <Route path="coupon-list" index element={<Couponlist />} />
          <Route path="coupon" index element={<Addcoupon />} />
          <Route path="coupon/:id" index element={<Addcoupon />} />
          <Route path="customers" index element={<Customers />} />
          <Route path="list-color" index element={<Colorlist />} />
          <Route path="color" index element={<Addcolor />} />
          <Route path="color/:id" index element={<Addcolor />} />
          <Route path="list-category" index element={<Categorylist />} />
          <Route path="category" index element={<Addcat />} />
          <Route path="category/:id" index element={<Addcat />} />
          <Route path="brand" index element={<Addbrand />} />
          <Route path="brand/:id" index element={<Addbrand />} />
          <Route path="list-brand" index element={<Brandlist />} />
          <Route path="product" index element={<Productlist />} />
          <Route path="add-product" index element={<Addproduct />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
