
// import { useContext } from "react";
// import { useForm } from "react-hook-form";
// import Swal from "sweetalert2";
// import { AuthContext } from "../../providers/AuthProvider";




  
//     const OrderForm = () => {
//       const { user } = useContext(AuthContext);
//         const {
//           register,
//           handleSubmit,
//           reset,
//           formState: { errors },
//         } = useForm();
      
//         const onSubmit = (data) => {
//           const order = {
//             Name: data.Name,
//             email: data.email,
//             mobile: data.mobile,
//             SubCategory: data.SubCategory,
//             Details: data.Details,
//           };
      
//           fetch("http://localhost:5000/order", {
//             method: "POST",
//             headers: {
//               "content-type": "application/json",
//             },
//             body: JSON.stringify(order),
//           })
//             .then((res) => res.json())
//             .then((data) => {
//               console.log(data);
//               Swal.fire(
//                 "Success!",
//                 "Order placement successful.",
//                 "success"
//               ).then(() => {
//                 reset();
//               });
//             });
//         };

  

//   return (
//     <div className="w-full">
     
    

//       <div className="p-8 border-solid border-2  border-blue-100 bg-blue-100">
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="p-7 w-3/4 mx-auto bg-white rounded-3xl shadow-md"
//       >
//          <h1 className="text-3xl text-center font-semibold my-4">Order Form</h1>
//          <div className="divider"></div> 
//         <div className="grid grid-cols-1 gap-4">
//           <div className="col-span-2">
//             <label htmlFor="Name" className="block text-gray-700">
//               Your Name
//             </label>
//             <input
//               type="text"
//               id="Name"
//               defaultValue={user?.displayName}
//               {...register("Name", { required: true, maxLength: 80 })}
//               className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
//             />
//           </div>
//           <div className="col-span-2">
//             <label htmlFor="Email" className="block w-full text-gray-700">
//               Your Email
//             </label>
//             <input
//               type="text"
//               id="Email"
//               defaultValue={user?.email}
//               {...register("email", { required: true })}
//               className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
//             />
//           </div>
//           <div className="col-span-2">
//             <label htmlFor="Mobile" className="block w-full text-gray-700">
//               Your Mobile No. 
//             </label>
//             <input
//               type="text"
//               id="Mobile"
//               defaultValue={user?.phoneNumber}
//               placeholder="Your Mobile No."
//               {...register("mobile", { required: true })}
//               className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
//             />
//           </div>

//           <div>
//             <label htmlFor="subCategory" className="block text-gray-700">
//               Select Category
//             </label>
//             <select
//               id="subCategory"
//               {...register("SubCategory", { required: true })}
//               className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
//             >
//               <option value="">Select Category</option>
//               <option value="logo">Logo</option>
//               <option value="ad image">Ad Image</option>
//               <option value="FB cover">Facebook Cover</option>
//               {/* <option value="police">Police car</option> */}
//             </select>
//           </div>

        

         

        

    
//           <div className="col-span-2">
//             <label htmlFor="details" className="block text-gray-700">
//               Design Details
//             </label>
//             <textarea
//               id="details"
//               placeholder="Describe your design idea. You can give google doc link describing your details or write here."
//               {...register("Details", { required: true })}
//               className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
//             ></textarea>
//           </div>
//         </div>
//         <div className="text-center">
//         <input
//           type="submit"
//           value="Order"
//           className=" w-1/2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mx-auto mt-4"
//         />
//         </div>
//       </form>
//       </div>
//     </div>
//   );
// };

// export default OrderForm;



// import { useContext } from "react";
// import { useForm } from "react-hook-form";
// import Swal from "sweetalert2";
// import { AuthContext } from "../../providers/AuthProvider";

// const OrderForm = () => {
//   const { user } = useContext(AuthContext);
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     const order = {
//       date: data.date,
//       Name: data.Name,
//       orderName: data.orderName,
//       email: data.email,
//       mobile: data.mobile,
//       SubCategory: data.SubCategory,
//       Details: data.Details,
//     };

//     fetch("http://localhost:5000/order", {
//       method: "POST",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify(order),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         Swal.fire("Success!", "Order placement successful.", "success").then(
//           () => {
//             reset();
//           }
//         );
//       });
//   };

//   return (
//     <div className="w-full">
//       <div className="p-8 border-solid border-2  border-blue-100 bg-blue-100">
//         <form
//           onSubmit={handleSubmit(onSubmit)}
//           className="p-7 w-3/4 mx-auto bg-white rounded-3xl shadow-md"
//         >
//           <h1 className="text-3xl text-center font-semibold my-4">
//             Order Form
//           </h1>
//           <div className="divider"></div>
//           <div className="grid grid-cols-1 gap-4">
//           <div className="col-span-2 hidden">
//               <label htmlFor="date" className="block text-gray-700">
//                 Order Date
//               </label>
//               <input
//                 type="date"
//                 id="date"
//                 defaultValue={new Date().toISOString().split("T")[0]}
//                 {...register("date", { required: true })}
//                 className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
//               />
//             </div>
//           <div className="col-span-2">
//               <label htmlFor="date" className="block text-gray-700">
//                 Order Name
//               </label>
//               <input
//                 type="text"
//                 id="orderName"
//                 {...register("orderName", { required: true })}
//                 className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
//               />
//             </div>
//             <div className="col-span-2">
//               <label htmlFor="Name" className="block text-gray-700">
//                 Your Name
//               </label>
//               <input
//                 type="text"
//                 id="Name"
//                 defaultValue={user?.displayName}
//                 {...register("Name", { required: true, maxLength: 80 })}
//                 className="w-full border border-gray-300 rounded px-3 py-2 mt-1" readOnly
//               />
//             </div>
         
//             <div className="col-span-2">
//               <label htmlFor="Email" className="block w-full text-gray-700">
//                 Your Email
//               </label>
//               <input
//                 type="text"
//                 id="Email"
//                 defaultValue={user?.email}
//                 {...register("email", { required: true })}
//                 className="w-full border border-gray-300 rounded px-3 py-2 mt-1" readOnly
//               />
//             </div>
//             <div className="col-span-2">
//               <label htmlFor="Mobile" className="block w-full text-gray-700">
//                 Your Mobile No.
//               </label>
//               <input
//                 type="text"
//                 id="Mobile"
//                 defaultValue={user?.phoneNumber}
//                 placeholder="Please Provide a valid Mobile No."
//                 {...register("mobile", { required: true })}
//                 className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
//               />
//             </div>
//             <div>
//               <label htmlFor="subCategory" className="block text-gray-700">
//                 Select Category
//               </label>
//               <select
//                 id="subCategory"
//                 {...register("SubCategory", { required: true })}
//                 className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
//               >
//                 <option value="">Select Category</option>
//                 <option value="logo">Logo</option>
//                 <option value="ad image">Ad Image</option>
//                 <option value="FB cover">Facebook Cover</option>
//               </select>
//             </div>
//             <div className="col-span-2">
//               <label htmlFor="details" className="block text-gray-700">
//                 Design Details
//               </label>
//               <textarea
//                 id="details"
//                 placeholder="Describe your design idea. You can give a Google Docs link describing your details or write here."
//                 {...register("Details", { required: true })}
//                 className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
//               ></textarea>
//             </div>
//           </div>
//           <div className="text-center">
//             <input
//               type="submit"
//               value="Order"
//               className="w-1/2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mx-auto mt-4"
//             />
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default OrderForm;



// import { useContext, useState } from "react";
// import { useForm } from "react-hook-form";
// import Swal from "sweetalert2";
// import { AuthContext } from "../../providers/AuthProvider";

// const OrderForm = () => {
//   const { user } = useContext(AuthContext);
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     const order = {
//       date: data.date,
//       Name: data.Name,
//       orderName: data.orderName,
//       email: data.email,
//       mobile: data.mobile,
//       SubCategory: data.SubCategory,
//       price: data.price,
//       Details: data.Details,
//     };

//     fetch("http://localhost:5000/order", {
//       method: "POST",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify(order),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         Swal.fire("Success!", "Order placement successful.", "success").then(
//           () => {
//             reset();
//           }
//         );
//       });
//   };

//   const handleCategoryChange = (event) => {
//     setSelectedCategory(event.target.value);
//   };

//   const getPriceByCategory = () => {
//     switch (selectedCategory) {
//       case "logo":
//         return 800;
//       case "ad image":
//         return 500;
//       case "FB cover":
//         return 500;
//       default:
//         return " ";
//     }
//   };

//   return (
//     <div className="w-full">
//       <div className="p-8 border-solid border-2 border-blue-100 bg-blue-100">
//         <form
//           onSubmit={handleSubmit(onSubmit)}
//           className="p-7 w-3/4 mx-auto bg-white rounded-3xl shadow-md"
//         >
//           <h1 className="text-3xl text-center font-semibold my-4">
//             Order Form
//           </h1>
//           <div className="divider"></div>
//           <div className="grid grid-cols-1 gap-4">
//             <div className="col-span-2">
//               <label htmlFor="date" className="block text-gray-700">
//                 Order Date
//               </label>
//               <input
//                 type="date"
//                 id="date"
//                 defaultValue={new Date().toISOString().split("T")[0]}
//                 {...register("date", { required: true })}
//                 className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
//               />
//             </div>
//             <div className="col-span-2">
//               <label htmlFor="orderName" className="block text-gray-700">
//                 Order Name
//               </label>
//               <input
//                 type="text"
//                 id="orderName"
//                 {...register("orderName", { required: true })}
//                 className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
//               />
//             </div>
//             <div className="col-span-2">
//               <label htmlFor="Name" className="block text-gray-700">
//                 Your Name
//               </label>
//               <input
//                 type="text"
//                 id="Name"
//                 defaultValue={user?.displayName}
//                 {...register("Name", { required: true, maxLength: 80 })}
//                 className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
//                 readOnly
//               />
//             </div>
//             <div className="col-span-2">
//               <label htmlFor="Email" className="block w-full text-gray-700">
//                 Your Email
//               </label>
//               <input
//                 type="text"
//                 id="Email"
//                 defaultValue={user?.email}
//                 {...register("email", { required: true })}
//                 className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
//                 readOnly
//               />
//             </div>
//             <div className="col-span-2">
//               <label htmlFor="Mobile" className="block w-full text-gray-700">
//                 Your Mobile No.
//               </label>
//               <input
//                 type="text"
//                 id="Mobile"
//                 defaultValue={user?.phoneNumber}
//                 placeholder="Please provide a valid Mobile No."
//                 {...register("mobile", { required: true })}
//                 className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
//               />
//             </div>
//             <div>
//               <label htmlFor="subCategory" className="block text-gray-700">
//                 Select Category
//               </label>
//               <select
//                 id="subCategory"
//                 {...register("SubCategory", { required: true })}
//                 className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
//                 onChange={handleCategoryChange}
//               >
//                 <option value="">Select Category</option>
//                 <option value="logo">Logo</option>
//                 <option value="ad image">Ad Image</option>
//                 <option value="FB cover">Facebook Cover</option>
//               </select>
//             </div>

//             <div className="col-span-2">
//   <label htmlFor="price" className="block text-gray-700">
//     Price
//   </label>
//   <input
//     type="text"
//     id="price"
//     defaultValue={getPriceByCategory() + " tk"}
//     {...register("price", { required: true })}
//     className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
//     readOnly
//   />
// </div>


//             <div className="col-span-2">
//               <label htmlFor="details" className="block text-gray-700">
//                 Design Details
//               </label>
//               <textarea
//                 id="details"
//                 placeholder="Describe your design idea. You can give a Google Docs link describing your details or write here."
//                 {...register("Details", { required: true })}
//                 className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
//               ></textarea>
//             </div>
          
//           </div>
//           <div className="text-center">
//             <input
//               type="submit"
//               value="Order"
//               className="w-1/2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mx-auto mt-4"
//             />
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default OrderForm;

import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const OrderForm = () => {
  const { user } = useContext(AuthContext);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [price, setPrice] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const order = {
      date: data.date,
      Name: data.Name,
      orderName: data.orderName,
      email: data.email,
      mobile: data.mobile,
      SubCategory: data.SubCategory,
      price: price,
      Details: data.Details,
    };

    fetch("http://localhost:5000/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire("Success!", "Order placement successful.", "success").then(
          () => {
            reset();
          }
        );
      });
  };

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setSelectedCategory(selectedCategory);
    setPrice(getPriceByCategory(selectedCategory));
  };

  const getPriceByCategory = (category) => {
    switch (category) {
      case "logo":
        return "800 tk";
      case "ad image":
        return "500 tk";
      case "FB cover":
        return "500 tk";
      default:
        return "";
    }
  };

  return (
    <div className="w-full">
      <div className="p-8 border-solid border-2 border-blue-100 bg-blue-100">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-7 w-3/4 mx-auto bg-white rounded-3xl shadow-md"
        >
          <h1 className="text-3xl text-center font-semibold my-4">
            Order Form
          </h1>
          <div className="divider"></div>
          <div className="grid grid-cols-1 gap-4">
            <div className="col-span-2">
              <label htmlFor="date" className="block text-gray-700">
                Order Date
              </label>
              <input
                type="date"
                id="date"
                defaultValue={new Date().toISOString().split("T")[0]}
                {...register("date", { required: true })}
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="orderName" className="block text-gray-700">
                Order Name
              </label>
              <input
                type="text"
                id="orderName"
                {...register("orderName", { required: true })}
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="Name" className="block text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                id="Name"
                defaultValue={user?.displayName}
                {...register("Name", { required: true, maxLength: 80 })}
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                readOnly
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="Email" className="block w-full text-gray-700">
                Your Email
              </label>
              <input
                type="text"
                id="Email"
                defaultValue={user?.email}
                {...register("email", { required: true })}
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                readOnly
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="Mobile" className="block w-full text-gray-700">
                Your Mobile No.
              </label>
              <input
                type="text"
                id="Mobile"
                defaultValue={user?.phoneNumber}
                placeholder="Please provide a valid Mobile No."
                {...register("mobile", { required: true })}
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
              />
            </div>
            <div>
              <label htmlFor="subCategory" className="block text-gray-700">
                Select Category
              </label>
              <select
                id="subCategory"
                {...register("SubCategory", { required: true })}
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                onChange={handleCategoryChange}
              >
                <option value="">Select Category</option>
                <option value="logo">Logo</option>
                <option value="ad image">Ad Image</option>
                <option value="FB cover">Facebook Cover</option>
              </select>
            </div>

            <div className="col-span-2">
              <label htmlFor="price" className="block text-gray-700">
                Price
              </label>
              <input
                type="text"
                id="price"
                value={price}
                {...register("price", { required: true })}
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                readOnly
              />
            </div>

            <div className="col-span-2">
              <label htmlFor="details" className="block text-gray-700">
                Design Details
              </label>
              <textarea
                id="details"
                placeholder="Describe your design idea. You can give a Google Docs link describing your details or write here."
                {...register("Details", { required: true })}
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
              ></textarea>
            </div>
          </div>
          <div className="text-center">
            <input
              type="submit"
              value="Order"
              className="w-1/2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mx-auto mt-4"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderForm;

