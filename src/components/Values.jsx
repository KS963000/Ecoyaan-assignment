import React from "react";

export const Values = () => {
  return (
    <>
      <div className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold my-5">
        Our Values
      </div>
      <div className=" w-full px-2 lg:px-8 my-5">
        <div className="grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full">
              <img
                src="https://ecoyaan.com/images/Trust.png"
                className="relative h-20 w-20 rounded-full object-cover hover:scale-125"
                alt="Trust"
              />
            </div>
            <h3 className="mt-8 md:text-xl text-lg font-semibold text-black">
              Trust
            </h3>
            <p className="mt-4 md:text-lg text-md text-gray-600">
              We value the trust of our community. We strive to be transparent
              and honest in everything we do, from the content we share today to
              sourcing our products in the future.
            </p>
          </div>
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full ">
              <img
                src="https://ecoyaan.com/images/Authenticity.png"
                className="relative h-20 w-20 rounded-full object-cover hover:scale-125"
                alt="Trust"
              />
            </div>
            <h3 className="mt-8 md:text-xl text-lg font-semibold text-black">
              Authenticity
            </h3>
            <p className="mt-4 md:text-lg text-md text-gray-600">
              We are genuine in our mission to promote sustainability and
              environmental awareness. An authentic community of eco-conscious
              people can inspire each other on the journey towards
              sustainability.
            </p>
          </div>
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full ">
              <img
                src="https://ecoyaan.com/images/Impact.png"
                className="relative h-24 w-24 rounded-full object-cover hover:scale-125"
                alt="Trust"
              />
            </div>
            <h3 className="mt-8 md:text-xl text-lg font-semibold text-black">
              Impact
            </h3>
            <p className="mt-4 md:text-lg text-md text-gray-600">
              We measure our success by our impact on the planet and our
              community. We aim to empower our sellers and customers to make
              responsible choices that benefit their well-being and the
              well-being of others.
            </p>
          </div>
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full">
              <img
                src="https://ecoyaan.com/images/FunAndEngaging.png"
                className="relative h-24 w-24 rounded-full object-cover hover:scale-125"
                alt="Trust"
              />
            </div>
            <h3 className="mt-8 md:text-xl text-lg font-semibold text-black">
              Fun & Engaging
            </h3>
            <p className="mt-4 md:text-lg text-md text-gray-600">
              Moving towards a sustainable lifestyle and the constant news
              around climate change can be stressful. We aim to inject fun and
              creativity into everything we do, from designing our products to
              providing services.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

