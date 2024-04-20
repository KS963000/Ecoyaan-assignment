export const Body = () => {
  return (
    <div className="w-full mt-5 pb-5">
      <div className="md:grid md:grid-cols-2 md:px-20 flex flex-col-reverse">
        <div className="px-5 text-justify">
          <div className="md:text-3xl text-lg font-semibold mx-auto">
            Join our community in creating a more sustainable future for
            everyone
          </div>
          <div className="md:mt-7 mt-3 md:text-xl text-md">
            At Ecoyaan, we are more than just a platform. Our vision is to build
            an eco-conscious community for people and products.
          </div>
          <div className="md:mt-7 mt-3 md:text-xl text-md">
            Consider us your partner for all things sustainable. To keep you
            motivated on the journey, we will provide you with engaging
            information about climate change, the latest updates on climate
            policies and lifestyle tips that you can adopt to reduce your impact
            on the environment.
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col justify-center ">
            <img
              src="https://ecoyaan.com/images/Impact.png"
              className="h-auto w-full img-fit img-fit-height hover:scale-110"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="mt-5 px-5 pt-8 md:grid grid-cols-2 bg-green-200 pb-10 md:px-24">
        <div className="flex justify-center">
          <div className="flex flex-col justify-center">
            <video
              autoPlay
              muted
              loop
              className="h-auto w-full img-fit-height img-hover rounded-lg hover:scale-105"
            >
              <source
                src="https://ecoyaan.com/images/ProductCuration.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
        <div className="md:ml-8 mt-3 text-justify">
          <div className="md:text-3xl text-lg font-semibold mx-auto">
            Carefully curated Eco-friendly products
          </div>
          <div className="md:mt-7 mt-3 md:text-xl text-md">
            We believe that every purchase you make can have a positive impact
            on the planet and the future.
          </div>
          <div className="md:mt-7 mt-3 md:text-xl text-md">
            Soon, we will be connecting you with eco-friendly and sustainable
            products that are carefully selected based on their environmental
            and social benefits.
          </div>
        </div>
      </div>

      <div className="md:grid md:grid-cols-2 md:px-20 flex flex-col-reverse">
        <div className="px-5 text-justify mt-4">
          <div className="md:text-3xl text-lg font-semibold mx-auto">
            For businesses that care deeply about sustainability
          </div>
          <div className="md:mt-7 mt-3 md:text-xl text-md">
            Do you run a business that is committed to sustainability in every
            aspect of your work?
          </div>
          <div className="md:mt-7 mt-3 md:text-xl text-md">
            Do you want to showcase your products to an incredible audience of
            eco-conscious consumers who care?
          </div>
          <div className="md:mt-7 mt-3 md:text-xl text-md">
            If yes, then you are the perfect fit for our platform. Our community
            appreciates and supports businesses that are transparent, ethical,
            and innovative in their approach to sustainability. Contact us
            today:
          </div>
        </div>
        <div className="flex justify-center mt-3">
          <div className="flex flex-col justify-center">
            <img
              src="https://ecoyaan.com/images/OurStory4.png"
              className="h-auto w-full img-fit img-fit-height hover:scale-105"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="bg-green-500 text-white md:px-6 px-2 py-2 mt-2 text-sm hover:scale-110 md:text-lg rounded-lg">
          Contact Us
        </button>
      </div>
    </div>
  );
}
