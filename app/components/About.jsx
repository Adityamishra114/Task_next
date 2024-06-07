import Image from "next/image";
import Link from "next/link";

const AboutMe = () => {
  return (
    <div id="aboutme" className="py-12 m-0 bg-gray-300">
      <div className="container py-5">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 lg:flex lg:items-center justify-center">
            <Image
              className="border border-secondary rounded-full hidden sm:block"
              src="https://adityamishra114.github.io/Personal-Portfolio/Aditya%20Mishra.jpg"
              alt="profilepicture"
              width="375"
              height="375"
            />
          </div>
          <div className="lg:w-1/2 py-22">
            <h2 className="text-4xl mb-10 text-center lg:text-center">
              About Me
            </h2>
            <p className="text-lg text-center font-extralight lg:text-center mb-8 p-4">
              My name is Aditya Kumar Mishra and I have specialized in HTML5,
              CSS3, JavaScript,ReactJs and Wordpress. I am much Interested in
              Developing new things which excite me a lot.As an intern on
              SynergyLabs, I Learn building pages of the website using
              Bootstrap, HTML, CSS ,javaScript, ReactJs and Wordpress. In this
              time I am working as FrontEnd Developer intern on Arity
              Technologies. My goal is to build highly performant applications
              that solve real-world probelms and provides users with an awesome
              experience.When I&apos;m not working, I&apos;m probably hanging out with my
              friends, listening music, watching web-series. I am always love
              with a cup of Tea.
            </p>
            <p className="text-lg text-center lg:text-center">
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                <Link
                  href="https://drive.google.com/file/d/1PIUIGKYShZgTXElEAUgUiea9MgdrhkTd/view?usp=drive_link"
                  target="_blank"
                  download="../../public/Aditya_Mishra.pdf"
                  rel="noopener noreferrer"
                >
                  Resume
                </Link>
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
