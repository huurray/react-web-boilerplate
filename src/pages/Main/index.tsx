import useAuthRedux from "stores/auth/useAuthRedux";

function Main() {
  const { state } = useAuthRedux();

  return (
    <div>
      <article>
        <h1>react-boilerplate by {state.user?.name}.</h1>
      </article>
    </div>
  );
}

export default Main;
