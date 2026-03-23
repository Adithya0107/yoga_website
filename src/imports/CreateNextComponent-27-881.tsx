import svgPaths from "./svg-eo6hau4z68";

function Text() {
  return (
    <div className="h-[23.995px] relative shrink-0 w-[33.901px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#0a0a0a] text-[16px] top-[-0.97px] tracking-[-0.3125px] whitespace-nowrap">3:40</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[11.992px] relative shrink-0 w-[17.999px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9992 11.9924">
        <g clipPath="url(#clip0_27_910)" id="Icon">
          <path d={svgPaths.p74c2e00} fill="var(--fill-0, #0A0A0A)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_27_910">
            <rect fill="white" height="11.9924" width="17.9992" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[11.992px] relative shrink-0 w-[23.995px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9953 11.9924">
        <g clipPath="url(#clip0_27_893)" id="Icon">
          <path d={svgPaths.p2a771980} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeWidth="0.999365" />
          <path d={svgPaths.p1485b000} fill="var(--fill-0, #0A0A0A)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_27_893">
            <rect fill="white" height="11.9924" width="23.9953" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[11.992px] relative shrink-0 w-[49.993px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.998px] items-center relative size-full">
        <Icon />
        <Icon1 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex h-[43.986px] items-center justify-between left-0 px-[23.995px] top-0 w-[410.877px]" data-name="Container">
      <Text />
      <Container1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[23.995px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.99845 13.9973">
            <path d={svgPaths.p3603d080} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99961" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="relative shrink-0 size-[39.992px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7.998px] px-[7.998px] relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[31.994px] relative shrink-0 w-[99.509px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Black',sans-serif] font-black leading-[32px] left-0 not-italic text-[#0a0a0a] text-[24px] top-[0.03px] tracking-[0.0703px] whitespace-nowrap">Security</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex gap-[15.997px] h-[79.984px] items-center left-0 pl-[15.997px] top-[43.99px] w-[410.877px]" data-name="Container">
      <Button />
      <Heading />
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute h-[15.997px] left-[24px] top-[123.97px] w-[362.886px]" data-name="Heading 2">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-0 not-italic text-[#9810fa] text-[12px] top-[0.68px] tracking-[0.6px] uppercase whitespace-nowrap">{`Password & Authentication`}</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[19.991px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9908 19.9908">
        <g id="Icon">
          <path d={svgPaths.p4e75780} id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6659" />
          <path d={svgPaths.p21390180} id="Vector_2" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6659" />
          <path d={svgPaths.p1899f600} id="Vector_3" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6659" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[#f3e8ff] relative rounded-[14px] shrink-0 size-[39.992px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10.001px] relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute h-[26.993px] left-0 top-0 w-[230.927px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[27px] left-0 not-italic text-[#0a0a0a] text-[18px] top-[0.03px] tracking-[-0.4395px] whitespace-nowrap">Change Password</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[20.001px] left-0 top-[26.99px] w-[230.927px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-[0.36px] tracking-[-0.1504px] whitespace-nowrap">Update your password</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="flex-[230.927_0_0] h-[46.995px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Heading2 />
        <Paragraph />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[19.991px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9908 19.9908">
        <g id="Icon">
          <path d={svgPaths.p2cc57ac0} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6659" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[87.655px] relative shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#f9fafb] border-b-[0.678px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[15.997px] items-center pb-[0.678px] px-[19.991px] relative size-full">
          <Container4 />
          <Container5 />
          <Icon4 />
        </div>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[19.991px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9908 19.9908">
        <g clipPath="url(#clip0_27_913)" id="Icon">
          <path d={svgPaths.p3d1fea00} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6659" />
          <path d="M9.99541 14.9931H10.0037" id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6659" />
        </g>
        <defs>
          <clipPath id="clip0_27_913">
            <rect fill="white" height="19.9908" width="19.9908" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[#dbeafe] relative rounded-[14px] shrink-0 size-[39.992px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10.001px] relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute h-[26.993px] left-0 top-0 w-[134.279px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[27px] left-0 not-italic text-[#0a0a0a] text-[18px] top-[0.03px] tracking-[-0.4395px] whitespace-nowrap">Biometric Login</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[20.001px] left-0 top-[26.99px] w-[134.279px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-[0.36px] tracking-[-0.1504px] whitespace-nowrap">Face ID / Fingerprint</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[46.995px] relative shrink-0 w-[134.279px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Heading3 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex gap-[15.997px] h-[46.995px] items-center left-[19.99px] top-[19.99px] w-[190.268px]" data-name="Container">
      <Container8 />
      <Container9 />
    </div>
  );
}

function Container10() {
  return <div className="absolute bg-[#e5e7eb] h-[28px] left-0 rounded-[22750400px] top-0 w-[47.991px]" data-name="Container" />;
}

function Container11() {
  return <div className="absolute bg-white left-[3.99px] rounded-[22750400px] size-[19.991px] top-[3.99px]" data-name="Container" />;
}

function Label() {
  return (
    <div className="absolute h-[28px] left-[294.9px] top-[29.48px] w-[47.991px]" data-name="Label">
      <Container10 />
      <Container11 />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[87.655px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f9fafb] border-b-[0.678px] border-solid inset-0 pointer-events-none" />
      <Container7 />
      <Label />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[19.991px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9908 19.9908">
        <g clipPath="url(#clip0_27_904)" id="Icon">
          <path d={svgPaths.p346f4c00} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6659" />
          <path d={svgPaths.p3b408900} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6659" />
        </g>
        <defs>
          <clipPath id="clip0_27_904">
            <rect fill="white" height="19.9908" width="19.9908" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-[#dcfce7] relative rounded-[14px] shrink-0 size-[39.992px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10.001px] relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute h-[26.993px] left-0 top-0 w-[144.12px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[27px] left-0 not-italic text-[#0a0a0a] text-[18px] top-[0.03px] tracking-[-0.4395px] whitespace-nowrap">Two-Factor Auth</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[20.001px] left-0 top-[26.99px] w-[144.12px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-[0.36px] tracking-[-0.1504px] whitespace-nowrap">Extra security layer</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[46.995px] relative shrink-0 w-[144.12px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Heading4 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex gap-[15.997px] h-[46.995px] items-center left-[19.99px] top-[19.99px] w-[200.11px]" data-name="Container">
      <Container14 />
      <Container15 />
    </div>
  );
}

function Container16() {
  return <div className="absolute bg-[#e5e7eb] h-[28px] left-0 rounded-[22750400px] top-0 w-[47.991px]" data-name="Container" />;
}

function Container17() {
  return <div className="absolute bg-white left-[3.99px] rounded-[22750400px] size-[19.991px] top-[3.99px]" data-name="Container" />;
}

function Label1() {
  return (
    <div className="absolute h-[28px] left-[294.9px] top-[29.48px] w-[47.991px]" data-name="Label">
      <Container16 />
      <Container17 />
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[86.977px] relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <Label1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[262.286px] items-start left-[24px] overflow-clip rounded-[24px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-[163.96px] w-[362.886px]" data-name="Container">
      <Button1 />
      <Container6 />
      <Container12 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="absolute h-[15.997px] left-[24px] top-[450.24px] w-[362.886px]" data-name="Heading 2">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-0 not-italic text-[#9810fa] text-[12px] top-[0.68px] tracking-[0.6px] uppercase whitespace-nowrap">Privacy</p>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[19.991px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9908 19.9908">
        <g clipPath="url(#clip0_27_900)" id="Icon">
          <path d={svgPaths.p17ac0f00} id="Vector" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6659" />
          <path d={svgPaths.p1948b000} id="Vector_2" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6659" />
        </g>
        <defs>
          <clipPath id="clip0_27_900">
            <rect fill="white" height="19.9908" width="19.9908" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-[#ffedd4] relative rounded-[14px] shrink-0 size-[39.992px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10.001px] relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="absolute h-[26.993px] left-0 top-0 w-[230.927px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[27px] left-0 not-italic text-[#0a0a0a] text-[18px] top-[0.03px] tracking-[-0.4395px] whitespace-nowrap">Privacy Policy</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[20.001px] left-0 top-[26.99px] w-[230.927px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-[0.36px] tracking-[-0.1504px] whitespace-nowrap">How we handle your data</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="flex-[230.927_0_0] h-[46.995px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Heading6 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[19.991px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9908 19.9908">
        <g id="Icon">
          <path d={svgPaths.p2cc57ac0} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6659" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute content-stretch flex gap-[15.997px] h-[87.655px] items-center left-0 pb-[0.678px] px-[19.991px] top-0 w-[362.886px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#f9fafb] border-b-[0.678px] border-solid inset-0 pointer-events-none" />
      <Container19 />
      <Container20 />
      <Icon8 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[19.991px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9908 19.9908">
        <g clipPath="url(#clip0_27_889)" id="Icon">
          <path d={svgPaths.p346f4c00} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6659" />
          <path d={svgPaths.p3b408900} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6659" />
        </g>
        <defs>
          <clipPath id="clip0_27_889">
            <rect fill="white" height="19.9908" width="19.9908" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container21() {
  return (
    <div className="bg-[#f3f4f6] relative rounded-[14px] shrink-0 size-[39.992px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10.001px] relative size-full">
        <Icon9 />
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[26.993px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[27px] left-0 not-italic text-[#0a0a0a] text-[18px] top-[0.03px] tracking-[-0.4395px] whitespace-nowrap">Data Permissions</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[20.001px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-[0.36px] tracking-[-0.1504px] whitespace-nowrap">Manage app access</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="flex-[230.927_0_0] h-[46.995px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading7 />
        <Paragraph4 />
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[19.991px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9908 19.9908">
        <g id="Icon">
          <path d={svgPaths.p2cc57ac0} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6659" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute content-stretch flex gap-[15.997px] h-[86.977px] items-center left-0 px-[19.991px] top-[87.65px] w-[362.886px]" data-name="Button">
      <Container21 />
      <Container22 />
      <Icon10 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute bg-white h-[174.631px] left-[24px] overflow-clip rounded-[24px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-[490.24px] w-[362.886px]" data-name="Container">
      <Button2 />
      <Button3 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="absolute h-[15.997px] left-[24px] top-[688.86px] w-[362.886px]" data-name="Heading 2">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-0 not-italic text-[#9810fa] text-[12px] top-[0.68px] tracking-[0.6px] uppercase whitespace-nowrap">Active Sessions</p>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[19.991px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9908 19.9908">
        <g clipPath="url(#clip0_27_885)" id="Icon">
          <path d={svgPaths.p3d1fea00} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6659" />
          <path d="M9.99541 14.9931H10.0037" id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6659" />
        </g>
        <defs>
          <clipPath id="clip0_27_885">
            <rect fill="white" height="19.9908" width="19.9908" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container25() {
  return (
    <div className="bg-[#dcfce7] relative rounded-[14px] shrink-0 size-[39.992px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10.001px] relative size-full">
        <Icon11 />
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div className="absolute h-[26.993px] left-0 top-0 w-[266.915px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[27px] left-0 not-italic text-[#0a0a0a] text-[18px] top-[0.03px] tracking-[-0.4395px] whitespace-nowrap">iPhone 14 Pro</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[20.001px] left-0 top-[26.99px] w-[266.915px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-[0.36px] tracking-[-0.1504px] whitespace-nowrap">Current device • Active now</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="flex-[266.915_0_0] h-[46.995px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Heading9 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex gap-[15.997px] h-[46.995px] items-center relative shrink-0 w-full" data-name="Container">
      <Container25 />
      <Container26 />
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#fef2f2] h-[43.986px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[161.75px] not-italic text-[#e7000b] text-[14px] text-center top-[12.35px] tracking-[-0.1504px] whitespace-nowrap">Sign Out All Other Devices</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[23.995px] h-[154.958px] items-start left-[24px] pt-[19.991px] px-[19.991px] rounded-[24px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[728.85px] w-[362.886px]" data-name="Container">
      <Container24 />
      <Button4 />
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-gradient-to-r from-[#9810fa] h-[51.995px] left-[24px] rounded-[22750400px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] to-[#c27aff] top-[915.81px] w-[362.886px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[181.29px] not-italic text-[14px] text-center text-white top-[16.35px] tracking-[0.5496px] uppercase whitespace-nowrap">Save Settings</p>
    </div>
  );
}

function SecurityScreen() {
  return (
    <div className="bg-[#f9fafb] h-[999.796px] relative shrink-0 w-full" data-name="SecurityScreen">
      <Container />
      <Container2 />
      <Heading1 />
      <Container3 />
      <Heading5 />
      <Container18 />
      <Heading8 />
      <Container23 />
      <Button5 />
    </div>
  );
}

export default function CreateNextComponent() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Create next component">
      <SecurityScreen />
    </div>
  );
}