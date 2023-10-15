import myHero from "../../images/Hero1.png";
export default function HomeHeader() {
  return (
    <div className="w-screen  -z-10 h-screen top-0">
      <img
        className="s inset-0 w-full h-full object-cover"
        alt="hero"
        src={myHero}
      />
      <div className="absolute inset-0 flex items-center justify-start px-12 mt-40">
        <div className="text-start justify-start text-white leading-loose">
          <h1 className="font-sans text-7xl font-semibold text-left">
            Care For Your Skin,
          </h1>
          <h1 className="font-sans text-7xl font-semibold text-left">
            Care For Your Beauty
          </h1>
          <h1 className="flex font-sans text-xl text-left">
            What is your skin trying to tell you? Often the skin is a metaphor
            for deeper issues
          </h1>
          <h1 className="flex font-sans text-xl text-left">
            and a way for your body to send up a red flag to warn you that all
            is not well underneath.
          </h1>
          <h1 className="flex font-sans text-xl text-left leading-loose">
            taking care of your skin is more important than covering it up.
          </h1>
          <h1 className="flex font-sans text-2xl text-left font-semibold text-neutral2">
            Want beautiful skin? UNITED & FREE is the key!
          </h1>
          <button className="mt-5 bg-green text-zinc-600 rounded-md text-xl py-4 px-8 ">
            Let's get to know us
          </button>
        </div>
      </div>
    </div>
  );
}
