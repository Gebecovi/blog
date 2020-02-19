import { CSSProperties } from "react";

const image: CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  backgroundPosition: "center",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat"
};

const imageComponent: CSSProperties = {
  width: "30em",
  maxWidth: "100%"
};

const imageWrapper: CSSProperties = {
  width: "100%",
  paddingTop: "100%",
  position: "relative"
};

const AppImageStyles = {
  image,
  imageComponent,
  imageWrapper
};

export default AppImageStyles;
