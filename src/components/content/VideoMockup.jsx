import myVideo from "../../assets/video/videoMockup.mp4";
import myBg from "../../assets/image/resized-image-Promo.jpeg";

export default function VideoMockup() {
  return (
    <>
      <div style={{ backgroundImage: `url(${myBg})` }}>
        <div className="container max-width: 1024px; flex mx-auto overflow-hidden justify-center m-40">
          <video
            className="w-[1000px]"
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
