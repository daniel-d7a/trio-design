import about from "../../assets/mock/get to know.png";

export default function About() {
  return (
    <>
      <section className="text-black sm:flex">
        <img src={about} className="mx-auto w-5/6 sm:w-1/3 sm:ml-5" />
        <div className="">
          <h2 className="text-center text-4xl capitalize my-6">
            get to know <span>trio design</span>
          </h2>
          <p className="px-6 text-xl">
            the experiene gained by the owners through years of working in big
            furniture companies trio designs was working big
          </p>
          <p className="px-6 text-xl">
            we managed to produce furniture for big brands as a start through
            our profissional finishes, accurate time frames and our clients
            confidence, though we're still at the beginning amd we still keep
            our promise...
          </p>
          <p className="px-6 text-xl capitalize font-bold">
            you name it... we make it
          </p>
        </div>
      </section>
    </>
  );
}
