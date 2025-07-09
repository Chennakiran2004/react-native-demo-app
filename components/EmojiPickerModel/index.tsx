import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { PropsWithChildren } from "react";
import { Modal, Pressable, View } from "react-native";
import { ModalContent, Title, TitleContainer } from "./styledComponents";

type Props = PropsWithChildren<{
  isVisible: boolean;
  onClose: () => void;
}>;

export default function EmojiPicker({ isVisible, children, onClose }: Props) {
  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={isVisible}>
        <ModalContent>
          <TitleContainer>
            <Title>Choose a sticker</Title>
            <Pressable onPress={onClose}>
              <MaterialIcons name="close" color="#fff" size={22} />
            </Pressable>
          </TitleContainer>
          {children}
        </ModalContent>
      </Modal>
    </View>
  );
}
