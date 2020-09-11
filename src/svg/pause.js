import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPause(props) {
  return (
    <Svg viewBox="0 0 512 512" {...props}>
      <Path d="M124.5 0h-35c-44.112 0-80 35.888-80 80v352c0 44.112 35.888 80 80 80h35c44.112 0 80-35.888 80-80V80c0-44.112-35.888-80-80-80zm40 432c0 22.056-17.944 40-40 40h-35c-22.056 0-40-17.944-40-40V80c0-22.056 17.944-40 40-40h35c22.056 0 40 17.944 40 40v352zM482.5 352c11.046 0 20-8.954 20-20V80c0-44.112-35.888-80-80-80h-34c-44.112 0-80 35.888-80 80v352c0 44.112 35.888 80 80 80h34c44.112 0 80-35.888 80-80 0-11.046-8.954-20-20-20s-20 8.954-20 20c0 22.056-17.944 40-40 40h-34c-22.056 0-40-17.944-40-40V80c0-22.056 17.944-40 40-40h34c22.056 0 40 17.944 40 40v252c0 11.046 8.954 20 20 20z" />
    </Svg>
  );
}

export default SvgPause;

