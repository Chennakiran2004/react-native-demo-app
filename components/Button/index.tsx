import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  ButtonContainer,
  ButtonIcon,
  ButtonLabel,
  ButtonPressable,
  PrimaryButtonWrapper,
} from "./styledComponents";

type Props = {
  label: string;
  theme?: "primary";
  onPress?: () => void;
};

const Button = ({ label, theme, onPress }: Props) => {
  if (theme === "primary") {
    return (
      <PrimaryButtonWrapper>
        <ButtonContainer>
          <ButtonPressable
            style={{ backgroundColor: "#fff" }}
            onPress={onPress}
          >
            <ButtonIcon>
              <FontAwesome name="picture-o" size={18} color="#25292e" />
            </ButtonIcon>
            <ButtonLabel color="#25292e">{label}</ButtonLabel>
          </ButtonPressable>
        </ButtonContainer>
      </PrimaryButtonWrapper>
    );
  }

  return (
    <ButtonContainer>
      <ButtonPressable onPress={onPress}>
        <ButtonLabel>{label}</ButtonLabel>
      </ButtonPressable>
    </ButtonContainer>
  );
};

export default Button;
