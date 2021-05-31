import styled, { css } from "styled-components";

interface TextOption {
  readonly f40?: boolean;
  readonly f32?: boolean;
  readonly f28?: boolean;
  readonly f24?: boolean;
  readonly f20?: boolean;
  readonly f18?: boolean;
  readonly f16?: boolean;
  readonly f14?: boolean;
  readonly f12?: boolean;
  readonly f10?: boolean;
  readonly f8?: boolean;

  readonly light?: boolean;
  readonly medium?: boolean;
  readonly bold?: boolean;

  readonly center?: boolean;
  readonly right?: boolean;

  readonly nowrap?: boolean;
  readonly pre?: boolean;

  readonly noCursor?: boolean;
}

const textOption = css<TextOption>`
  font-size: ${(props) => {
    if (props.f40) return "4rem";
    if (props.f32) return "3.2rem";
    if (props.f28) return "2.8rem";
    if (props.f24) return "2.4rem";
    if (props.f20) return "2rem";
    if (props.f18) return "1.8rem";
    if (props.f16) return "1.6rem";
    if (props.f14) return "1.4rem";
    if (props.f12) return "1.2rem";
    if (props.f10) return "1rem";
    if (props.f8) return "0.8rem";
    return "1.4rem";
  }};
  font-weight: ${(props) => {
    if (props.light) return "300";
    if (props.medium) return "500";
    if (props.bold) return "600";
    return "400";
  }};
  text-align: ${(props) => {
    if (props.center) return "center";
    if (props.right) return "right";
    return "left";
  }};
  white-space: ${(props) => {
    if (props.nowrap) return "nowrap";
    if (props.pre) return "pre-wrap";
    return "normal";
  }};
  cursor: ${(props) => {
    if (props.noCursor) return "default";
  }};
  word-break: break-word;
`;

export const H = styled.h1<TextOption>`
  ${textOption}
  font-weight: 700;
`;
export const P = styled.p<TextOption>`
  ${textOption}
`;
