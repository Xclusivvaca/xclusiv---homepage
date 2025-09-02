import React from "react";

export const Frame2 = () => {
  return (
    <div className="inline-flex items-center gap-[65px] absolute top-[7111px] left-[50px]">
      <div className="flex flex-col w-[900px] items-start gap-[70px] relative">
        <div className="flex flex-col items-start gap-[60px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-10 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative self-stretch mt-[-0.55px] rotate-[-0.06deg] [font-family:'Maison_Neue-Book',Helvetica] font-normal text-[#1c1c1c] text-[80px] tracking-[0] leading-[110px]">
              Who We Serve
            </div>

            <div className="relative w-[95px] h-[5px] bg-[#c9b037] rounded-md" />
          </div>

          <p className="relative w-[899px] [font-family:'Maison_Neue-Book',Helvetica] font-normal text-[#1c1c1c] text-[28px] tracking-[0] leading-[50px]">
            At XCLUSIV Vacations, we curate unforgettable experiences for
            discerning travelers from around the world. Our guests include
            couples seeking romantic escapes, families creating lifelong
            memories, and solo adventurers indulging in personal luxury. We also
            cater to corporate groups in need of inspiring retreat spaces, event
            planners searching for extraordinary venues, and property owners who
            value impeccable management for their high-end homes.
            <br />
            <br />
            Whether you’re here to relax, celebrate, collaborate, or invest, we
            tailor every detail to match your vision of perfection.
          </p>

          <div className="inline-flex items-center justify-center gap-2.5 p-[30px] relative flex-[0_0_auto] bg-[#c9b037] rounded-[50px] rotate-180">
            <div className="relative w-fit mt-[-1.00px] rotate-180 [font-family:'Open_Sans',Helvetica] font-semibold text-white text-[22px] tracking-[0] leading-[normal] whitespace-nowrap">
              Explore the XCLUSIV Experience
            </div>
          </div>
        </div>
      </div>

      <img
        className="relative w-[836px] h-[861px] object-cover"
        alt="Rectangle"
        src="https://c.animaapp.com/qr3W4Kh4/img/rectangle-13.png"
      />
    </div>
  );
};
