import React from 'react';
import img from "../../assets/c96108ab2f0643c2353339ab6d0dbef5.png";

const ThusTask = () => {
    return (
        <div>
            <div className="flex -px-2 mt-14   -ms-12 gap-9">
          <div className="-mx-2 -mt-1">
            <h1 className="font-semibold"> Thu </h1>
            <p className="text-sm text-right text-gray-400">Jul</p>
          </div>
          <p className="-ms-5 date2 w-[38px] h-[38px] px-2 pt-2">29</p>
        </div>
        <div className="flex mt-12 -ms-24 text-center gap-4">
          <h1 className="text-sm text-gray-400"> 11 : 30 AM</h1>
          <div className="text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
            >
              <circle
                cx="12.5"
                cy="12.5"
                r="12.375"
                fill="white"
                stroke="#3FB883"
                stroke-width="0.25"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="23%"
                y="28%"
                width="15"
                height="10"
                viewBox="0 0 15 10"
                fill="none"
              >
                <g clip-path="url(#clip0_1_492)">
                  <path
                    d="M8.48537 4.9916L9.94769 6.34359L11.9142 7.35994L12.2563 5.00013L11.9142 2.69354L9.91001 3.58639L8.48537 4.9916Z"
                    fill="#00832D"
                  />
                  <path
                    d="M0 7.14021V9.15111C0 9.61026 0.460781 9.98306 1.02855 9.98306H3.51469L4.02949 8.46367L3.51469 7.14021L1.80902 6.72382L5.85938e-05 7.14021H0Z"
                    fill="#0066DA"
                  />
                  <path
                    d="M3.51469 0L0 2.84284L1.80914 3.25825L3.51469 2.84284L4.02012 1.53739L3.51469 0Z"
                    fill="#E94235"
                  />
                  <path
                    d="M0 7.14126H3.51469V2.84277H5.85938e-05L0 7.14126Z"
                    fill="#2684FC"
                  />
                  <path
                    d="M14.1597 1.20371L11.9144 2.69356V7.35991L14.1689 8.85555C14.5064 9.06939 15.0001 8.87451 15.0001 8.5275V1.52513C15.0001 1.17428 14.4946 0.980342 14.1596 1.20375"
                    fill="#00AC47"
                  />
                  <path
                    d="M8.4855 4.9917V7.14042H3.51453V9.98326H10.8859C11.4536 9.98326 11.9143 9.61046 11.9143 9.15132V7.36004L8.4855 4.9917Z"
                    fill="#00AC47"
                  />
                  <path
                    d="M10.8859 0H3.51453V2.84284H8.4855V4.99156L11.9144 2.69346V0.83199C11.9144 0.372749 11.4536 4.73934e-05 10.8859 4.73934e-05"
                    fill="#FFBA00"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_492">
                    <rect width="15" height="10" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </svg>
          </div>
          <div>
            <h1 className="text-sm ">Meeting with Bobby Charlie </h1>
            <div className="flex gap-2 pt-2">
              <img src={img} className="img" alt="" />
              <p className="text-sm text-gray-400">Sheila O’Riley</p>
            </div>
          </div>
        </div>
        <div className="flex mt-9 -ms-24 text-center gap-4">
          <h1 className="text-sm text-gray-400"> 11 : 30 AM</h1>
          <div className="text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
            >
              <circle cx="12.5" cy="12.5" r="12.5" fill="#A259FF" />
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
                  d="M13.9083 5.28749C13.6594 5.41426 13.3945 5.50677 13.1208 5.56249C13.2591 5.98637 13.3308 6.42914 13.3333 6.87499C13.3238 7.5146 13.1815 8.14526 12.9154 8.72697C12.6493 9.30868 12.2652 9.82873 11.7875 10.2542C11.7456 10.293 11.7122 10.3401 11.6892 10.3924C11.6663 10.4447 11.6543 10.5012 11.6542 10.5583V12.7833L9.82916 11.6208C9.77826 11.5886 9.72098 11.5679 9.66127 11.56C9.60157 11.5521 9.54086 11.5572 9.48333 11.575C8.84113 11.7744 8.17245 11.8756 7.5 11.875C4.28333 11.875 1.66666 9.63332 1.66666 6.87499C1.66666 4.11666 4.28333 1.87499 7.5 1.87499C8.14188 1.87491 8.78042 1.96753 9.39583 2.14999C9.42182 1.87336 9.48489 1.60148 9.58333 1.34166C8.90644 1.14422 8.20509 1.04323 7.5 1.04166C3.825 1.04166 0.833328 3.65832 0.833328 6.87499C0.833328 10.0917 3.825 12.7083 7.5 12.7083C8.18756 12.7075 8.87174 12.6122 9.53333 12.425L11.8375 13.8917C11.9004 13.932 11.973 13.9547 12.0477 13.9574C12.1224 13.96 12.1964 13.9425 12.262 13.9068C12.3276 13.871 12.3824 13.8182 12.4206 13.754C12.4588 13.6897 12.479 13.6164 12.4792 13.5417V10.7375C13.0005 10.2374 13.4165 9.63798 13.7028 8.97465C13.989 8.31131 14.1396 7.59742 14.1458 6.87499C14.1504 6.33664 14.0703 5.80093 13.9083 5.28749Z"
                  fill="white"
                />
                <path
                  d="M4.58334 6.45834C4.47283 6.45834 4.36685 6.50224 4.28871 6.58038C4.21057 6.65852 4.16667 6.7645 4.16667 6.87501C4.16667 6.98552 4.21057 7.0915 4.28871 7.16964C4.36685 7.24778 4.47283 7.29168 4.58334 7.29168H10.4167C10.5272 7.29168 10.6332 7.24778 10.7113 7.16964C10.7894 7.0915 10.8333 6.98552 10.8333 6.87501C10.8333 6.7645 10.7894 6.65852 10.7113 6.58038C10.6332 6.50224 10.5272 6.45834 10.4167 6.45834H4.58334Z"
                  fill="white"
                />
                <path
                  d="M5.93749 8.54166C5.82699 8.54166 5.72101 8.58555 5.64287 8.6637C5.56473 8.74184 5.52083 8.84782 5.52083 8.95832C5.52083 9.06883 5.56473 9.17481 5.64287 9.25295C5.72101 9.33109 5.82699 9.37499 5.93749 9.37499H9.06249C9.173 9.37499 9.27898 9.33109 9.35712 9.25295C9.43526 9.17481 9.47916 9.06883 9.47916 8.95832C9.47916 8.84782 9.43526 8.74184 9.35712 8.6637C9.27898 8.58555 9.173 8.54166 9.06249 8.54166H5.93749Z"
                  fill="white"
                />
                <path
                  d="M4.28374 4.79167C4.28374 4.90217 4.32764 5.00815 4.40578 5.08629C4.48392 5.16443 4.5899 5.20833 4.7004 5.20833H10.3004C10.3698 5.20708 10.4378 5.18851 10.4982 5.15431C10.5586 5.12011 10.6095 5.07136 10.6462 5.0125C10.4012 4.83242 10.1837 4.61767 10.0004 4.375H4.7004C4.5899 4.375 4.48392 4.4189 4.40578 4.49704C4.32764 4.57518 4.28374 4.68116 4.28374 4.79167Z"
                  fill="white"
                />
                <path
                  d="M12.5 4.58332C13.6506 4.58332 14.5833 3.65058 14.5833 2.49999C14.5833 1.3494 13.6506 0.416656 12.5 0.416656C11.3494 0.416656 10.4167 1.3494 10.4167 2.49999C10.4167 3.65058 11.3494 4.58332 12.5 4.58332Z"
                  fill="white"
                />
              </svg>
            </svg>
          </div>
          <div>
            <h1 className="text-sm ">Chat about Design Mentorship </h1>
            <div className="flex gap-2 pt-2">
              <img src={img} className="img" alt="" />
              <p className="text-sm text-gray-400">Sheila O’Riley</p>
            </div>
          </div>
        </div>
        <div className="flex mt-9 -ms-24 text-center gap-4">
          <h1 className="text-sm text-gray-400"> 11 : 30 AM</h1>
          <div className="text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
            >
              <circle cx="12.5" cy="12.5" r="12.5" fill="#E94235" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="25%"
                y="20%"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M4.283 2.98C4.24724 2.73367 4.2649 2.48253 4.33478 2.24363C4.40466 2.00473 4.52512 1.78367 4.688 1.59544C4.85087 1.40722 5.05233 1.25624 5.27871 1.15276C5.50509 1.04928 5.75109 0.995728 6 0.995728C6.24891 0.995728 6.4949 1.04928 6.72129 1.15276C6.94767 1.25624 7.14913 1.40722 7.312 1.59544C7.47488 1.78367 7.59534 2.00473 7.66522 2.24363C7.7351 2.48253 7.75276 2.73367 7.717 2.98L7.141 7.01C7.10113 7.28416 6.96388 7.53481 6.75436 7.71607C6.54483 7.89733 6.27705 7.99708 6 7.99708C5.72295 7.99708 5.45517 7.89733 5.24564 7.71607C5.03612 7.53481 4.89887 7.28416 4.859 7.01L4.283 2.98Z"
                  fill="white"
                />
                <path
                  d="M7 10C7 10.2652 6.89464 10.5196 6.70711 10.7071C6.51957 10.8946 6.26522 11 6 11C5.73478 11 5.48043 10.8946 5.29289 10.7071C5.10536 10.5196 5 10.2652 5 10C5 9.73478 5.10536 9.48043 5.29289 9.29289C5.48043 9.10536 5.73478 9 6 9C6.26522 9 6.51957 9.10536 6.70711 9.29289C6.89464 9.48043 7 9.73478 7 10Z"
                  fill="white"
                />
              </svg>
            </svg>
          </div>
          <div>
            <h1 className="text-sm ">
              Critical delay observed in time line adherence{" "}
            </h1>
            <div className="flex gap-2 pt-2">
              <img src={img} className="img" alt="" />
              <p className="text-sm text-gray-400">Sheila O’Riley</p>
            </div>
          </div>
        </div>
        <div className="flex mt-9 -ms-24 text-center gap-4">
          <h1 className="text-sm text-gray-400"> 11 : 30 AM</h1>
          <div className="text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
            >
              <circle cx="12.5" cy="12.5" r="12.5" fill="#F2DF37" />
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
                  d="M8.66666 4H7.33333V4.66667C7.33333 4.84348 7.40357 5.01305 7.52859 5.13807C7.65361 5.2631 7.82318 5.33333 7.99999 5.33333C8.17681 5.33333 8.34638 5.2631 8.4714 5.13807C8.59642 5.01305 8.66666 4.84348 8.66666 4.66667V4Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4 1.33334V2.66668H4.66667V4.66668C4.66667 5.55073 5.01786 6.39858 5.64298 7.0237C6.2681 7.64882 7.11595 8.00001 8 8.00001C7.11595 8.00001 6.2681 8.3512 5.64298 8.97632C5.01786 9.60144 4.66667 10.4493 4.66667 11.3333V13.3333H4V14.6667H12V13.3333H11.3333V11.3333C11.3333 10.4493 10.9821 9.60144 10.357 8.97632C9.7319 8.3512 8.88406 8.00001 8 8.00001C8.43774 8.00001 8.87119 7.91379 9.27561 7.74628C9.68003 7.57876 10.0475 7.33323 10.357 7.0237C10.6666 6.71417 10.9121 6.34671 11.0796 5.94229C11.2471 5.53787 11.3333 5.10442 11.3333 4.66668V2.66668H12V1.33334H4ZM6 2.66668H10V4.66668C10 5.19711 9.78929 5.70582 9.41421 6.08089C9.03914 6.45596 8.53043 6.66668 8 6.66668C7.46957 6.66668 6.96086 6.45596 6.58579 6.08089C6.21071 5.70582 6 5.19711 6 4.66668V2.66668ZM6 11.3333V13.3333H10V11.3333C10 10.8029 9.78929 10.2942 9.41421 9.91913C9.03914 9.54406 8.53043 9.33334 8 9.33334C7.46957 9.33334 6.96086 9.54406 6.58579 9.91913C6.21071 10.2942 6 10.8029 6 11.3333Z"
                  fill="white"
                />
              </svg>
            </svg>
          </div>
          <div>
            <h1 className="text-xs md:text-sm ">
            Finish project documentation for review (1-1 checkin)            </h1>
            <div className="flex gap-2 pt-2">
              <img src={img} className="img" alt="" />
              <p className="text-sm text-gray-400">Sheila O’Riley</p>
            </div>
          </div>
        </div>
        </div>
    );
};

export default ThusTask;