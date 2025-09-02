import React from "react";

export const FrameWrapper = () => {
  return (
    <div className="inline-flex flex-col items-center gap-[60px] absolute top-[360px] left-[204px]">
      <div className="inline-flex flex-col items-center justify-center gap-[50px] relative flex-[0_0_auto]">
        <p className="relative w-[1222px] mt-[-1.00px] [font-family:'Maison_Neue-Book',Helvetica] font-normal text-white text-[110px] text-center tracking-[0] leading-[130px]">
          Your Luxury Property Partner in Cabo
        </p>

        <p className="relative w-[1136px] [font-family:'Open_Sans',Helvetica] font-normal text-white text-2xl text-center tracking-[0] leading-[43px]">
          Discover, invest, and experience the finest properties in two of the
          most sought-after markets.
        </p>
      </div>

      <img
        className="relative w-[1512px] flex-[0_0_auto]"
        alt="Frame"
        src="https://c.animaapp.com/qr3W4Kh4/img/frame-3.svg"
      />
    </div>
  );
};
