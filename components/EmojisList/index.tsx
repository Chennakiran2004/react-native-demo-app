import { EMOJI_LIST } from "@/constants/emojis";
import { useState } from "react";
import { FlatList, Platform, Pressable } from "react-native";
import { EmojiText } from "./styledComponents";

type Props = {
  onSelect: (emoji: string) => void;
  onCloseModal: () => void;
};

const EmojiList = ({ onSelect, onCloseModal }: Props) => {
  const [emoji] = useState<string[]>(EMOJI_LIST);

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === "web"}
      data={emoji}
      // contentContainerStyle={ListContainer}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => {
            onSelect(item);
            onCloseModal();
          }}
        >
          <EmojiText>{item}</EmojiText>
        </Pressable>
      )}
    />
  );
};

export default EmojiList;
