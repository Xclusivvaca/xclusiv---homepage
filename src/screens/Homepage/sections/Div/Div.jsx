import React from "react";

export const Div = () => {
  return (
    <div className="flex flex-col w-[1820px] items-center gap-20 absolute top-[4825px] left-[50px]">
      <div className="flex flex-col items-center gap-10 relative self-stretch w-full flex-[0_0_auto]">
        <p className="relative w-fit mt-[-0.55px] rotate-[-0.06deg] [font-family:'Maison_Neue-Book',Helvetica] font-normal text-[#1c1c1c] text-[80px] text-center tracking-[0] leading-[110px] whitespace-nowrap">
          {" "}
          Serving a world of luxury
        </p>

        <div className="relative w-[95px] h-[5px] bg-[#c9b037] rounded-md" />
      </div>

      <div className="flex items-center gap-5 relative self-stretch w-full flex-[0_0_auto]">
        <div className="bg-[url(https://c.animaapp.com/qr3W4Kh4/img/rectangle-12.png)] relative w-[900px] h-[900.0px] bg-cover bg-[50%_50%]">
          <div className="relative h-[487px] top-[413px] rounded-[40px] bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_100%)]">
            <div className="inline-flex flex-col items-start gap-[50px] relative top-[248px] left-10">
              <p className="relative self-stretch mt-[-0.61px] rotate-[-0.06deg] [font-family:'Maison_Neue-Book',Helvetica] font-normal text-white text-[50px] tracking-[0] leading-[110px]">
                Cabo San Lucas — Established:
              </p>

              <p className="relative w-[781px] [font-family:'Maison_Neue-Book',Helvetica] font-normal text-white text-[28px] tracking-[0] leading-[46px]">
                White-sand beaches, world-class resorts, and exclusive villas
                with ocean views. Our Cabo team has spent years building a
                trusted network of premium properties and local experiences.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[url(https://c.animaapp.com/qr3W4Kh4/img/rectangle-12-1.png)] relative w-[900px] h-[900.0px] bg-cover bg-[50%_50%]">
          <div className="relative h-[487px] top-[413px] rounded-[40px] bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_100%)]">
            <div className="inline-flex flex-col items-start gap-[50px] relative top-[249px] left-10">
              <div className="relative self-stretch mt-[-0.61px] rotate-[-0.06deg] [font-family:'Maison_Neue-Book',Helvetica] font-normal text-white text-[50px] tracking-[0] leading-[110px]">
                Dallas — Expanding:
              </div>

              <p className="relative w-[781px] [font-family:'Maison_Neue-Book',Helvetica] font-normal text-white text-[28px] tracking-[0] leading-[46px]">
                A vibrant city where business meets sophistication. Our Dallas
                listings include skyline penthouses, luxury townhomes, and
                premium event-ready spaces.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="inline-flex items-center justify-center gap-2.5 p-[30px] relative flex-[0_0_auto] bg-[#c9b037] rounded-[50px] rotate-180">
        <div className="relative w-fit mt-[-1.00px] rotate-180 [font-family:'Open_Sans',Helvetica] font-semibold text-white text-[22px] tracking-[0] leading-[normal] whitespace-nowrap">
          Explore the XCLUSIV Experience
        </div>
      </div>
    </div>
  );
};
