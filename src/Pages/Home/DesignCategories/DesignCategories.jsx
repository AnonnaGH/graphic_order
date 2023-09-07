// import { FcEditImage } from "react-icons/fc";

import { Link } from "react-router-dom";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";



const CategoriesData = [
  {
    img: 'https://cdn-icons-png.flaticon.com/512/953/953060.png',
    title: 'Logo Design',
    description: 'Logo is unique identity of any company.',
    price: '15'
  },
  {
    img: 'https://cdn-icons-png.flaticon.com/512/5857/5857283.png',
    title: 'Facebook cover',
    description: 'Logo is unique identity of any company.',
    price: '15'
  },
  {
    img: 'https://cdn-icons-png.flaticon.com/512/1055/1055664.png',
    title: 'Ad design',
    description: 'Logo is unique identity of any company.',
    price: '15'
  },
  {
    img: 'https://cdn-icons-png.flaticon.com/512/5977/5977816.png',
    title: 'Packaging',
    description: 'Logo is unique identity of any company.',
    price: '15'
  },

];
const DesignCategories = () => {
  return (
    <div className="px-10">
      <SectionTitle heading='Design Categories' />
      <Link to="/order">
        <div className='grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 gap-6'>
          {CategoriesData.map((category, index) => {
            return (
              <div key={index} className="w-full p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-500">
                <img className="w-1/2" src={category.img} alt="" />
                <div className="mt-4">
                  <h1 className="text-2xl font-bold text-gray-700">{category.title}</h1>
                  <p className="text-sm mt-2 text-gray-700">{category.description}</p>

                  <div className="mt-4 mb-2 flex justify-between pl-4 pr-2">
                    {/* <button className="block text-xl font-semibold text-gray-700 cursor-auto">${category.price}</button> */}
                    {/* <button className="text-lg block font-semibold py-2 px-6 text-green-100 hover:text-white bg-green-400 rounded-lg shadow hover:shadow-md transition duration-300">Buy</button> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Link>
    </div>
  );
};

export default DesignCategories;
