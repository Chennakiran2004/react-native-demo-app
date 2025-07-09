import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { IconButtonContainer, IconButtonLabel } from "./styledComponents";

type Props = {
  icon: keyof typeof MaterialIcons.glyphMap;
  label: string;
  onPress: () => void;
};

const Icons = ({ icon, label, onPress }: Props) => {
  return (
    <IconButtonContainer onPress={onPress}>
      <MaterialIcons name={icon} size={24} color="#fff" />
      <IconButtonLabel>{label}</IconButtonLabel>
    </IconButtonContainer>
  );
};

export default Icons;
