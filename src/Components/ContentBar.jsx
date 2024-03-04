import React from "react";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import RatingBox from "./RatingBox";

const ContentBar = () => {
  return (
    <div className="contentContainer">
      {/* 1st list */}

      <button
        className="flex items-center px-4 py-2 rounded-r-md bg-orange-500 text-white mt-10 mb-5 "
        style={{ position: "relative", top: "0px", left: "10px" }}
      >
        <EmojiEventsOutlinedIcon />
        <span className="ml-2">Best Choice</span>
      </button>
      <div className="flex justify-center items-center">
        <div className="mb-auto">
          <span className="flex justify-center items-center rounded-full w-10 h-10 bg-gray-100 mr-2">
            {" "}
            1{" "}
          </span>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="./images/img_download_1.png"
            alt=""
            className=" mr-auto  mb-10 "
            style={{ width: "50%", height: "auto" }}
          />
          <span className=" mr-52">Builder 1</span>
        </div>

        <div className="flex flex-col mr-auto mt-10">
          <p className="max-w-xs">
            <span className="font-bold text-gray-700">
              WixPro 72-Inch Responsive Website Builder-
            </span>{" "}
            Comprehensive Digital Platform Creation Tool, Streamlined Design
            Interface for Professional Websites and Online Stores.
          </p>
          <h3 className="font-bold text-gray-700">Main highlights</h3>
          <p className="max-w-xs ">
            [What You Get]: Receive the WixPro website builder suite, access to
            premium design templates, an extensive library of widgets and apps,
            and detailed step-by-step guides.
          </p>
          <button className="flex items-center text-blue-500 hover:text-blue-700 mt-2">
            Show more{" "}
            <KeyboardArrowDownOutlinedIcon
              className="items-center"
              style={{ fontSize: "15px" }}
            />
          </button>
        </div>

        <div className="flex flex-col">
          <div className="bg-blue-100 py-10 px-5 mb-10 rounded-b-md overflow-hidden">
            <div className="p-4 flex flex-col justify-center items-center">
              <h2 className="text-3xl font-bold">9.8</h2>
              <span className="text-xl">Exceptional</span>
              <RatingBox rating={5} />
            </div>
          </div>

          <button className="block mt-1 px-4 py-2 bg-blue-500 text-white rounded-md">
            View
          </button>
        </div>
      </div>

      {/* 2nd list */}

      <button
        className="flex items-center px-4 py-2 rounded-r-md bg-orange-500 text-white mt-10 mb-5 "
        style={{ position: "relative", top: "0px", left: "10px" }}
      >
        <DiamondOutlinedIcon />
        <span className="ml-2">Best Value</span>
      </button>
      <div className="flex justify-center items-center">
        <div className="mb-auto">
          <span className="flex justify-center items-center rounded-full w-10 h-10 bg-gray-100 mr-2">
            {" "}
            2{" "}
          </span>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="./images/img_download_1.png"
            alt=""
            className=" mr-auto  mb-10 "
            style={{ width: "50%", height: "auto" }}
          />
          <span className=" mr-52">Builder 2</span>
        </div>

        <div className="flex flex-col mr-auto mt-10">
          <p className="max-w-xs text-green-950">
            <span className="font-bold text-gray-700">
              SiteCraft 68-Inch Ultimate Web Design Studio-
            </span>
            Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for
            Dynamic Websites and E-commerce Platforms.
          </p>
          <h3 className="font-bold text-gray-700">Main highlights</h3>
          <p className="max-w-xs text-green-950">
            [What You Get]: Gain access to the SiteCraft design studio,
            featuring a robust selection of design elements, SEO optimization
            tools, and e-commerce integrations.
          </p>
          <button className="flex items-center text-blue-500 hover:text-blue-700 mt-2">
            Show more{" "}
            <KeyboardArrowDownOutlinedIcon
              className="items-center"
              style={{ fontSize: "15px" }}
            />
          </button>
        </div>

        <div className="flex flex-col">
          <div className="bg-blue-100 py-10 px-5 mb-10 rounded-b-md overflow-hidden">
            <div className="p-4 flex flex-col justify-center items-center">
              <h2 className="text-3xl font-bold">9.8</h2>
              <span className="text-xl">Exceptional</span>
              <RatingBox rating={4} />
            </div>
          </div>

          <button className="block mt-1 px-4 py-2 bg-blue-500 text-white rounded-md">
            View
          </button>
        </div>
      </div>

      {/* 3rd list */}

      <div className="flex justify-center items-center">
        <div className="mb-auto">
          <span className="flex justify-center items-center rounded-full w-10 h-10 bg-gray-100 mr-2">
            3
          </span>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="./images/img_download_1.png"
            alt=""
            className=" mr-auto  mb-10 "
            style={{ width: "50%", height: "auto" }}
          />
          <span className=" mr-52">Builder 1</span>
        </div>

        <div className="flex flex-col mr-auto mt-10">
          <p className="max-w-xs">
            <span className="font-bold text-gray-700">
              WixPro 72-Inch Responsive Website Builder-
            </span>{" "}
            Comprehensive Digital Platform Creation Tool, Streamlined Design
            Interface for Professional Websites and Online Stores.
          </p>
          <h3 className="font-bold text-gray-700">Main highlights</h3>
          <p className="max-w-xs ">
            [What You Get]: Receive the WixPro website builder suite, access to
            premium design templates, an extensive library of widgets and apps,
            and detailed step-by-step guides.
          </p>
          <button className="flex items-center text-blue-500 hover:text-blue-700 mt-2">
            Show more{" "}
            <KeyboardArrowDownOutlinedIcon
              className="items-center"
              style={{ fontSize: "15px" }}
            />
          </button>
        </div>

        <div className="flex flex-col mt-10">
          <div className="bg-blue-100 py-10 px-5 mb-10 rounded-b-md overflow-hidden">
            <div className="p-4 flex flex-col justify-center items-center">
              <h2 className="text-3xl font-bold">9.3</h2>
              <span className="text-xl">Exceptional</span>
              <RatingBox rating={5} />
            </div>
          </div>

          <button className="block mt-1 px-4 py-2 bg-blue-500 text-white rounded-md">
            View
          </button>
        </div>
      </div>

      {/* 4th list */}

      <div className="flex justify-center items-center">
        <div className="mb-auto">
          <span className="flex justify-center items-center rounded-full w-10 h-10 bg-gray-100 mr-2">
            {" "}
            4{" "}
          </span>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="./images/img_download_1.png"
            alt=""
            className=" mr-auto  mb-10 "
            style={{ width: "50%", height: "auto" }}
          />
          <span className=" mr-52">CDK</span>
        </div>

        <div className="flex flex-col mr-auto mt-10">
          <p className="max-w-xs">
            <span className="font-bold text-gray-700">
            CDK Resposive Builder-
            </span>{" "}
             An extensive library of widgets and apps, and
            detailed step-by-step guides
          </p>
          <h3 className="font-bold text-gray-700">Main highlights</h3>
          {/* <div>
            <ul>
                <li><button>9.9</button> Building Repsonsive</li>
                <li><button>8.9</button> Cool</li>
                <li><button>8.9</button> Docs</li>
            </ul>
          </div> */}

          <div className=" p-4 rounded" style={{ backgroundColor: "#FFF4ED" }}>
            <ul className="list-none">
              <li className="flex items-center">
                <button className=" bg-white text-blue-500 px-2 py-1 rounded mb-2">
                  9.9
                </button>
                <span className="ml-2">Building Responsive</span>
              </li>
              <li className="flex items-center">
                <button className=" bg-white text-blue-500 px-2 py-1 rounded mb-2">
                  8.9
                </button>
                <span className="ml-2">Cool</span>
              </li>
              <li className="flex items-center">
                <button className=" bg-white text-blue-500 px-2 py-1 rounded">
                  8.9
                </button>
                <span className="ml-2">Docs</span>
              </li>
            </ul>
          </div>

          <h2 className="mt-1">Why we love it ?</h2>
          <div>
            <ul>
              <li>
                <DoneOutlinedIcon
                  className="mb-1 mr-1"
                  style={{
                    height: "20px",
                    width: "20px",
                    borderRadius: "50%",
                    backgroundColor: "#EBF5FF",
                    color: "#0855A1",
                  }}
                />
                Documentation
              </li>
              <li>
                <DoneOutlinedIcon
                  className="mb-1 mr-1"
                  style={{
                    height: "20px",
                    width: "20px",
                    borderRadius: "50%",
                    backgroundColor: "#EBF5FF",
                    color: "#0855A1",
                  }}
                />
                Easy Use
              </li>
              <li>
                <DoneOutlinedIcon
                  className="mr-1"
                  style={{
                    height: "20px",
                    width: "20px",
                    borderRadius: "50%",
                    backgroundColor: "#EBF5FF",
                    color: "#0855A1",
                  }}
                />
                Out of Box
              </li>
            </ul>
          </div>

          <button className="flex items-center text-blue-500 hover:text-blue-700 mt-2">
            Show more{" "}
            <KeyboardArrowDownOutlinedIcon
              className="items-center"
              style={{ fontSize: "15px" }}
            />
          </button>
        </div>

        <div className="flex flex-col mt-10">
          <div className="bg-blue-100 py-10 px-5 mb-10 rounded-b-md overflow-hidden">
            <div className="p-4 flex flex-col justify-center items-center">
              <h2 className="text-3xl font-bold">9.1</h2>
              <span className="text-xl">Very Good</span>
              <RatingBox rating={4} />
            </div>
          </div>

          <button className="block mt-1 px-4 py-2 bg-blue-500 text-white rounded-md">
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentBar;
