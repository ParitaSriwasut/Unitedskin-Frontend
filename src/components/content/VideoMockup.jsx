import myVideo from "../../assets/video/videoMockup.mp4";
import myBg from "../../assets/image/pic3.jpeg";

export default function VideoMockup() {
  return (
    <>
      <div className="m-0 bg-gray"></div>
      <div style={{ backgroundImage: `url(${myBg})` }}>
        <div className="container:w-h-[1100px] flex overflow-hidden justify-center px-40 py-40 mr-18 backdrop-blur-lg">
          <video
            className="w-h-[1100px]"
            // controls
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={myVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
}
