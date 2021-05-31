import useAuthRedux from "stores/auth/useAuthRedux";
// styles
import { Input, Button } from "styles/index";
import { H } from "styles/typography";
import * as sizes from "styles/sizes";
import * as colors from "styles/colors";

function Main() {
  const { state } = useAuthRedux();

  console.log(process.env);

  return (
    <main style={{ padding: sizes.SIDE_PADDING }}>
      <article>
        <H f24 style={{ color: colors.ORANGE, marginBottom: "2rem" }}>
          react-boilerplate by {state.user?.name || ""}
        </H>
        <Input label="label" style={{ marginBottom: "1rem" }} />
        <Button>check</Button>
      </article>
    </main>
  );
}

export default Main;
