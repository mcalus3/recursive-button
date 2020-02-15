import * as React from "react";

type ClickingMode = "default" | "undo" | "rampage";

type State = {
  count: number;
  mode: ClickingMode;
};

type Action =
  | { type: "changeState"; payload: ClickingMode }
  | { type: "addCount"; payload: number };

type Dispatch = (action: Action) => void;

type StateProviderProps = { children: React.ReactNode };

const StateContext = React.createContext<State | undefined>(undefined);

const DispatchContext = React.createContext<Dispatch | undefined>(undefined);

function stateReducer(state: State, action: Action) {
  switch (action.type) {
    case "addCount":
      return { ...state, count: state.count + action.payload };
    case "changeState":
      return { ...state, mode: action.payload };
  }
}

function CountProvider({ children }: StateProviderProps) {
  const [state, dispatch] = React.useReducer(stateReducer, {
    count: 1,
    mode: "default"
  });

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

function useButtonState() {
  const context = React.useContext(StateContext);

  if (context === undefined) {
    throw new Error("useCountState must be used within a CountProvider");
  }

  return context;
}

function useButtonDispatch() {
  const context = React.useContext(DispatchContext);

  if (context === undefined) {
    throw new Error("useCountDispatch must be used within a CountProvider");
  }

  return context;
}

function useChangeButtonMode() {
  const state = useButtonState();
  const dispatch = useButtonDispatch();
  return () =>
    dispatch({
      type: "changeState",
      payload: state.mode === "undo" ? "default" : "undo"
    });
}

export {
  CountProvider,
  useButtonState,
  useButtonDispatch,
  useChangeButtonMode
};
