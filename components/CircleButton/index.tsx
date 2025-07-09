import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { CircleButtonContainer, CirclePressable } from "./styledComponents";

type Props = {
  onPress: () => void;
};

const CircleButton = ({ onPress }: Props) => {
  return (
    <CircleButtonContainer>
      <CirclePressable onPress={onPress}>
        <MaterialIcons name="add-a-photo" size={38} color="#25292e" />
      </CirclePressable>
    </CircleButtonContainer>
  );
};

export default CircleButton;
