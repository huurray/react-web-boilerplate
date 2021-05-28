// styles
import * as colors from "styles/colors";

interface Props {
  style?: {};
}
function Divider({ style }: Props) {
  return (
    <div
      style={{
        width: "100%",
        height: 1,
        backgroundColor: colors.BORDER_GREY,
        ...style,
      }}
    />
  );
}

export default Divider;
