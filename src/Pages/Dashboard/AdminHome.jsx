import { useQuery } from '@tanstack/react-query';
import OrderTable from '../Order/OrderTable';
import { Link } from 'react-router-dom';

const AdminHome = () => {
  const { data: users = [], refetch: refetchUsers } = useQuery(['users'], async () => {
    const res = await fetch('http://localhost:5000/users');
    return res.json();
  });

  const { data: orders = [], refetch: refetchOrders } = useQuery(['orders'], async () => {
    const res = await fetch('http://localhost:5000/order');
    return res.json();
  });

  // Calculate the total price
  const totalPrice = orders.reduce((total, order) => {
    const orderPrice = parseFloat(order.price);
    return isNaN(orderPrice) ? total : total + orderPrice;
  }, 0);

  // Get the recent 5 orders
//   const recentOrders = orders.slice(5);
  const recentOrders = orders.slice().slice(0, 5);

  return (
    <>
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="bg-slate-300 rounded-md p-5 ">
          <h2>Total User</h2>
          <h1 className="text-3xl font-bold">{users.length}</h1>
        </div>
        <div className="bg-slate-300 rounded-md p-5 ">
          <h2>Total order</h2>
          <h1 className="text-3xl font-bold">{orders.length}</h1>
        </div>
        <div className="bg-slate-300 rounded-md p-5 ">
          <h2>Total payment</h2>
          <h1 className="text-3xl font-bold">{isNaN(totalPrice) ? 'N/A' : totalPrice} TK</h1>
        </div>
      </div>
      <div>
        <h1 className='text-xl font-semibold py-4'>Recent orders</h1>
        <table className="table table-pin-rows table-pin-cols">
          {/* head */}
          <thead className="sticky top-0">
            <tr>
              <th>Sl</th>
              <th>Order name</th>
              <th>Order Date</th>
              <th>Price</th>
              <th>Client Details</th>
              <th>Order Category</th>
              <th>Order Details</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {recentOrders.map((singleOrder, index) => (
              <OrderTable key={singleOrder._id} singleOrder={singleOrder} index={index + 1}></OrderTable>
            ))}
          </tbody>
        </table>
      </div>

      <div className='flex justify-end my-4'><Link to='/dashboard/OrderList'>
      
      <button className='btn btn-warning'>All Orders</button>
      </Link></div>
    </>
  );
};

export default AdminHome;
