import styled, { css } from "styled-components";

interface IFlexContainerProps {
  display?: string;
  flexDirection?: "column" | "column-reverse" | "row" | "row-reverse";
  alignItems?: "center" | "start" | "end" | "flex-start" | "flex-end";
  justifyContent?:
    | "center"
    | "start"
    | "end"
    | "flex-start"
    | "flex-end"
    | "left"
    | "right";
  flexWrap?: "nowrap" | "wrap" | "wrap-reverse";
  gap?: string;
  media?: any;
}

export const FlexContainer = styled.div<IFlexContainerProps>`
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  border-radius: 16px;
  display: ${(props) => props.display || "block"};
  flex-direction: ${(props) => props.flexDirection || "row"};
  align-items: ${(props) => props.alignItems || "flex-start"};
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  flex-wrap: ${(props) => props.flexWrap};
  gap: ${(props) => props.gap || "20px"};
  padding: 10px;
  background-color: #fff;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 100%;
    text-align: start;
  }

  ${({ media }) => {
    switch (media) {
      case "responsive":
        return css`
          @media (min-width: 768px) {
            display: flex;
          }
        `;
    }
  }}
`;
