import svgPaths from "./svg-iws2364w5v";
import imgImageFoundationStrength from "/src/assets/e481eca9d825bdd1421bee8ad8df63cf5ab89184.png";
import imgImageMorningFlow from "/src/assets/69e5e9878a39242f4ef32205939520368bb3b510.png";
import imgImageCoreBalanceLab from "/src/assets/e44b5e1aaed2b68f2df2152e32615e194378ea3c.png";
import imgImageFlexibilityFocus from "/src/assets/56237f42cd21d6668d04e28d7f0f213ab13571ae.png";
import imgImageAdvancedArmBalances from "/src/assets/a1d4a8a9b64a441e66b62cbb43fea9cdad2231e0.png";
import imgImageHandstandJourney from "/src/assets/b72dc3d30534239cff49c210a37c708880babcce.png";

function Text() {
  return (
    <div className="h-[24px] relative shrink-0 w-[33.328px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#0a0a0a] text-[16px] top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">3:24</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[12px] relative shrink-0 w-[18px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 12">
        <g id="Icon">
          <path d={svgPaths.p9872200} fill="var(--fill-0, #0A0A0A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="flex-[1_0_0] h-[12px] min-h-px min-w-px relative" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[0_8.33%_0_0]" data-name="Vector">
          <div className="absolute inset-[-4.17%_-2.27%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 13">
              <path d={svgPaths.pfa96400} id="Vector" stroke="var(--stroke-0, #0A0A0A)" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[33.33%_0_33.33%_95.83%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 4">
            <path d={svgPaths.p185beb00} fill="var(--fill-0, #0A0A0A)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[12px] relative shrink-0 w-[50px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Icon />
        <Icon1 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-center justify-between left-0 px-[24px] top-0 w-[1101px]" data-name="Container">
      <Text />
      <Container1 />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[40px] left-[24px] top-[68px] w-[1053px]" data-name="Heading 1">
      <p className="absolute bg-clip-text font-['Inter:Black',sans-serif] font-black leading-[40px] left-0 not-italic text-[36px] text-[transparent] top-[0.5px] tracking-[0.3691px] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, rgb(152, 16, 250) 0%, rgb(194, 122, 255) 100%)" }}>
        Explore
      </p>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-[24px] not-italic text-[#9810fa] text-[12px] top-px tracking-[0.6px] uppercase whitespace-nowrap">BEGINNER</p>
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute h-[60px] left-0 top-0 w-[133.188px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Black',sans-serif] font-black leading-[30px] left-0 not-italic text-[24px] text-white top-0 tracking-[0.0703px] w-[134px]">Foundation Strength</p>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] h-[32px] left-0 rounded-[16777200px] top-[76px] w-[117.828px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-[59.5px] not-italic text-[12px] text-center text-white top-[9px] tracking-[0.3px] uppercase whitespace-nowrap">View Steps</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[108px] relative shrink-0 w-[133.188px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Heading2 />
        <Button />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col h-[160px] items-start justify-between left-0 pb-[28px] pl-[24px] pt-[24px] top-0 w-[181.188px]" data-name="Container" style={{ backgroundImage: "linear-gradient(138.553deg, rgb(152, 16, 250) 0%, rgb(173, 70, 255) 100%)" }}>
      <Container7 />
    </div>
  );
}

function ImageFoundationStrength() {
  return (
    <div className="absolute h-[160px] left-0 top-0 w-[138.813px]" data-name="Image (Foundation Strength)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageFoundationStrength} />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M6 3L20 12L6 21V3Z" fill="var(--fill-0, #9810FA)" id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-white relative rounded-[16777200px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] shrink-0 size-[56px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[18px] pr-[14px] relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex h-[160px] items-center justify-center left-0 px-[41.406px] top-0 w-[138.813px]" data-name="Container">
      <Container10 />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute bg-white h-[160px] left-[181.19px] top-0 w-[138.813px]" data-name="Container">
      <ImageFoundationStrength />
      <Container9 />
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[160px] relative rounded-[24px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-[320px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Container6 />
        <Container8 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Black',sans-serif] font-black leading-[30px] left-0 not-italic text-[24px] text-white top-0 tracking-[0.0703px] w-[98px]">Morning Flow</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] h-[48px] relative rounded-[16777200px] shrink-0 w-full" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-[56.41px] not-italic text-[12px] text-center text-white top-[9px] tracking-[0.3px] uppercase w-[42px]">View Steps</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[124px] relative shrink-0 w-[112px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <Heading3 />
        <Button1 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-between left-0 pb-[12px] pl-[24px] pt-[24px] size-[160px] top-0" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(173, 70, 255) 0%, rgb(152, 16, 250) 100%)" }}>
      <Container13 />
    </div>
  );
}

function ImageMorningFlow() {
  return (
    <div className="absolute left-0 size-[160px] top-0" data-name="Image (Morning Flow)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageMorningFlow} />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M6 3L20 12L6 21V3Z" fill="var(--fill-0, #9810FA)" id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-white relative rounded-[16777200px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] shrink-0 size-[56px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[18px] pr-[14px] relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 px-[52px] size-[160px] top-0" data-name="Container">
      <Container16 />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute bg-white left-[160px] size-[160px] top-0" data-name="Container">
      <ImageMorningFlow />
      <Container15 />
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[160px] relative rounded-[24px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-[320px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Container12 />
        <Container14 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[168px] relative shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-start pl-[24px] relative size-full">
          <Container5 />
          <Container11 />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[200px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Container4 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-[24px] not-italic text-[#9810fa] text-[12px] top-px tracking-[0.6px] uppercase whitespace-nowrap">INTERMEDIATE</p>
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[90px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Black',sans-serif] font-black leading-[30px] left-0 not-italic text-[24px] text-white top-0 tracking-[0.0703px] w-[95px]">{`Core & Balance Lab`}</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] h-[48px] relative rounded-[16777200px] shrink-0 w-full" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-[56.41px] not-italic text-[12px] text-center text-white top-[9px] tracking-[0.3px] uppercase w-[42px]">View Steps</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[154px] relative shrink-0 w-[112px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <Heading5 />
        <Button2 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-between left-0 pb-[-18px] pl-[24px] pt-[24px] size-[160px] top-0" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 105, 0) 0%, rgb(255, 137, 4) 100%)" }}>
      <Container21 />
    </div>
  );
}

function ImageCoreBalanceLab() {
  return (
    <div className="absolute left-0 size-[160px] top-0" data-name="Image (Core & Balance Lab)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageCoreBalanceLab} />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M6 3L20 12L6 21V3Z" fill="var(--fill-0, #9810FA)" id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container24() {
  return (
    <div className="bg-white relative rounded-[16777200px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] shrink-0 size-[56px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[18px] pr-[14px] relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 px-[52px] size-[160px] top-0" data-name="Container">
      <Container24 />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute bg-white left-[160px] size-[160px] top-0" data-name="Container">
      <ImageCoreBalanceLab />
      <Container23 />
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[160px] relative rounded-[24px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-[320px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Container20 />
        <Container22 />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Black',sans-serif] font-black leading-[30px] left-0 not-italic text-[24px] text-white top-0 tracking-[0.0703px] w-[115px]">Flexibility Focus</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] h-[48px] relative rounded-[16777200px] shrink-0 w-full" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-[57.48px] not-italic text-[12px] text-center text-white top-[9px] tracking-[0.3px] uppercase w-[42px]">View Steps</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[124px] relative shrink-0 w-[114.141px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <Heading6 />
        <Button3 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex flex-col h-[160px] items-start justify-between left-0 pb-[12px] pl-[24px] pt-[24px] top-0 w-[162.141px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135.381deg, rgb(255, 137, 4) 0%, rgb(255, 105, 0) 100%)" }}>
      <Container27 />
    </div>
  );
}

function ImageFlexibilityFocus() {
  return (
    <div className="absolute h-[160px] left-0 top-0 w-[157.859px]" data-name="Image (Flexibility Focus)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageFlexibilityFocus} />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M6 3L20 12L6 21V3Z" fill="var(--fill-0, #9810FA)" id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container30() {
  return (
    <div className="bg-white relative rounded-[16777200px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] shrink-0 size-[56px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[18px] pr-[14px] relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex h-[160px] items-center justify-center left-0 px-[50.93px] top-0 w-[157.859px]" data-name="Container">
      <Container30 />
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute bg-white h-[160px] left-[162.14px] top-0 w-[157.859px]" data-name="Container">
      <ImageFlexibilityFocus />
      <Container29 />
    </div>
  );
}

function Container25() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[160px] relative rounded-[24px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-[320px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Container26 />
        <Container28 />
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Black',sans-serif] font-black leading-[30px] left-0 not-italic text-[24px] text-white top-0 tracking-[0.0703px] w-[75px]">Power Hour</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] h-[48px] relative rounded-[16777200px] shrink-0 w-full" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-[56.41px] not-italic text-[12px] text-center text-white top-[9px] tracking-[0.3px] uppercase w-[42px]">View Steps</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[124px] relative shrink-0 w-[112px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <Heading7 />
        <Button4 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-between left-0 pb-[12px] pl-[24px] pt-[24px] size-[160px] top-0" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(246, 51, 154) 0%, rgb(251, 100, 182) 100%)" }}>
      <Container33 />
    </div>
  );
}

function ImagePowerHour() {
  return (
    <div className="absolute left-0 size-[160px] top-0" data-name="Image (Power Hour)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageMorningFlow} />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M6 3L20 12L6 21V3Z" fill="var(--fill-0, #9810FA)" id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container36() {
  return (
    <div className="bg-white relative rounded-[16777200px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] shrink-0 size-[56px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[18px] pr-[14px] relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 px-[52px] size-[160px] top-0" data-name="Container">
      <Container36 />
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute bg-white left-[160px] size-[160px] top-0" data-name="Container">
      <ImagePowerHour />
      <Container35 />
    </div>
  );
}

function Container31() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[160px] relative rounded-[24px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-[320px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Container32 />
        <Container34 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[168px] relative shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-start pl-[24px] relative size-full">
          <Container19 />
          <Container25 />
          <Container31 />
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[200px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading4 />
      <Container18 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-[24px] not-italic text-[#9810fa] text-[12px] top-px tracking-[0.6px] uppercase whitespace-nowrap">ADVANCED</p>
    </div>
  );
}

function Heading9() {
  return (
    <div className="h-[90px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Black',sans-serif] font-black leading-[30px] left-0 not-italic text-[24px] text-white top-0 tracking-[0.0703px] w-[119px]">Advanced Arm Balances</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] h-[32px] relative rounded-[16777200px] shrink-0 w-full" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-[59.5px] not-italic text-[12px] text-center text-white top-[9px] tracking-[0.3px] uppercase whitespace-nowrap">View Steps</p>
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[138px] relative shrink-0 w-[118.195px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <Heading9 />
        <Button5 />
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute content-stretch flex flex-col h-[160px] items-start justify-between left-0 pb-[-2px] pl-[24px] pt-[24px] top-0 w-[166.195px]" data-name="Container" style={{ backgroundImage: "linear-gradient(136.088deg, rgb(16, 24, 40) 0%, rgb(30, 41, 57) 100%)" }}>
      <Container41 />
    </div>
  );
}

function ImageAdvancedArmBalances() {
  return (
    <div className="absolute h-[160px] left-0 top-0 w-[153.805px]" data-name="Image (Advanced Arm Balances)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageAdvancedArmBalances} />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M6 3L20 12L6 21V3Z" fill="var(--fill-0, #9810FA)" id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container44() {
  return (
    <div className="bg-white relative rounded-[16777200px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] shrink-0 size-[56px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[18px] pr-[14px] relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute content-stretch flex h-[160px] items-center justify-center left-0 pl-[48.898px] pr-[48.906px] top-0 w-[153.805px]" data-name="Container">
      <Container44 />
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute bg-white h-[160px] left-[166.2px] top-0 w-[153.805px]" data-name="Container">
      <ImageAdvancedArmBalances />
      <Container43 />
    </div>
  );
}

function Container39() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[160px] relative rounded-[24px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-[320px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Container40 />
        <Container42 />
      </div>
    </div>
  );
}

function Heading10() {
  return (
    <div className="absolute h-[60px] left-0 top-0 w-[129.688px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Black',sans-serif] font-black leading-[30px] left-0 not-italic text-[24px] text-white top-0 tracking-[0.0703px] w-[130px]">Handstand Journey</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] h-[32px] left-0 rounded-[16777200px] top-[76px] w-[117.828px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-[59.5px] not-italic text-[12px] text-center text-white top-[9px] tracking-[0.3px] uppercase whitespace-nowrap">View Steps</p>
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[108px] relative shrink-0 w-[129.688px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Heading10 />
        <Button6 />
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute content-stretch flex flex-col h-[160px] items-start justify-between left-0 pb-[28px] pl-[24px] pt-[24px] top-0 w-[177.688px]" data-name="Container" style={{ backgroundImage: "linear-gradient(137.998deg, rgb(30, 41, 57) 0%, rgb(16, 24, 40) 100%)" }}>
      <Container47 />
    </div>
  );
}

function ImageHandstandJourney() {
  return (
    <div className="absolute h-[160px] left-0 top-0 w-[142.313px]" data-name="Image (Handstand Journey)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageHandstandJourney} />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M6 3L20 12L6 21V3Z" fill="var(--fill-0, #9810FA)" id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container50() {
  return (
    <div className="bg-white relative rounded-[16777200px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] shrink-0 size-[56px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[18px] pr-[14px] relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute content-stretch flex h-[160px] items-center justify-center left-0 px-[43.156px] top-0 w-[142.313px]" data-name="Container">
      <Container50 />
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute bg-white h-[160px] left-[177.69px] top-0 w-[142.313px]" data-name="Container">
      <ImageHandstandJourney />
      <Container49 />
    </div>
  );
}

function Container45() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[160px] relative rounded-[24px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-[320px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Container46 />
        <Container48 />
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[168px] relative shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-start pl-[24px] relative size-full">
          <Container39 />
          <Container45 />
        </div>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[200px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading8 />
      <Container38 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-[24px] not-italic text-[#9810fa] text-[12px] top-px tracking-[0.6px] uppercase whitespace-nowrap">Focus Area</p>
    </div>
  );
}

function Container53() {
  return <div className="h-[128px] rounded-[24px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] shrink-0 w-[208px]" data-name="Container" style={{ backgroundImage: "linear-gradient(148.392deg, rgb(218, 178, 255) 0%, rgb(233, 212, 255) 100%)" }} />;
}

function Container54() {
  return <div className="h-[128px] rounded-[24px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] shrink-0 w-[208px]" data-name="Container" style={{ backgroundImage: "linear-gradient(148.392deg, rgb(153, 161, 175) 0%, rgb(209, 213, 220) 100%)" }} />;
}

function Container55() {
  return <div className="h-[128px] rounded-[24px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] shrink-0 w-[208px]" data-name="Container" style={{ backgroundImage: "linear-gradient(148.392deg, rgb(253, 165, 213) 0%, rgb(252, 206, 232) 100%)" }} />;
}

function Container52() {
  return (
    <div className="h-[136px] relative shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-start pl-[24px] relative size-full">
          <Container53 />
          <Container54 />
          <Container55 />
        </div>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[168px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading11 />
      <Container52 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] h-[864px] items-start left-0 top-[132px] w-[1101px]" data-name="Container">
      <Container3 />
      <Container17 />
      <Container37 />
      <Container51 />
    </div>
  );
}

function StylesScreen() {
  return (
    <div className="bg-[#f9fafb] h-[1092px] relative shrink-0 w-full" data-name="StylesScreen">
      <Container />
      <Heading />
      <Container2 />
    </div>
  );
}

function Body() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[786px] items-start left-0 top-0 w-[1101px]" data-name="Body">
      <StylesScreen />
    </div>
  );
}

function Icon9() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[24px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[12.5%_8.33%_16.67%_8.33%]" data-name="Vector">
          <div className="absolute inset-[-7.91%_-13.03%_-5.88%_-13.03%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.2119 19.3454">
              <path d={svgPaths.p109106c0} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[36.258px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[18.5px] not-italic text-[#99a1af] text-[12px] text-center top-px whitespace-nowrap">HOME</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="h-[44px] relative shrink-0 w-[36.258px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center relative size-full">
        <Icon9 />
        <Text1 />
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[16.67%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <path d={svgPaths.p30769300} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon10 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[16px] relative shrink-0 w-[47.227px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-[24.5px] not-italic text-[#0a0a0a] text-[12px] text-center top-px whitespace-nowrap">STYLES</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="h-[44px] relative shrink-0 w-[47.227px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center relative size-full">
        <Container57 />
        <Text2 />
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[24px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <div className="absolute inset-[-5%_-5%_-12.07%_-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 23.4142">
              <path d={svgPaths.p1147a400} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[16px] relative shrink-0 w-[58.305px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[29.5px] not-italic text-[#99a1af] text-[12px] text-center top-px whitespace-nowrap">AI COACH</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="h-[44px] relative shrink-0 w-[58.305px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center relative size-full">
        <Icon11 />
        <Text3 />
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[24px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[16.67%_58.33%_54.17%_16.67%]" data-name="Vector">
          <div className="absolute inset-[-14.29%_-16.67%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 9">
              <path d={svgPaths.p28cba480} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[54.17%_58.33%_16.67%_16.67%]" data-name="Vector">
          <div className="absolute inset-[-14.29%_-16.67%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 9">
              <path d={svgPaths.p28cba480} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[16.67%_16.67%_54.17%_58.33%]" data-name="Vector">
          <div className="absolute inset-[-14.29%_-16.67%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 9">
              <path d={svgPaths.p28cba480} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[54.17%_16.67%_16.67%_58.33%]" data-name="Vector">
          <div className="absolute inset-[-14.29%_-16.67%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 9">
              <path d={svgPaths.p28cba480} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[16px] relative shrink-0 w-[64.969px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[32.5px] not-italic text-[#99a1af] text-[12px] text-center top-px whitespace-nowrap">PROGRESS</p>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="h-[44px] relative shrink-0 w-[64.969px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center relative size-full">
        <Icon12 />
        <Text4 />
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[24px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[12.5%_33.33%_54.17%_33.33%]" data-name="Vector">
          <div className="absolute inset-[-12.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
              <path d={svgPaths.pb08b100} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[62.5%_16.67%_12.5%_16.67%]" data-name="Vector">
          <div className="absolute inset-[-16.67%_-6.25%_0_-6.25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 7">
              <path d={svgPaths.p18b9efc0} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[16px] relative shrink-0 w-[49.656px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[25.5px] not-italic text-[#99a1af] text-[12px] text-center top-px whitespace-nowrap">PROFILE</p>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="h-[44px] relative shrink-0 w-[49.656px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center relative size-full">
        <Icon13 />
        <Text5 />
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[19.156px] pr-[19.164px] relative size-full">
          <Button7 />
          <Button8 />
          <Button9 />
          <Button10 />
          <Button11 />
        </div>
      </div>
    </div>
  );
}

function StylesScreen1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[77px] items-start left-0 pt-[17px] px-[326.5px] top-[709px] w-[1101px]" data-name="StylesScreen">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-solid border-t inset-0 pointer-events-none" />
      <Container56 />
    </div>
  );
}

export default function CreateNextComponent() {
  return (
    <div className="bg-white relative size-full" data-name="Create next component">
      <Body />
      <StylesScreen1 />
    </div>
  );
}