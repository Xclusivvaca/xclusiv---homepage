import React from "react";
import { Div } from "./sections/Div";
import { DivWrapper } from "./sections/DivWrapper";
import { Frame } from "./sections/Frame";
import { Frame1 } from "./sections/Frame1";
import { Frame2 } from "./sections/Frame2";
import { Frame3 } from "./sections/Frame3";
import { Frame4 } from "./sections/Frame4";
import { Frame5 } from "./sections/Frame5";
import { FrameWrapper } from "./sections/FrameWrapper";
import { SectionComponentNode } from "./sections/SectionComponentNode";

export const Homepage = () => {
  return (
    <div
      className="bg-[#f8f5f2] grid justify-items-center [align-items:start] w-screen"
      data-model-id="38:2"
    >
      <div className="bg-[#f8f5f2] overflow-hidden w-[1920px] h-[10298px] relative">
        <div className="absolute w-[1920px] h-[1169px] top-0 left-0">
          <img
            className="absolute w-[1920px] h-[1100px] top-[69px] left-0 object-cover"
            alt="Rectangle"
            src="https://c.animaapp.com/qr3W4Kh4/img/rectangle-9.png"
          />

          <Frame />
          <FrameWrapper />
        </div>

        <DivWrapper />
        <Div />
        <SectionComponentNode />
        <Frame1 />
        <Frame2 />
        <Frame3 />
        <Frame4 />
        <Frame5 />
      </div>
    </div>
  );
};
