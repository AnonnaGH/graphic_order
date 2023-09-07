



// import { useEffect, useState } from "react";



// const DesignSample = () => {
//     const [allDesign, setAllDesign] = useState([]);
//     const [activeTab, setActiveTab] = useState("logo");



//     useEffect(() => {
//         fetch('design_sample.json')
//           .then((res) => res.json())
//           .then((result) => {
//             setAllDesign(result);
//             console.log(result)
//           });
//       }, []);


//     const handleTabClick = (tabName) => {
//         setActiveTab(tabName);
//       };
//     return (
//         <div>
//         <h1 className=" text-3xl text-center mt-5 p-5">Design By Category</h1>
//         <div className="divider px-10"></div>



//             <div className="tabs flex justify-center align-middle">
//               <div
//                 onClick={() => handleTabClick("logo")}
//                 className={`tab tab-lifted logo ${
//                   activeTab == "logo" ? " bg-blue-800 text-white" : ""
//                 }`}
//               >
//                 Logo
//               </div>
//               <div
//                 onClick={() => handleTabClick("AdImage")}
//                 className={`tab  tab-lifted AdImage ${
//                   activeTab == "AdImage" ? " bg-blue-800 text-white" : ""
//                 }`}
//               >
//                Ad Image
//               </div>
//               {/* <div
//                 onClick={() => handleTabClick("police")}
//                 className={`tab  tab-lifted police ${
//                   activeTab == "police" ? " bg-red-500 text-white" : ""
//                 }`}
//               >
//                 Police car
//               </div> */}
//               <div
//                 onClick={() => handleTabClick("FBCover")}
//                 className={`tab  tab-lifted FBCover ${
//                   activeTab == "FBCover" ? " bg-blue-800 text-white" : ""
//                 }`}
//               >
//                 Cover Photo 
//               </div>
//             </div>

//         <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-3 px-4 mt-4">
//         {allDesign.map((design) => (
//          <>
//          <div> <img
//             key={design.id}
//             src={design.image}
//             alt={design.name}
//             className="w-full h-auto"
//           />
//           <h1>{design.category}</h1></div>
//           </>
//         ))}
//         </div>
//       </div>
//     );
// };

// export default DesignSample;

import { useEffect, useState } from "react";

const DesignSample = () => {
  const [allDesign, setAllDesign] = useState([]);
  const [activeTab, setActiveTab] = useState(""); // Set initial value to empty string

  useEffect(() => {
    fetch("design_sample.json")
      .then((res) => res.json())
      .then((result) => {
        setAllDesign(result);
      });
  }, []);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <h1 className="text-3xl text-center mt-5 p-5">Design By Category</h1>
      <div className="divider px-10"></div>

      <div className="tabs flex justify-center align-middle">
        <div
          onClick={() => handleTabClick("logo")}
          className={`tab tab-lifted logo ${activeTab === "logo" ? "bg-blue-800 text-white" : ""
            }`}
        >
          Logo
        </div>
        <div
          onClick={() => handleTabClick("AdImage")}
          className={`tab  tab-lifted AdImage ${activeTab === "AdImage" ? "bg-blue-800 text-white" : ""
            }`}
        >
          Ad Image
        </div>
        <div
          onClick={() => handleTabClick("FBCover")}
          className={`tab  tab-lifted FBCover ${activeTab === "FBCover" ? "bg-blue-800 text-white" : ""
            }`}
        >
          Cover Photo
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-3 px-4 mt-4">
        {activeTab === "" // Check if activeTab is empty
          ? allDesign.map((design) => (
            <div key={design.id}>
              <img
                src={design.image}
                alt={design.name}
                className="w-full h-auto"
              />
              <h1>{design.category}</h1>
            </div>
          ))
          : allDesign
            .filter((design) => design.category === activeTab)
            .map((design) => (
              <div key={design.id}>
                <img
                  src={design.image}
                  alt={design.name}
                  className="w-full h-auto"
                />
                <h1>{design.category}</h1>
              </div>
            ))}
      </div>
    </div>
  );
};

export default DesignSample;


