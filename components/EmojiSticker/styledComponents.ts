import styled from "styled-components/native";

export const StickerContainer = styled.View`
  top: -350px;
`;

export const StickerText = styled.Text<{ size: number }>`
  font-size: ${(props: { size: number }) => props.size}px;
`;
