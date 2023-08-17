import React from "react";
import img from "../../assets/c96108ab2f0643c2353339ab6d0dbef5.png";

const WedTask = () => {
  return (
    <>
      <div className="flex -px-2 -ms-12 gap-9">
        <div className="-mx-2 -mt-1">
          <h1 className="font-semibold"> Wed </h1>
          <p className="text-sm text-right text-gray-400">Jul</p>
        </div>
        <p className="-ms-5 date w-[38px] h-[38px] px-2 pt-2">30</p>
      </div>
      <div className="flex mt-9 md:mt-12 -ms-24 text-center gap-4">
        <h1 className="text-sm text-gray-400"> 11 : 30 AM</h1>
        <div className="text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <circle cx="12.5" cy="12.5" r="12.5" fill="#5390EB" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="20%"
              y="20%"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <path
                d="M12.5 1.25005H5C4.66848 1.25005 4.35054 1.38174 4.11612 1.61616C3.8817 1.85058 3.75 2.16853 3.75 2.50005V10C3.75 10.3316 3.8817 10.6495 4.11612 10.8839C4.35054 11.1183 4.66848 11.25 5 11.25H12.5C12.8315 11.25 13.1495 11.1183 13.3839 10.8839C13.6183 10.6495 13.75 10.3316 13.75 10V2.50005C13.75 2.16853 13.6183 1.85058 13.3839 1.61616C13.1495 1.38174 12.8315 1.25005 12.5 1.25005ZM8.75 2.81255C9.1644 2.81255 9.56183 2.97717 9.85485 3.27019C10.1479 3.56322 10.3125 3.96064 10.3125 4.37505C10.3125 4.78945 10.1479 5.18687 9.85485 5.4799C9.56183 5.77293 9.1644 5.93755 8.75 5.93755C8.3356 5.93755 7.93817 5.77293 7.64515 5.4799C7.35212 5.18687 7.1875 4.78945 7.1875 4.37505C7.1875 3.96064 7.35212 3.56322 7.64515 3.27019C7.93817 2.97717 8.3356 2.81255 8.75 2.81255ZM11.875 9.37505H5.625V9.2188C5.625 8.06317 7.03375 6.87505 8.75 6.87505C10.4662 6.87505 11.875 8.06317 11.875 9.2188V9.37505Z"
                fill="white"
              />
              <path
                d="M2.50017 5.00005H1.25017V12.5C1.25017 13.1894 1.81079 13.75 2.50017 13.75H10.0002V12.5H2.50017V5.00005Z"
                fill="white"
              />
            </svg>
          </svg>
        </div>
        <div>
          <h1 className="text-sm text-green-500">New task assigned to you </h1>
          <div className="flex gap-2 pt-2">
            <img src={img} className="img" alt="" />
            <p className="text-sm text-gray-400">Sheila O’Riley</p>
          </div>
        </div>
      </div>
      <div className="flex mt-7 md:mt-9 -ms-24 text-center gap-4">
        <h1 className="text-sm text-gray-400"> 11 : 30 AM</h1>
        <div className="text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <circle cx="12.5" cy="12.5" r="12.5" fill="#DC395F" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="20%"
              y="20%"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M9.5 1.5C9.23478 1.5 8.98043 1.60536 8.79289 1.79289C8.60536 1.98043 8.5 2.23478 8.5 2.5V4.5C8.5 4.76522 8.60536 5.01957 8.79289 5.20711C8.98043 5.39464 9.23478 5.5 9.5 5.5V7L11.3 5.5H13.5C13.7652 5.5 14.0196 5.39464 14.2071 5.20711C14.3946 5.01957 14.5 4.76522 14.5 4.5V2.5C14.5 2.23478 14.3946 1.98043 14.2071 1.79289C14.0196 1.60536 13.7652 1.5 13.5 1.5H9.5ZM5 4C4.46957 4 3.96086 4.21071 3.58579 4.58579C3.21071 4.96086 3 5.46957 3 6C3 6.53043 3.21071 7.03914 3.58579 7.41421C3.96086 7.78929 4.46957 8 5 8C5.53043 8 6.03914 7.78929 6.41421 7.41421C6.78929 7.03914 7 6.53043 7 6C7 5.46957 6.78929 4.96086 6.41421 4.58579C6.03914 4.21071 5.53043 4 5 4ZM7.5 9H2.5C2.10218 9 1.72064 9.15804 1.43934 9.43934C1.15804 9.72064 1 10.1022 1 10.5C1 11.616 1.459 12.51 2.212 13.115C2.953 13.71 3.947 14 5 14C6.053 14 7.047 13.71 7.788 13.115C8.54 12.51 9 11.616 9 10.5C9 10.1022 8.84196 9.72064 8.56066 9.43934C8.27936 9.15804 7.89782 9 7.5 9Z"
                fill="white"
              />
            </svg>
          </svg>
        </div>
        <div>
          <h1 className="text-xs md:text-sm ">
            New feedback recieved for Task Name{" "}
          </h1>
          <div className="flex gap-2 pt-2">
            <img src={img} className="img" alt="" />
            <p className="text-sm text-gray-400">Sheila O’Riley</p>
          </div>
        </div>
      </div>
      <div className="flex mt-7 md:mt-9 -ms-24 text-center gap-4">
        <h1 className="text-sm text-gray-400"> 11 : 30 AM</h1>
        <div className="text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <circle cx="12.5" cy="12.5" r="12.5" fill="#3FB883" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="20%"
              y="20%"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M2.66653 8L6.66653 12L13.3332 4"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </svg>
        </div>
        <div>
          <h1 className="text-sm ">Task marked completed by you </h1>
          <div className="flex gap-2 pt-2">
            <img src={img} className="img" alt="" />
            <p className="text-sm text-gray-400">Sheila O’Riley</p>
          </div>
        </div>
      </div>
      <div className="flex mt-7 md:mt-9 -ms-24  text-center gap-4 ">
        <h1 className="text-sm text-gray-400"> 11 : 30 AM</h1>
        <div className="text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <circle cx="12.5" cy="12.5" r="12.5" fill="#FB8789" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="20%"
              y="20%"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M14.6667 8.66667V10.6667C14.6667 11.4 14.0667 12 13.3333 12H11.3333L12 12.6667V14H3.99999V12.6667L4.66666 12H2.66666C1.93333 12 1.33333 11.4 1.33333 10.6667V3.33333C1.33333 2.6 1.93333 2 2.66666 2H8V3.33333H2.66666V10.6667H13.3333V8.66667H14.6667ZM10 10L6.66666 6.66667L7.60666 5.72667L9.33333 7.44667V2H10.6667V7.44667L12.3933 5.72667L13.3333 6.66667L10 10Z"
                fill="white"
              />
            </svg>
          </svg>
        </div>
        <div>
          <h1 className="text-xs md:text-sm ">
            Task Name updated for journey Journey Name{" "}
          </h1>
          <div className="flex gap-2 pt-2">
            <img src={img} className="img" alt="" />
            <p className="text-sm text-gray-400">Sheila O’Riley</p>
          </div>
        </div>
      </div>
      <div className="flex mt-7 md:mt-9 -ms-16 md:-ms-24 text-center gap-4">
        <h1 className="text-sm text-gray-400"> 11 : 30 AM</h1>
        <div className="text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <circle cx="12.5" cy="12.5" r="12.5" fill="#F2BB27" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="20%"
              y="20%"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M14 2C14.1768 2 14.3464 2.07024 14.4714 2.19526C14.5964 2.32029 14.6667 2.48986 14.6667 2.66667V12C14.6667 12.1768 14.5964 12.3464 14.4714 12.4714C14.3464 12.5964 14.1768 12.6667 14 12.6667H4.30333L1.33333 15V2.66667C1.33333 2.48986 1.40357 2.32029 1.52859 2.19526C1.65361 2.07024 1.82318 2 1.99999 2H14ZM13.3333 3.33333H2.66666V12.2567L3.842 11.3333H13.3333V3.33333ZM11.3333 4.66667V10H10V4.66667H11.3333ZM7.33333 5.33333V6.666L8.66666 6.66667V8L7.33333 7.99933V9.33333H6V7.99933L4.66666 8V6.66667L6 6.666V5.33333H7.33333Z"
                fill="white"
              />
            </svg>
          </svg>
        </div>
        <div>
          <h1 className="text-xs md:text-sm ">
            Follow up on feedback for Task Name completed on Date XX/YY/ZZZZ{" "}
          </h1>
          <div className="flex gap-2 pt-2">
            <img src={img} className="img" alt="" />
            <p className="text-sm text-gray-400">Sheila O’Riley</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WedTask;
