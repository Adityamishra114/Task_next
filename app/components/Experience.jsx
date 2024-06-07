import Image from "next/image";
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/Task_next" : "";
const generateImagePath = (src) => {
  return `${basePath}${src}`;
};

const Experience = () => {
  return (
    <section className="py-12 w-full block bg-white">
      <div className=" mx-auto">
        <div className="py-5 m-0  bg-white ">
          <h2 className=" mb-5  py-6 font-extralight text-center text-5xl">
            Experiences
          </h2>
          <div className="flex flex-wrap sm:grid sm:grid-cols-1  md:grid-cols-2 gap-4 text-center ">
            <ExperienceCard
              src={generateImagePath("/images/synl.jpg")}
              alt="Synergy"
              title="Data Annotation"
              date="Dec 2021 – july 2022"
            />
            <ExperienceCard
              src="/images/tech.jpg"
              alt="Techaronic"
              title="Frontend Developer"
              date="Oct 202 2– April 2024"
            />
            <ExperienceCard
              src="/images/car.png"
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
        <Image
          src={src}
          alt={alt}
          width={200}
          height={100}
          className="mb-4 mx-auto "
        />
        <p className="text-lg font-extralight ">
          {title}
          <br />
          {date}
        </p>
      </div>
    </div>
  );
};

export default Experience;
