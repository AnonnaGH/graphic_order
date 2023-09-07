// import { useLoaderData } from 'react-router-dom';
// import OrderTable from './OrderTable';


// const OrderList = () => {
//     const order = useLoaderData()
//     // const [order]= useOrder();

    

   
    
//     return (
//         <div>
//             <h1>Total Order: {order.length}</h1>
          
//             <div className="overflow-x-auto w-full">
//                 <table className="table w-full">
//                     {/* head */}
//                     <thead>
//                         <tr>
//                             <th>Sl</th>
//                             <th>Order name</th>
//                             <th>Order Date</th>
//                             <th>Price</th>
//                             <th>Client's name</th>
//                             <th>Email</th>
//                             <th>Contact</th>
//                             <th>Order Category</th>
//                             <th>Order Details</th>
//                             <th> Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                     {
//                             order.map((singleOrder, index) => <OrderTable
//                                 key={singleOrder._id}
//                                 singleOrder={singleOrder}
//                                 index={index +1}
                               
//                             ></OrderTable>)
//                         }
//                     </tbody>

//                 </table>
//             </div>
//         </div>
//     );
// };

// export default OrderList;




// import { useState } from 'react';
// import { useLoaderData } from 'react-router-dom';
// import OrderTable from './OrderTable';

// const OrderList = () => {
//   const orders = useLoaderData();
//   const [selectedCategory, setSelectedCategory] = useState('');

//   const handleCategoryFilter = (category) => {
//     setSelectedCategory(category);
//   };

//   const filteredOrders = selectedCategory
//     ? orders.filter((order) => order.SubCategory === selectedCategory)
//     : orders;

//   return (
//     <div>
      

//       <div className="overflow-x-auto w-full">
//         <div className=" mb-4 bg-slate-200 p-5 flex justify-center">
//             <div className='me-5'><h1>Total Order: {orders.length}</h1></div>
//        <div>
//        <label htmlFor="categoryFilter">Filter by Category:</label>
//           <select
//             id="categoryFilter"
//             value={selectedCategory}
//             onChange={(e) => handleCategoryFilter(e.target.value)}
//           >
//             <option value="">All</option>
//             <option value="logo">Logo</option>
//             <option value="ad image">Ad Image</option>
//             <option value="FB cover">Facebook Cover</option>
//           </select>
//        </div>
//         </div>

//         <table className="table w-full">
//           {/* head */}
//           <thead>
//             <tr>
//               <th>Sl</th>
//               <th>Order name</th>
//               <th>Order Date</th>
//               <th>Price</th>
//               <th>Client's name</th>
//               <th>Email</th>
//               <th>Contact</th>
//               <th>Order Category</th>
//               <th>Order Details</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredOrders.map((singleOrder, index) => (
//               <OrderTable
//                 key={singleOrder._id}
//                 singleOrder={singleOrder}
//                 index={index + 1}
//               ></OrderTable>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default OrderList;


import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import OrderTable from './OrderTable';

const OrderList = () => {
  const orders = useLoaderData();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
  };

  const handleDateFilter = (date) => {
    setSelectedDate(date);
  };

  const filteredOrders = orders.filter((order) => {
    if (selectedCategory && selectedDate) {
      return order.SubCategory === selectedCategory && order.date === selectedDate;
    } else if (selectedCategory) {
      return order.SubCategory === selectedCategory;
    } else if (selectedDate) {
      return order.date === selectedDate;
    }
    return true;
  });

  return (
    <div>
      <div className="overflow-x-auto w-full">
        <div className="mb-4 bg-slate-200 p-5 flex justify-between">
          <div className="me-5">
            <h1>Total Order: {orders.length}</h1>
          </div>
          <div>
            <label htmlFor="categoryFilter">Filter by Category:</label>
            <select
              id="categoryFilter"
              value={selectedCategory}
              onChange={(e) => handleCategoryFilter(e.target.value)}
            >
              <option value="">All</option>
              <option value="logo">Logo</option>
              <option value="ad image">Ad Image</option>
              <option value="FB cover">Facebook Cover</option>
            </select>
          </div>
          <div>
            <label htmlFor="dateFilter">Filter by Date:</label>
            <input
              type="date"
              id="dateFilter"
              value={selectedDate}
              onChange={(e) => handleDateFilter(e.target.value)}
            />
          </div>
        </div>

        <table className="table table-pin-rows table-pin-cols">
          {/* head */}
          <thead  className='sticky top-0'>
            <tr>
              <th>Sl</th>
              <th>Order name</th>
              <th>Order Date</th>
              <th>Price</th>
              {/* <th>Client's name</th>
              <th>Email</th>
              <th>Contact</th> */}
              <th>Client Details</th>
              <th>Order Category</th>
              <th>Order Details</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((singleOrder, index) => (
              <OrderTable
                key={singleOrder._id}
                singleOrder={singleOrder}
                index={index + 1}
              ></OrderTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderList;
