
import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAdmin from "../../hooks/useAdmin";

const MyOrderTable = ({ singleOrder, index }) => {
  const { register, handleSubmit, reset } = useForm();
  const [isAdmin]= useAdmin();

  const [designLink, setDesignLink] = useState(singleOrder.downloadLink || null); // State to hold the design link

const [designDetails, setDesignDetails] = useState(null);
const [downlaodDesign, setDownloadDesign] = useState(null);

const handleCloseModal = () => {
  setDesignDetails(null);
  setDownloadDesign(null);
};

  const updateDesign = (event, item) => {
    event.preventDefault();
    event.stopPropagation();

    const formData = new FormData(event.target);
    const downloadLink = formData.get("downloadLink");

    fetch(`http://localhost:5000/order/${item._id}`, {
      method: "PATCH",
      body: JSON.stringify({ downloadLink }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          setDesignLink(downloadLink); // Update the design link with the entered downloadLink
          Swal.fire({
            position: "top-end",
            icon: "success",
            showConfirmButton: false,
            timer: 1000,
          });
        }
      });
  };

  return (
    <tr className="">
      <td>{index}.</td>
      <td>{singleOrder.date}</td>
      <td>{singleOrder.orderName}</td>
      <td>{singleOrder.price}</td>
      <td>{singleOrder.SubCategory}</td>

      <button
        onClick={() => setDesignDetails(singleOrder._id)}
        className="btn bg-blue-800 text-white hover:bg-blue-600"
      >
        See Details
      </button>
      {designDetails === singleOrder._id && (
        <dialog id={singleOrder._id} className="modal modal-bottom sm:modal-middle" open>
          <div method="dialog" className="modal-box bg-slate-200">
            <h3 className="font-bold text-lg">Category: {singleOrder.SubCategory}</h3>
            <p>Design Details: {singleOrder.Details}</p>
            <div className="modal-action">
              <button type="button" className="btn btn-error" onClick={handleCloseModal}>
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}

      <th>
        {designLink ? (
          <a href={designLink} className="btn btn-success" target="_blank" rel="noopener noreferrer">
            Download Design
          </a>
        ) : (
          <>
           {isAdmin ?  <button className="btn btn-success" onClick={() => setDownloadDesign(singleOrder._id)}>
              {singleOrder.downloadLink ? "Download Design" : "Update Design"}
            </button> :  <button className="btn btn-warning" >
             Design processing
            </button>}
            {downlaodDesign === singleOrder._id && (
              <dialog id={singleOrder._id} className="modal modal-bottom sm:modal-middle" open>
                <form
                  onSubmit={(event) => updateDesign(event, singleOrder)}
                  method="dialog"
                  className="modal-box"
                >
                  <h3 className="font-bold text-lg">{singleOrder.Name}</h3>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Design Link</span>
                    </label>
                    <input
                      {...register("downloadLink", { required: true })}
                      className="input input-bordered"
                      placeholder="Enter design link"
                    />
                  </div>
                  <div className="modal-action">
                    <button type="submit" className="btn">
                      Update
                    </button>
                    <button type="button" className="btn btn-error" onClick={handleCloseModal}>
                      Close
                    </button>
                  </div>
                </form>
              </dialog>
            )}
          </>
        )}
      </th>
    </tr>
  );
};

export default MyOrderTable;
