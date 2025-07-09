import styled from "styled-components/native";

export const ButtonContainer = styled.View`
  width: 320px;
  height: 68px;
  margin-horizontal: 20px;
  align-items: center;
  justify-content: center;
  padding: 3px;
  border-radius: 10px;
`;

export const PrimaryButtonWrapper = styled.View`
  border-width: 4px;
  border-color: #ffd33d;
  border-radius: 18px;
`;

export const ButtonPressable = styled.Pressable`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ButtonLabel = styled.Text<{ color?: string }>`
  font-size: 16px;
  color: ${(props: { color: any }) => props.color ?? "#fff"};
`;

export const ButtonIcon = styled.View`
  padding-right: 8px;
`;
