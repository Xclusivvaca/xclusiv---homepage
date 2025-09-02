import React from "react";

export const DivWrapper = () => {
  return (
    <div className="inline-flex flex-col items-center gap-20 absolute top-[1319px] left-[137px]">
      <div className="flex flex-col items-center gap-10 relative self-stretch w-full flex-[0_0_auto]">
        <div className="relative self-stretch mt-[-0.17px] rotate-[-0.06deg] [font-family:'Maison_Neue-Book',Helvetica] font-normal text-[#1c1c1c] text-[80px] text-center tracking-[0] leading-[110px]">
          Making Luxury Feel Personal
        </div>

        <div className="relative w-[95px] h-[5px] bg-[#c9b037] rounded-md" />
      </div>

      <p className="relative w-[1647px] [font-family:'Maison_Neue-Regular',Helvetica] font-normal text-transparent text-[34px] text-center tracking-[0] leading-[60px]">
        <span className="text-[#1c1c1c]">At </span>

        <span className="[font-family:'Maison_Neue-Bold',Helvetica] font-bold text-[#c9b037]">
          XCLUSIV Vacations
        </span>

        <span className="text-[#1c1c1c]">
          , we believe luxury is not just about elegant spaces, but about
          creating meaningful, personalized experiences. Whether it’s a family
          getaway, a corporate retreat, or a long-awaited solo escape, our team
          ensures every stay is effortless, memorable, and uniquely yours.
          <br />
          <br />
          From our established presence in Cabo San Lucas to our growing
          portfolio in Dallas, we bring you handpicked properties, unmatched
          hospitality, and the peace of mind that comes with expert care.
        </span>
      </p>

      <div className="inline-flex items-center justify-center gap-2.5 p-[30px] relative flex-[0_0_auto] bg-[#c9b037] rounded-[50px] rotate-180">
        <div className="relative w-fit mt-[-1.00px] rotate-180 [font-family:'Open_Sans',Helvetica] font-semibold text-white text-[22px] tracking-[0] leading-[normal] whitespace-nowrap">
          Explore the XCLUSIV Experience
        </div>
      </div>
    </div>
  );
};
