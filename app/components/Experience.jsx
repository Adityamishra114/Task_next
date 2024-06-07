import Image from "next/image";


const Experience = () => {
  return (
    <section className="py-12 w-full block bg-white">
      <div className=" mx-auto">
          <div className="py-5 m-0  bg-white ">
            <h2 className=" mb-5  py-6 font-extralight text-center text-5xl">Experiences</h2>
            <div className="flex flex-wrap sm:grid sm:grid-cols-1  md:grid-cols-2 gap-4 text-center ">
              <ExperienceCard
                src="data:image/jpeg;base64,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"
                alt="Synergy"
                title="Data Annotation"
                date="Dec 2021 – july 2022"
              />
              <ExperienceCard
                src="/tech.JPG"
                alt="Techaronic"
                title="Frontend Developer"
                date="Oct 202 2– April 2024"
              />
              <ExperienceCard
                src="/car.png"
                alt="Car24"
                title="Full stack Developer"
                date="March 2024 – Present"
              />
            </div>
          </div>
        </div>
    </section>
    
  );
};

const ExperienceCard = ({ src, alt, title, date }) => {
  return (
    <div className=" w-full md:w-1/2 lg:w-1/2 mx-auto ">
    <div className=" p-5 rounded-lg flex-col items-center  ">
      <Image src={src} alt={alt} width={200} height={100} className="mb-4 mx-auto " />
      <p className="text-lg font-extralight ">{title}<br />{date}</p>
    </div>
  </div>
  );
};

export default Experience;
