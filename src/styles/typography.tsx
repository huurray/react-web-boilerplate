import styled, { css } from "styled-components";

const textOptions = css`
  font-size: ${(props: any) => {
    if (props.f40) return "40px";
    if (props.f32) return "32px";
    if (props.f28) return "28px";
    if (props.f24) return "24px";
    if (props.f20) return "20px";
    if (props.f18) return "18px";
    if (props.f16) return "16px";
    if (props.f14) return "14px";
    if (props.f12) return "12px";
    if (props.f10) return "10px";
    if (props.f8) return "8px";
    return "14px";
  }};
  font-weight: ${(props: any) => {
    if (props.light) return "300";
    if (props.medium) return "500";
    if (props.bold) return "600";
    return "400";
  }};
  text-align: ${(props: any) => {
    if (props.center) return "center";
    if (props.right) return "right";
    return "left";
  }};
  white-space: ${(props: any) => {
    if (props.nowrap) return "nowrap";
    if (props.pre) return "pre-wrap";
    return "normal";
  }};
  cursor: ${(props: any) => {
    if (props.noCursor) return "default";
  }};
  word-break: break-word;
`;

export const H: any = styled.h1`
  ${textOptions}
  font-weight: 700;
`;
export const P: any = styled.p`
  ${textOptions}
`;
