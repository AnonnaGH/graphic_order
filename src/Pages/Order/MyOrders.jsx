import useOrder from '../../hooks/useOrder';
import MyOrderTable from './MyOrderTable';

const MyOrders = () => {
    // const order = useLoaderData()
    const [order]= useOrder();


   
    
    return (
        <div>
            <h1>Total Order: {order.length}</h1>
          
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Sl</th>
                            <th>Order Date</th>
                            <th>Order Name</th>
                            <th>Price</th>
                            <th>Order Category</th>
                            <th>Order Details</th>
                            <th> Design Status</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                            order.map((singleOrder, index) => <MyOrderTable
                                key={singleOrder._id}
                                singleOrder={singleOrder}
                                index={index +1}
                               
                            ></MyOrderTable>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyOrders;




