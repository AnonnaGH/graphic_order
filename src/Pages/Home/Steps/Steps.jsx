import { FcAddImage, FcApproval, FcCurrencyExchange, FcDocument, FcDownload, FcInspection, FcPicture } from "react-icons/fc";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const Steps = () => {
  return (
    <div>
      <SectionTitle heading='Our Steps ' />
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-4 px-32">
        <div>
          <img className="rounded-lg" src="https://i.ibb.co/hC0mqf5/order.png" alt="" />
        </div>
        <div className=" px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid max-w-2xl mx-auto">
            <div className="flex">
              <div className="flex flex-col items-center mr-6">
                <div className="w-px h-10 opacity-0 sm:h-full" />
                <div>
                  <div className="flex items-center justify-center w-8 h-8 text-lg font-medium border rounded-full">
                    1
                  </div>
                </div>
                <div className="w-px h-full bg-gray-300" />
              </div>
              <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
                <div className="sm:mr-5">
                  <div className="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
                    <p className="text-4xl"><FcPicture /></p>
                  </div>
                </div>
                <div>
                  <p className="text-xl font-semibold sm:text-base">
                    Order Placement by Client
                  </p>
                  <p className="text-sm text-gray-700">
                    Client place order and it goes to the admin for Approval
                  </p>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center mr-6">
                <div className="w-px h-10 bg-gray-300 sm:h-full" />
                <div>
                  <div className="flex items-center justify-center w-8 h-8 text-lg font-medium border rounded-full">
                    2
                  </div>
                </div>
                <div className="w-px h-full bg-gray-300" />
              </div>
              <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
                <div className="sm:mr-5">
                  <div className="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
                    <p className="text-4xl"><FcInspection /></p>
                  </div>
                </div>
                <div>
                  <p className="text-xl font-semibold sm:text-base">Order Confirmation by Admin</p>
                  <p className="text-sm text-gray-700">
                    After receiving an order we contact with the user and approve the order
                  </p>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center mr-6">
                <div className="w-px h-10 bg-gray-300 sm:h-full" />
                <div>
                  <div className="flex items-center justify-center w-8 h-8 text-lg font-medium border rounded-full">
                    3
                  </div>
                </div>
                <div className="w-px h-full opacity-0" />
              </div>
              <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
                <div className="sm:mr-5">
                  <div className="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
                    <p className="text-4xl"><FcApproval /></p>
                  </div>
                </div>
                <div>
                  <p className="text-xl font-semibold sm:text-base">Complete the design and show sample</p>
                  <p className="text-sm text-gray-700">
                    After completing the design it is send to the client for review with watermark.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center mr-6">
                <div className="w-px h-10 bg-gray-300 sm:h-full" />
                <div>
                  <div className="flex items-center justify-center w-8 h-8 text-lg font-medium border rounded-full">
                    4
                  </div>
                </div>
                <div className="w-px h-full opacity-0" />
              </div>
              <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
                <div className="sm:mr-5">
                  <div className="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
                    <p className="text-4xl"><FcCurrencyExchange /></p>
                  </div>
                </div>
                <div>
                  <p className="text-xl font-semibold sm:text-base">Payment complete by user</p>
                  <p className="text-sm text-gray-700">
                    After review the design by user, user complete the payment
                  </p>
                </div>
              </div>
            </div>

            <div className="flex">
              <div className="flex flex-col items-center mr-6">
                <div className="w-px h-10 bg-gray-300 sm:h-full" />
                <div>
                  <div className="flex items-center justify-center w-8 h-8 text-lg font-medium border rounded-full">
                    5
                  </div>
                </div>
                <div className="w-px h-full opacity-0" />
              </div>
              <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
                <div className="sm:mr-5">
                  <div className="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
                    <p className="text-4xl">< FcDownload /></p>
                  </div>
                </div>
                <div>
                  <p className="text-xl font-semibold sm:text-base">Final Delivery</p>
                  <p className="text-sm text-gray-700">
                    After successful payment user can download the final design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;