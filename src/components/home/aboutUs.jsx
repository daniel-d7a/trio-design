import about from "../../assets/mock/get to know.png";

export default function About() {
  return (
    <>
      <section className="text-black md:flex bg-beige py-10">
        <img src={about} className="mx-auto w-5/6 md:w-1/3 md:ml-5" />
        <div className="">
          <h2 className="text-center font-extrabold text-4xl capitalize my-6 md:mb-[5vw]">
            get to know <span>TRIO design</span>
          </h2>
          <div className="px-10 md:px-20 text-xl font-light leading-relaxed">
            <p className="md:mb-6">
              The experiene gained by the owners through years of working in big
              furniture companies trio designs was working big
            </p>
            <p>
              We managed to produce furniture for big brands as a start through
              our profissional finishes, accurate time frames and our clients
              confidence, though we're still at the beginning amd we still keep
              our promise...
            </p>
            <p className="capitalize font-bold">you name it... we make it</p>
          </div>
        </div>
      </section>
    </>
  );
}
