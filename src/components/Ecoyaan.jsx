import React from "react";

export const Ecoyaan = () => {
  return (
    <div>
      <div className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold my-3">
        About Ecoyaan
      </div>
      <section className="pb-4 pt-4 md:px-0 mx-4">
        <div className="w-full">
          <div className="lg:flex lg:items-center lg:justify-center">
            <div className="relative md:w-[70%] lg:w-[80%]  md:mx-auto w-full">
              <img
                className="relative h-auto sm:w-full rounded-xl w-full object-cover hover:scale-110"
                src="https://ecoyaan.com/images/about-us-sustainable-lifestyle-partner.png"
                alt=""
              />
            </div>

            <div className=" md:mt-0 md:px-10 md:py-10 md:text-lg mt-4 text-justify lg:w-full">
              <div>
                <p className=" text-black">
                  At Ecoyaan, we are more than just a platform. Our goal is to
                  build a community of eco-conscious people who share a common
                  vision and passion for a more sustainable world.
                </p>
                <p className=" text-black mt-5">
                  We recognize that sustainability is a journey (as the Sanskrit
                  word “yaan” suggests). To keep you motivated on this journey,
                  on our platform and our social media pages, you can find:
                </p>

                <p className=" text-black mt-2">
                  <ul className="list-disc list-inside">
                    <li>
                      Tips and tricks to adopt a more eco-friendly and low-waste
                      lifestyle
                    </li>
                    <li>
                      Videos, posts, and quizzes on climate change and
                      sustainability
                    </li>
                    <li>
                      Events and pledges that invite you to adopt a more
                      sustainable lifestyle
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

