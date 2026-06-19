import Variants from "../assets/VariantInfo";

const Sections = () => {
  return (
    <div className="z-10">
      <div id="section-1" className="h-[100vh] w-[100vw] bg-black border">
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
        <div className="w-1/2 mt-[100vh] ml-[70vw] absolute">
          <h1 className="text-white font-medium text-xl w-1/3 ">
            Dogstudio is a multidisciplinary creative studio at the intersection
            of art, design and technology.
          </h1>
          <br />
          <h1 className="text-md font-medium text-gray-500 w-1/2 tracking-tighter">
            Our goal is to deliver amazing experiences that make people talk,
            and build strategic value for brands, tech, entertainment, arts &
            culture.
          </h1>
        </div>
      </div>
      <div id="section-2" className="h-[100vh] w-[100vw] bg-black">
        <h1 className="text-4xl font-bold text-black">.</h1>
        <div className="mt-[50vh] ml-[3vw] space-y-[15vh]">
          {Variants.map((elem) => (
            <div className="flex flex-row gap-x-8" key={elem.id}>
              <h1 className="text-sm text-gray-400">{elem.status}</h1>
              <h1 className="text-5xl text-white">{elem.name}</h1>
            </div>
          ))}
        </div>
      </div>
      <div id="section-3" className="h-[100vh] w-[100vw] bg-black"></div>
      <div id="section-4" className="h-[100vh] w-[100vw] bg-black">
        <div className="ml-[15vw]">
          <h1 className="text-sm text-gray-300 font-senibold">
            THIS IS HOW WE DO IT
          </h1>
          <div className="text-6xl font-bold text-white font-serif italic">
            <h1>We're crafting</h1>
            <h1>emotional</h1>
            <h1>experiences animed</h1>
            <h1>at improving</h1>
            <h1>results</h1>
          </div>
          <div className="text-2xl font-bold text-white font-serif italic mt-[10vh] ml-[70vw] absolute">
            <h1 className="ml-[2vw]">We</h1>
            <h1>Make</h1>
            <h1>Good</h1>
            <h1 className="ml-[1vw]">Shit</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sections;
