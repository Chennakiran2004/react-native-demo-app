import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

type Props = {
  imageSize: number;
  stickerSource: string;
};

const EmojiSticker = ({ imageSize, stickerSource }: Props) => {
  const scaleImage = useSharedValue(imageSize);
  const translatex = useSharedValue(0);
  const translatey = useSharedValue(0);

  const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .onStart(() => {
      if (scaleImage.value !== imageSize * 2) {
        scaleImage.value = imageSize * 2;
      } else {
        scaleImage.value = imageSize;
      }
    });

  const imageStyle = useAnimatedStyle(() => {
    return {
      fontSize: scaleImage.value,
    };
  });

  const drag = Gesture.Pan().onChange((event) => {
    translatex.value = event.translationX;
    translatey.value = event.translationY;
  });

  const containerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translatex.value },
        { translateY: translatey.value },
      ],
    };
  });

  return (
    <GestureDetector gesture={drag}>
      <Animated.View style={[{ top: -350 }, containerStyle]}>
        <GestureDetector gesture={doubleTap}>
          <Animated.Text style={imageStyle}>{stickerSource}</Animated.Text>
        </GestureDetector>
      </Animated.View>
    </GestureDetector>
  );
};

export default EmojiSticker;
