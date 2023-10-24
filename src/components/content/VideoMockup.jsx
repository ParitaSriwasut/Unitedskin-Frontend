import myVideo from "../../assets/video/videoMockup.mp4";
import myBg from "../../assets/image/resized-image-Promo.jpeg";

export default function VideoMockup() {
  return (
    <>
      <div className="m-40 bg-gray"></div>
      <div style={{ backgroundImage: `url(${myBg})` }}>
        <div className="container max-width: 1000px; flex overflow-hidden justify-center p-14 m-14 backdrop-blur-sm">
          <video
            className="w-[1100px]"
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
