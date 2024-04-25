import { ChevronRight } from "lucide-react";
import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="w-full pt-5 bg-green-200">
      <div className="mx-auto flex max-w-6xl flex-col items-start space-x-8 md:flex-row">
        <div className="w-full px-4 md:w-1/2 lg:px-0">
          <h1 className="max-w-sm text-2xl md:text-3xl lg:text-4xl font-semibold">
            Subscribe to our Newsletter
          </h1>
          <form
            action=""
            className="mt-4 inline-flex w-full items-center md:w-3/4"
          >
            <input
              className="flex h-10 w-full rounded-md border border-black/20 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="email"
              placeholder="Email"
            ></input>
            <button
              type="button"
              className="ml-4 rounded-full bg-black px-3 py-3 text-sm hover:scale-110 font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </form>
        </div>
        <div className="w-full md:w-1/2 lg:w-2/12 mt-4 md:mt-0">
          <div className="h-full">
            <div className="lg:mb-0">
              <p className="mb-4 text-lg font-semibold text-gray-700 ">
                Company
              </p>
            </div>
            <ul>
              <li className="mb-4 pt-2  ">
                <a
                  className=" text-base font-medium text-gray-900 hover:text-gray-700"
                  href="#"
                >
                  About Us
                </a>
              </li>
              <li className="mb-4">
                <a
                  className=" text-base font-medium text-gray-900 hover:text-gray-700"
                  href="#"
                >
                  Sell on Ecoyaan
                </a>
              </li>
              <li className="mb-4">
                <a
                  className=" text-base font-medium text-gray-900 hover:text-gray-700"
                  href="#"
                >
                  Careers
                </a>
              </li>
              <li className="mb-4">
                <a
                  className=" text-base font-medium text-gray-900 hover:text-gray-700"
                  href="#"
                >
                  Privacy Policy
                </a>
              </li>

              <li className="mb-4">
                <a
                  className=" text-base font-medium text-gray-900 hover:text-gray-700"
                  href="#"
                >
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-2/12">
          <div className="h-full">
            <div className="mb-8 lg:mb-0">
              <p className="mb-6 text-lg font-semibold text-gray-700 ">
                Registered Address:
              </p>
            </div>

            <div className=" text-base font-medium text-gray-900 hover:text-gray-700">
              1-N-12T-781/1
            </div>
            <div className=" text-base font-medium text-gray-900 hover:text-gray-700">
              Sri Krishna Vilasa,
            </div>
            <div className=" text-base font-medium text-gray-900 hover:text-gray-700">
              Urvastores,
            </div>
            <div className=" text-base font-medium text-gray-900 hover:text-gray-700">
              Ashoknagar(MR),
            </div>
            <div className=" text-base font-medium text-gray-900 hover:text-gray-700">
              Mangalore,
            </div>
            <div className=" text-base font-medium text-gray-900 hover:text-gray-700">
              Dakshina Kannada- 575006,
            </div>
            <div className=" text-base font-medium text-gray-900 hover:text-gray-700">
              Karnataka, India
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-2/12">
          <div className="h-full">
            <div className="mb-8 lg:mb-0">
              <p className="mb-6 text-lg font-semibold text-gray-700 ">
                Legal Business Name:
              </p>
            </div>
            <div className=" text-base font-medium text-gray-900 hover:text-gray-700">
              Kindkarma E-Retail Private Limited
            </div>
            <div className=" text-base font-medium text-gray-900 hover:text-gray-700">
              CIN: U47912KA2023PTC182592
            </div>
            <div className=" text-base font-medium text-gray-900 hover:text-gray-700">
              Telephone: +91 9980490777
            </div>
          </div>
        </div>
      </div>
      <hr className="my-1 mt-5 border-black" />

      <section className="relative overflow-hidden bg-green-200 py-2">
        <div className="container relative z-10 mx-auto px-4">
          <div className="-m-8 flex flex-wrap items-center justify-center">
            <div className="w-auto p-8">
              <a href="#">
                <div className="inline-flex items-center">
                  <div className="md:mt-0">
                    <p className="text-md font-medium">
                      © 2023-2024, Ecoyaan<sup>TM</sup>
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="w-auto">
              <div className=" flex flex-wrap">
                <div className="w-auto p-1.5">
                  <a href="#">
                    <div className="flex h-10 w-10 items-center justify-center hover:scale-110">
                      <FaFacebook size={25} />
                    </div>
                  </a>
                </div>
                <div className="w-auto p-1.5">
                  <a href="#">
                    <div className="flex h-10 w-10 items-center justify-center hover:scale-110">
                      <FaInstagram size={25} />
                    </div>
                  </a>
                </div>
                <div className="w-auto p-1.5">
                  <a href="#">
                    <div className="flex h-10 w-10 items-center justify-center hover:scale-110">
                      <CiLinkedin size={25} />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
