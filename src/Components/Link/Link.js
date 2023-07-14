import React from "react";
import style from "./_link.module.scss";

const Link = () => {
  console.log(" inside Link compoent ");
  return (
    <main className="p-4">
      <h5 className="text-red-500 mb-4 text-5xl">Link Default Component </h5>
      
        <sections> 
          <h5>Link Component default</h5>
          
          <div className="cluster" >
          <a href="#" className={`${style.link}`}>link Default</a>
          <a href="#" className={`${style.link} ${style.active}`}>link Active</a>
         
          
          </div>
        </sections>


        <sections> 
          <h5>Link Component sizes</h5>
         
          <div className="cluster" >
          
          <a href="#" className={`${style.link} ${style.xxs}`}>link xxs</a>
          <a href="#" className={`${style.link} ${style.xs}`}>link xs</a>
          <a href="#" className={`${style.link} ${style.sm}`}>link sm</a>
          <a href="#" className={`${style.link} ${style.md}`}>link md</a>
          <a href="#" className={`${style.link} ${style.lg}`}>link lg</a>
          <a href="#" className={`${style.link} ${style.xl}`}>link xl</a>
          <a href="#" className={`${style.link} ${style.xxl}`}>link xxl</a>
          
          </div>
        </sections>
        <hr />
        <sections className="mt-24"> 
          <h6>Link Action varients </h6>
          <div className="cluster" >
          <a href="#" className={`${style.link} ${style.action}`}>link Action</a>
          <a href="#" className={`${style.link} ${style.action} ${style.active}`}>link Active</a>
          </div>
        </sections>
        <hr />
        <sections className="mt-24"> 
          <h6>Link pill varients </h6>
          <div className="cluster" >
          <a href="#" className={`${style.link} ${style.pill}`}>pill item</a>
          <a href="#" className={`${style.link} ${style.pill} ${style.filter}`}>
          <svg
                    width="20"
                    height="16"
                    viewBox="0 0 22 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_129_915)">
                      <g
                        clip-path="url(#clip1_129_915)"
                        filter="url(#filter0_d_129_915)"
                      >
                        <g clip-path="url(#clip2_129_915)">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M2 2H24.8V2.925H2V2ZM2 3.8475H24.8V4.7725H2V3.8475ZM2 5.6925H24.8V6.6175H2V5.6925ZM2 7.5375H24.8V8.4625H2V7.5375ZM2 9.3875H24.8V10.3075H2V9.3875ZM2 11.23H24.8V12.155H2V11.23ZM2 13.075H24.8V14H2V13.075Z"
                            fill="#BD3D44"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M2 2.9248H24.8V3.8473H2V2.9248ZM2 4.7698H24.8V5.6923H2V4.7698ZM2 6.6148H24.8V7.5398H2V6.6148ZM2 8.4623H24.8V9.3873H2V8.4623ZM2 10.3073H24.8V11.2323H2V10.3073ZM2 12.1523H24.8V13.0773H2V12.1523Z"
                            fill="white"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M2 2H11.12V8.4625H2V2Z"
                            fill="#192F5D"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M2.75875 2.27441L2.84375 2.53191H3.10875L2.89375 2.68941L2.97625 2.94691L2.75875 2.78691L2.54375 2.94441L2.62375 2.68941L2.40625 2.53191H2.67875L2.75875 2.27441ZM4.27875 2.27441L4.36125 2.53191H4.63125L4.41375 2.68941L4.49375 2.94691L4.27875 2.78691L4.06125 2.94441L4.14375 2.68941L3.92875 2.53191H4.19375L4.27875 2.27441ZM5.79875 2.27441L5.88125 2.53191H6.14875L5.93375 2.68941L6.01625 2.94691L5.79875 2.78691L5.58125 2.94441L5.66375 2.68941L5.44625 2.53191H5.71625L5.79875 2.27441ZM7.31875 2.27441L7.40125 2.53191H7.67125L7.45375 2.68941L7.53625 2.94691L7.31875 2.78691L7.10125 2.94441L7.18625 2.68941L6.96625 2.53191H7.23375L7.31875 2.27441ZM8.83875 2.27441L8.92125 2.53191H9.18875L8.97375 2.68941L9.05625 2.94691L8.83875 2.78691L8.62125 2.94441L8.70375 2.68941L8.48875 2.53191H8.75625L8.83875 2.27441ZM10.3588 2.27441L10.4413 2.53191H10.7113L10.4913 2.68941L10.5763 2.94691L10.3588 2.78691L10.1413 2.94441L10.2263 2.68941L10.0063 2.53191H10.2763L10.3588 2.27441ZM3.51875 2.92441L3.60125 3.17941H3.87375L3.65625 3.33441L3.73625 3.59191L3.52375 3.43441L3.30625 3.59191L3.38375 3.33441L3.17375 3.17941H3.44125L3.51875 2.92441ZM5.03875 2.92441L5.12375 3.17941H5.39125L5.17125 3.33441L5.25625 3.59191L5.03875 3.43441L4.82125 3.59191L4.90375 3.33441L4.68625 3.17941H4.95625L5.03875 2.92441ZM6.55875 2.92441L6.64125 3.17941H6.91125L6.69375 3.33441L6.77625 3.59191L6.55875 3.43441L6.34125 3.59191L6.42375 3.33441L6.20875 3.17941H6.47375L6.55875 2.92441ZM8.07875 2.92441L8.16375 3.17941H8.43125L8.21125 3.33441L8.29625 3.59191L8.07875 3.43441L7.86375 3.59191L7.94375 3.33441L7.72625 3.17941H7.99875L8.07875 2.92441ZM9.59875 2.92441L9.68125 3.17941H9.95125L9.73375 3.33441L9.81625 3.59191L9.59875 3.43441L9.38125 3.59191L9.46375 3.33441L9.24875 3.17941H9.51625L9.59875 2.92441ZM2.75875 3.56441L2.84375 3.82441H3.10875L2.89375 3.98191L2.97625 4.23691L2.75875 4.07941L2.54375 4.23691L2.62375 3.98191L2.40625 3.82441H2.67875L2.75875 3.56441ZM4.27875 3.56441L4.36125 3.82441H4.63125L4.41375 3.98191L4.49375 4.23691L4.27875 4.07941L4.06125 4.23691L4.14375 3.97941L3.92875 3.82191H4.19375L4.27875 3.56441ZM5.79875 3.56441L5.88125 3.82191H6.14875L5.93375 3.97941L6.01625 4.23441L5.79875 4.07691L5.58125 4.23441L5.66375 3.97691L5.44625 3.81941H5.71625L5.79875 3.56441ZM7.31875 3.56441L7.40125 3.82191H7.67125L7.45375 3.97941L7.53625 4.23441L7.31875 4.07691L7.10125 4.23441L7.18625 3.97691L6.96625 3.81941H7.23375L7.31875 3.56441ZM8.83875 3.56441L8.92125 3.82191H9.18875L8.97375 3.97941L9.05625 4.23441L8.83875 4.07691L8.62125 4.23441L8.70375 3.97691L8.48875 3.81941H8.75625L8.83875 3.56441ZM10.3588 3.56441L10.4413 3.82191H10.7113L10.4913 3.97941L10.5763 4.23441L10.3588 4.07691L10.1413 4.23441L10.2263 3.97691L10.0063 3.81941H10.2763L10.3588 3.56441ZM3.51875 4.21441L3.60125 4.46941H3.87375L3.65625 4.62691L3.73875 4.88441L3.52125 4.72441L3.30375 4.88191L3.38625 4.62691L3.17125 4.46941H3.43875L3.51875 4.21441ZM5.03875 4.21441L5.12375 4.46941H5.39125L5.17125 4.62691L5.25625 4.88441L5.03875 4.72441L4.82125 4.88191L4.90375 4.62691L4.68625 4.46941H4.95625L5.03875 4.21441ZM6.55875 4.21441L6.64125 4.46941H6.91125L6.69375 4.62691L6.77625 4.88441L6.55875 4.72441L6.34125 4.88191L6.42375 4.62691L6.20875 4.46941H6.47375L6.55875 4.21441ZM8.07875 4.21441L8.16375 4.46941H8.43125L8.21375 4.62691L8.29625 4.88441L8.07875 4.72441L7.86375 4.88191L7.94375 4.62691L7.72625 4.46941H7.99875L8.07875 4.21441ZM9.59875 4.21441L9.68125 4.46941H9.95125L9.73375 4.62691L9.81625 4.88441L9.59875 4.72441L9.38125 4.88191L9.46375 4.62691L9.24875 4.46941H9.51625L9.59875 4.21441ZM2.75875 4.86191L2.84375 5.11691H3.10875L2.89375 5.27441L2.97625 5.53191L2.75875 5.37191L2.54375 5.52941L2.62375 5.27441L2.40625 5.11691H2.67875L2.75875 4.86191ZM4.27875 4.86191L4.36125 5.11691H4.63125L4.41375 5.27441L4.49375 5.52941L4.27875 5.37191L4.06125 5.52941L4.14375 5.27441L3.92875 5.11691H4.19375L4.27875 4.86191ZM5.79875 4.86191L5.88125 5.11691H6.14875L5.93375 5.27441L6.01625 5.53191L5.79875 5.37191L5.58125 5.52941L5.66375 5.27441L5.44625 5.11691H5.71625L5.79875 4.86191ZM7.31875 4.86191L7.40125 5.11691H7.67125L7.45375 5.27441L7.53625 5.53191L7.31875 5.37191L7.10125 5.52941L7.18625 5.27441L6.96625 5.11691H7.23375L7.31875 4.86191ZM8.83875 4.86191L8.92125 5.11691H9.18875L8.97375 5.27441L9.05625 5.53191L8.83875 5.37191L8.62125 5.52941L8.70375 5.27441L8.48875 5.11691H8.75625L8.83875 4.86191ZM10.3588 4.86191L10.4413 5.11691H10.7113L10.4913 5.27441L10.5763 5.53191L10.3588 5.37191L10.1413 5.52941L10.2238 5.27441L10.0038 5.11691H10.2738L10.3588 4.86191ZM3.51875 5.50691L3.60125 5.76441H3.87375L3.65625 5.91941L3.73875 6.17691L3.52125 6.01691L3.30375 6.17691L3.38625 5.91941L3.17125 5.76191H3.43875L3.51875 5.50691ZM5.03875 5.50691L5.12375 5.76441H5.39125L5.17125 5.91941L5.25625 6.17691L5.03875 6.01691L4.82125 6.17691L4.90375 5.91941L4.68625 5.76191H4.95625L5.03875 5.50691ZM6.55875 5.50691L6.64125 5.76441H6.91125L6.69375 5.91941L6.77625 6.17691L6.55875 6.01691L6.34125 6.17691L6.42375 5.91941L6.20875 5.76191H6.47375L6.55875 5.50691ZM8.07875 5.50691L8.16375 5.76441H8.43125L8.21375 5.91941L8.29625 6.17691L8.07875 6.01691L7.86375 6.17691L7.94375 5.91941L7.72625 5.76191H7.99875L8.07875 5.50691ZM9.59875 5.50691L9.68125 5.76441H9.95125L9.73375 5.91941L9.81625 6.17691L9.59875 6.01691L9.38125 6.17691L9.46375 5.91941L9.24875 5.76191H9.51625L9.59875 5.50691ZM2.75875 6.15191L2.84375 6.40941H3.10875L2.89375 6.56691L2.97625 6.81941L2.75875 6.66441L2.54375 6.81941L2.62375 6.56441L2.40625 6.40691H2.67875L2.75875 6.15191ZM4.27875 6.15191L4.36125 6.40941H4.63125L4.41375 6.56691L4.49625 6.81941L4.27875 6.66441L4.06125 6.81941L4.14625 6.56441L3.92875 6.40691H4.19375L4.27875 6.15191ZM5.79875 6.15191L5.88125 6.40941H6.14875L5.93375 6.56691L6.01625 6.81941L5.79875 6.66441L5.58125 6.81941L5.66375 6.56441L5.44625 6.40691H5.71625L5.79875 6.15191ZM7.31875 6.15191L7.40125 6.40941H7.67125L7.45375 6.56691L7.53625 6.81941L7.31875 6.66441L7.10125 6.81941L7.18625 6.56441L6.96625 6.40691H7.23375L7.31875 6.15191ZM8.83875 6.15191L8.92125 6.40941H9.18875L8.97375 6.56691L9.05625 6.81941L8.83875 6.66441L8.62125 6.81941L8.70375 6.56441L8.48875 6.40691H8.75625L8.83875 6.15191ZM10.3588 6.15191L10.4413 6.40941H10.7113L10.4913 6.56691L10.5763 6.81941L10.3588 6.66441L10.1413 6.81941L10.2263 6.56441L10.0063 6.40691H10.2763L10.3588 6.15191ZM3.51875 6.79941L3.60125 7.05441H3.87375L3.65625 7.21191L3.73875 7.46941L3.52125 7.30941L3.30375 7.46691L3.38625 7.21191L3.17125 7.05441H3.43875L3.51875 6.79941ZM5.03875 6.79941L5.12375 7.05441H5.39125L5.17125 7.21191L5.25625 7.46941L5.03875 7.30941L4.82125 7.46691L4.90375 7.21191L4.68625 7.05441H4.95625L5.03875 6.79941ZM6.55875 6.79941L6.64125 7.05441H6.91125L6.69375 7.21191L6.77625 7.46941L6.55875 7.30941L6.34125 7.46691L6.42375 7.21191L6.20875 7.05441H6.47375L6.55875 6.79941ZM8.07875 6.79941L8.16375 7.05441H8.43125L8.21375 7.21191L8.29625 7.46941L8.07875 7.30941L7.86375 7.46691L7.94375 7.21191L7.72625 7.05441H7.99875L8.07875 6.79941ZM9.59875 6.79941L9.68125 7.05441H9.95125L9.73375 7.21191L9.81625 7.46941L9.59875 7.30941L9.38125 7.46691L9.46375 7.21191L9.24875 7.05441H9.51625L9.59875 6.79941ZM2.75875 7.44691L2.84375 7.70191H3.10875L2.89375 7.85941L2.97625 8.11441L2.75875 7.95691L2.54375 8.11441L2.62375 7.85691L2.40625 7.69941H2.67875L2.75875 7.44691ZM4.27875 7.44691L4.36125 7.70191H4.63125L4.41375 7.85941L4.49625 8.11441L4.27875 7.95691L4.06125 8.11441L4.14625 7.85691L3.92875 7.69941H4.19375L4.27875 7.44691ZM5.79875 7.44691L5.88125 7.70191H6.14875L5.93875 7.85941L6.02125 8.11441L5.80375 7.95691L5.58625 8.11441L5.66875 7.85691L5.45125 7.69941H5.72125L5.79875 7.44691ZM7.31875 7.44691L7.40125 7.70191H7.67125L7.45375 7.85941L7.53625 8.11441L7.31875 7.95691L7.10125 8.11441L7.18625 7.85691L6.96625 7.69941H7.23375L7.31875 7.44691ZM8.83875 7.44691L8.92125 7.70191H9.18875L8.97375 7.85941L9.05625 8.11441L8.83875 7.95691L8.62125 8.11441L8.70375 7.85691L8.48875 7.69941H8.75625L8.83875 7.44691ZM10.3588 7.44691L10.4413 7.70191H10.7113L10.4913 7.85941L10.5763 8.11441L10.3588 7.95691L10.1413 8.11441L10.2263 7.85691L10.0063 7.69941H10.2763L10.3588 7.44691Z"
                            fill="white"
                          />
                        </g>
                      </g>
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_129_915"
                        x="0.615385"
                        y="1.30769"
                        width="20.7692"
                        height="14.7692"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="0.692308" />
                        <feGaussianBlur stdDeviation="0.692308" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.24 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_129_915"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_129_915"
                          result="shape"
                        />
                      </filter>
                      <clipPath id="clip0_129_915">
                        <rect width="20" height="16" fill="white" />
                      </clipPath>
                      <clipPath id="clip1_129_915">
                        <rect
                          width="18"
                          height="12"
                          fill="white"
                          transform="translate(2 2)"
                        />
                      </clipPath>
                      <clipPath id="clip2_129_915">
                        <rect
                          width="18"
                          height="12"
                          fill="white"
                          transform="translate(2 2)"
                        />
                      </clipPath>
                    </defs>
                  </svg> <span>link pill default</span></a>
          <a href="#" className={`${style.link} ${style.pill} ${style.filter}`}>link pill Filter</a>
          <a href="#" className={`${style.link} ${style.pill} ${style.active}`}>link pill filter active</a>
          </div>
        </sections>

      
      {/* Filter varients */}
      <hr />
        <sections className="mt-24"> 
        <h5 className="mb-4">Label with Filters</h5>
          <div className="cluster" >
          <a href="#" className={`${style.label} ${style.filter}`}>Label Filter</a>
          <a href="#" className={`${style.label} ${style.filter} ${style.alpha}`}>Label Alpha Transparent</a>
          </div>
        </sections>
        <hr />
      
     
    </main>
  );
};

export default Link;
