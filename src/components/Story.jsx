import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export const Story = () => {
  return (
    <div className="bg-green-200 text-center text-2xl md:text-3xl lg:text-4xl my-3">
      <div className="flex justify-center text-4xl font-semibold py-3">
        Our Story
      </div>

      <div className="md:flex md:justify-center md:gap-x-16 md:py-5 w-full">
        <div className="mt-4">
          <div className="flex justify-center">
            <img
              src="https://ecoyaan.com/images/about-us-founding-team-01.png"
              class="h-[200px] img-fit img-fit-height img-hover hover:scale-110"
              alt="about-us-founding-team"
            ></img>
          </div>

          <div className="flex justify-center">
            <div className=" flex flex-wrap">
              <div className="w-auto p-1.5">
                <a href="#">
                  <div className="flex h-6 w-6 items-center justify-center">
                    <FaFacebook size={20} />
                  </div>
                </a>
              </div>
              <div className="w-auto p-1.5">
                <a href="#">
                  <div className="flex h-6 w-6 items-center justify-center ">
                    <FaInstagram size={20} />
                  </div>
                </a>
              </div>
              <div className="w-auto p-1.5">
                <a href="#">
                  <div className="flex h-6 w-6 items-center justify-center ">
                    <CiLinkedin size={20} />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex justify-center">
            <img
              src="https://ecoyaan.com/images/about-us-founding-team-02.png"
              class="h-[200px] img-fit img-fit-height img-hover hover:scale-110"
              alt="about-us-founding-team"
            ></img>
          </div>

          <div className="flex justify-center">
            <div className=" flex flex-wrap">
              <div className="w-auto p-1.5">
                <a href="#">
                  <div className="flex h-6 w-6 items-center justify-center">
                    <FaFacebook size={20} />
                  </div>
                </a>
              </div>
              <div className="w-auto p-1.5">
                <a href="#">
                  <div className="flex h-6 w-6 items-center justify-center ">
                    <FaInstagram size={20} />
                  </div>
                </a>
              </div>
              <div className="w-auto p-1.5">
                <a href="#">
                  <div className="flex h-6 w-6 items-center justify-center ">
                    <CiLinkedin size={20} />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center text-lg mt-3 mx-10 pb-5">
        <div>
          We started Ecoyaan after watching an episode of “Our Planet II”, where
          we saw the devastating impact of plastic pollution and climate change
          on the albatross birds. That moment ignited our mission.
        </div>
        <div className="mt-5">
          Our research suggests that many Indians understand global warming, yet
          access to sustainable practices and products remains limited. We also
          noticed that there is a lack of support for eco-friendly businesses.
        </div>
        <div className="mt-5">
          We created Ecoyaan to connect consumers, businesses, and
          sustainability experts. We want to make it easy and convenient for
          people to access eco-friendly products and services, learn and share
          best practices, and support sustainability initiatives.
        </div>
        <div className="mt-5">
          As founders, we are not perfect, but we are passionate. We believe
          that every small step matters. Join us and be a part of the Ecoyaan
          community — together, we’ll make a difference.
        </div>
      </div>
    </div>
  );
};
