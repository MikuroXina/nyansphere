import { Dispatch, FC, useReducer } from "react";
import { BigButton } from "../components/button";
import { DotsAnimation } from "../components/dots-animation";
import type { NextPage } from "next";
import { Template } from "../components/template";

const URL_BASE = process.env.URL_BASE || "http://localhost:3000";

type ErrorKind = "INVALID_MAIL_ADDRESS" | "OTHER";

type ReadyState = {
  type: "ready";
  mail: string;
};

type State =
  | ReadyState
  | {
      type: "registering";
    }
  | {
      type: "succeed";
      phrase: string;
    }
  | {
      type: "failed";
      kind: ErrorKind;
    };

type Action =
  | { type: "input"; mail: string }
  | { type: "register" }
  | { type: "error"; kind: ErrorKind }
  | { type: "check"; phrase: string };

function reducer(_: State, action: Action): State {
  switch (action.type) {
    case "input":
      return { type: "ready", mail: action.mail };
    case "register":
      return { type: "registering" };
    case "error":
      return { type: "failed", kind: action.kind };
    case "check":
      return { type: "succeed", phrase: action.phrase };
  }
}

const middleware = (
  state: State,
  reducer: Dispatch<Action>,
): Dispatch<Action> => async (action) => {
  if (action.type === "error") {
    reducer(action);
    setTimeout(() => {
      reducer({ type: "input", mail: "" });
    }, 3000);
    return;
  }
  if (!(state.type === "ready" && action.type === "register")) {
    reducer(action);
    return;
  }

  reducer(action);
  const res = await fetch(`${URL_BASE}/api/register`, {
    method: "POST",
    body: JSON.stringify({ mail: state.mail }),
  });
  if (!res.ok) {
    const message = await res.text();
    const description = message.split("\n")[1];
    reducer({
      type: "error",
      kind:
        description === "INVALID_MAIL_ADDRESS"
          ? "INVALID_MAIL_ADDRESS"
          : "OTHER",
    });
    return;
  }
  const { phrase } = (await res.json()) as { phrase: string };
  reducer({ type: "check", phrase });
};

const InputView: FC<{ state: ReadyState; dispatch: Dispatch<Action> }> = ({
  state,
  dispatch,
}) => (
  <div>
    登録するメールアドレスを入力:
    <input
      type="email"
      defaultValue={state.mail}
      onInput={(e) => dispatch({ type: "input", mail: e.currentTarget.value })}
      required
    />
    <BigButton
      disabled={state.mail === ""}
      onClick={() => dispatch({ type: "register" })}
    >
      登録
    </BigButton>
    <style jsx>{`
      div {
        margin: 0 auto;
        max-width: 480px;
        display: flex;
        flex-flow: column;
      }
      input {
        font-size: 2rem;
        line-height: 3rem;
        border-radius: 1rem;
      }
    `}</style>
  </div>
);

const Message: FC = ({ children }) => (
  <h2>
    {children}{" "}
    <style jsx>{`
      h2 {
        text-align: center;
        font-size: 2rem;
        font-weight: bold;
      }
    `}</style>{" "}
  </h2>
);

const ComponentByState: FC<{ state: State; dispatch: Dispatch<Action> }> = ({
  state,
  dispatch,
}) => {
  switch (state.type) {
    case "ready":
      return <InputView {...{ state, dispatch }} />;
    case "registering":
      return (
        <Message>
          登録中
          <DotsAnimation />
        </Message>
      );
    case "failed":
      return state.kind === "INVALID_MAIL_ADDRESS" ? (
        <Message>メールアドレスが無効です</Message>
      ) : (
        <Message>Something went wrong</Message>
      );
    case "succeed":
      return (
        <>
          Security Phrase is:
          <Message>{state.phrase}</Message>
        </>
      );
  }
};

const Register: NextPage = () => {
  const [state, dispatch] = useReducer(reducer, { type: "ready", mail: "" });

  return (
    <Template>
      <h1>ユーザー登録</h1>
      <ComponentByState {...{ state, dispatch: middleware(state, dispatch) }} />
      <style jsx>{`
        h1 {
          text-align: center;
          text-align: center;
          font-size: 3rem;
          font-weight: bold;
        }
      `}</style>
    </Template>
  );
};
export default Register;
