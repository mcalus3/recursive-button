import * as React from "react";

type Dispatch = (value: number) => void;

type CountProviderProps = { children: React.ReactNode };

const CountStateContext = React.createContext<number | undefined>(undefined);

const CountDispatchContext = React.createContext<Dispatch | undefined>(
  undefined
);

function countReducer(state: number, action: number) {
  return state + action;
}

function CountProvider({ children }: CountProviderProps) {
  const [state, dispatch] = React.useReducer(countReducer, 1);

  return (
    <CountStateContext.Provider value={state}>
      <CountDispatchContext.Provider value={dispatch}>
        {children}
      </CountDispatchContext.Provider>
    </CountStateContext.Provider>
  );
}

function useCountState() {
  const context = React.useContext(CountStateContext);

  if (context === undefined) {
    throw new Error("useCountState must be used within a CountProvider");
  }

  return context;
}

function useCountDispatch() {
  const context = React.useContext(CountDispatchContext);

  if (context === undefined) {
    throw new Error("useCountDispatch must be used within a CountProvider");
  }

  return context;
}

export { CountProvider, useCountState, useCountDispatch };
