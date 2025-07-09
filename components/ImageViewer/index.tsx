import { ImageSourcePropType } from "react-native";
import { StyledImage } from "./styledComponents";

type Props = {
  imgSource: ImageSourcePropType;
  selectedImage?: string;
};

const ImageViewer = ({ imgSource, selectedImage }: Props) => {
  const imageSource = selectedImage ? { uri: selectedImage } : imgSource;

  return <StyledImage source={imageSource} />;
};

export default ImageViewer;
