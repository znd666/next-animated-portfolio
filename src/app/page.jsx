import Image from "next/image";

const Homepage = () => {
  return (
  <div className="h-full flex flex-col px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 lg:flex-row">
    {/* IMAGE CONTAINER */}
    <div className="h-1/2 lg:h-full lg:w-1/2 relative">
      <Image src={"/hero.png"} alt="" fill className="object-contain" />
    </div>
    {/* TEXT CONTAINER */}
    <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
      <h1 className="text-4xl xl:text-6xl font-bold">Crafting Digital Experiences, Designing Tomorrow.</h1>
      {/* DESC */}
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nostrum alias quaerat molestiae eveniet. Veritatis optio, ducimus officia, earum harum quo blanditiis autem est eos nemo voluptatem perspiciatis nihil culpa.</p>
      <div className="flex gap-4">
        <button className="p-4 rounded ring-1 ring-black bg-black text-white">View My Work</button>
        <button className="p-4 rounded ring-1 ring-black">Contact Me</button>
      </div>
    </div>
  </div>
  );
};

export default Homepage;
