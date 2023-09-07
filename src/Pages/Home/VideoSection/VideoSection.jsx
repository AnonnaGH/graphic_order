
import ReactPlayer from 'react-player';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import videoBg from '../../../assets/video.png'

const VideoSection = () => {
  return (
   <>
   <SectionTitle  heading='Our Services' />

   <div className="w-full">
        
    
        <div className="hero bg-blue-100 py-10">
          <div className="hero-content flex-col lg:flex-row-reverse justify-end">
            <img
              src={videoBg}
              className="max-w-md rounded-lg "
            />
            <div>
     
              <h1 className="text-5xl font-bold animate__animated animate__fadeInDown">Professional Graphic Design</h1>
              <p className="py-6">
              Bringing Creativity to Life through Graphic Services
              </p>
              <button className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full">
    Explore More!
  </button>
            </div>
          </div>
        </div>
      </div>




    {/* <div className='grid grid-cols-2'>
        <div>
            <div>
                <h1>Our Services</h1>
            </div>
        </div>
        <div
      style={{
        backgroundImage: `url(${videoBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
       
      }}
    >
      <ReactPlayer
        url="https://www.youtube.com/watch?v=LWt3btxmemo"
        width="260px"
        height="130px"
        controls
      />
    </div>
    </div> */}

   {/* <div className='flex justify-center items-center'>
          
     <div>
     <ReactPlayer
        url="https://www.youtube.com/watch?v=LWt3btxmemo"
        width="1280px"
        height="660px"
        controls
      />
     </div>
    </div> */}
    </>
  );
};

export default VideoSection;
