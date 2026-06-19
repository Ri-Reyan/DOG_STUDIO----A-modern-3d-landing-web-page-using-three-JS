const Sections = () => {
  return (
    <div className="z-10">
      <div className="h-[100vh] w-[100vw] bg-black border-2 border-white">
        <div className="text-white w-full ml-[4vw] mt-[6vh] flex flex-row">
          <div className="w-1/3">
            <h1 className="text-xl font-bold">DOGSTUDIO</h1>
            <h1 className="text-xl font-bold">/DEPT.</h1>
          </div>
          <div className="w-1/3 flex flex-row">
            <i className="ri-arrow-right-wide-fill text-red-600 text-xl text-center"></i>
            <h1 className="text-xl font-semibold">Showreel</h1>
          </div>
          <div className="">
            <i class="ri-menu-3-fill text-white text-2xl ml-[22vw]"></i>
          </div>
        </div>
        <div className="w-1/2">
          <div className="text-8xl font-bold text-white mt-[20vh] font-serif italic ml-[35vw] absolute">
            <h1 className="ml-[6vw]">We</h1>
            <h1>Make</h1>
            <h1>Good</h1>
            <h1 className="ml-[2vw]">Shit</h1>
          </div>
        </div>
        <div className="w-1/2"></div>
      </div>
      <div
        id="section-1"
        className="h-[100vh] w-[100vw] bg-blue-400 border-2 border-white"
      >
        SectionOne
      </div>
      <div
        id="section-2"
        className="h-[100vh] w-[100vw] bg-pink-400 border-2 border-white"
      >
        SectionTwo
      </div>
      <div
        id="section-3"
        className="h-[100vh] w-[100vw] bg-orange-400 border-2 border-white"
      >
        SectionThree
      </div>
      <div
        id="section-4"
        className="h-[100vh] w-[100vw] bg-teal-400 border-2 border-white"
      >
        SectionFour
      </div>
    </div>
  );
};

export default Sections;
