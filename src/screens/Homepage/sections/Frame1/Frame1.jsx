import React from "react";

export const Frame1 = () => {
  return (
    <div className="flex w-[1820px] items-center absolute top-[6214px] left-[50px]">
      <img
        className="w-[1360px] h-[747px] relative object-cover"
        alt="Rectangle"
        src="https://c.animaapp.com/qr3W4Kh4/img/rectangle-12-2.png"
      />

      <div className="flex flex-col w-[940px] items-start justify-center gap-10 px-10 py-[60px] relative ml-[-480px] bg-[#f7e7ce] rounded-[20px]">
        <div className="relative w-[763px] mt-[-1.00px] [font-family:'Maison_Neue-Book',Helvetica] font-normal text-[#1c1c1c] text-[80px] tracking-[0] leading-[110px]">
          Proudly Serving Cabo
        </div>

        <div className="relative w-[95px] h-[5px] bg-[#1c1c1c] rounded-md" />

        <p className="self-stretch font-semibold text-[#1c1c1c] text-2xl leading-[50px] relative [font-family:'Open_Sans',Helvetica] tracking-[0]">
          XCLUSIV Vacations is deeply rooted in both markets, offering local
          expertise to match guests with the perfect property. Our team in Cabo
          brings insider access to stunning oceanfront estates, while our Dallas
          specialists offer luxury stays in the city’s most prestigious
          neighborhoods.
        </p>
      </div>
    </div>
  );
};
