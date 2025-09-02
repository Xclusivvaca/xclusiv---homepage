import React from "react";

export const Frame = () => {
  return (
    <div className="flex flex-col w-[1920px] items-start absolute top-0 left-0">
      <div className="flex items-center justify-between px-[50px] py-[15px] relative self-stretch w-full flex-[0_0_auto] bg-[#1c1c1c]">
        <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
          <img
            className="relative w-5 h-5"
            alt="Mask group"
            src="https://c.animaapp.com/qr3W4Kh4/img/mask-group@2x.png"
          />

          <div className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
            +1 (555) 123-XCLUSIV
          </div>
        </div>

        <img
          className="relative flex-[0_0_auto]"
          alt="Frame"
          src="https://c.animaapp.com/qr3W4Kh4/img/frame-51.svg"
        />
      </div>

      <div className="flex items-center justify-between px-[50px] py-5 relative self-stretch w-full flex-[0_0_auto] bg-[#ffffff1a] border-b-[0.5px] [border-bottom-style:solid] border-white backdrop-blur-[7.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(7.5px)_brightness(100%)]">
        <div className="w-fit [font-family:'Maison_Neue-Book',Helvetica] text-white text-[50px] whitespace-nowrap relative font-normal tracking-[0] leading-[normal]">
          XCLUSIV
        </div>

        <div className="inline-flex items-center gap-[58px] relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-semibold text-white text-xl tracking-[0] leading-[normal] whitespace-nowrap">
            Home
          </div>

          <div className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-normal text-white text-xl tracking-[0] leading-[normal] whitespace-nowrap">
            Properties
          </div>

          <div className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-normal text-white text-xl tracking-[0] leading-[normal] whitespace-nowrap">
            Retreats
          </div>

          <div className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-normal text-white text-xl tracking-[0] leading-[normal] whitespace-nowrap">
            List Property
          </div>

          <div className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-normal text-white text-xl tracking-[0] leading-[normal] whitespace-nowrap">
            About
          </div>

          <div className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-normal text-white text-xl tracking-[0] leading-[normal] whitespace-nowrap">
            All Properties
          </div>

          <div className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-normal text-white text-xl tracking-[0] leading-[normal] whitespace-nowrap">
            App
          </div>

          <div className="relative w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-normal text-white text-xl tracking-[0] leading-[normal] whitespace-nowrap">
            Management
          </div>
        </div>

        <div className="inline-flex items-center justify-center gap-[15px] px-[35px] py-[22px] relative flex-[0_0_auto] bg-white rounded-[50px]">
          <div className="w-fit mt-[-1.00px] text-black text-lg leading-[normal] whitespace-nowrap relative [font-family:'Open_Sans',Helvetica] font-normal tracking-[0]">
            Contact
          </div>
        </div>
      </div>
    </div>
  );
};
