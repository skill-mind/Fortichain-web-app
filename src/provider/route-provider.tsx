"use client";
import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";

// Define the state type
type RouteState = {
  route: "validator" | "researcher" | "owner" | "none";
  connect_wallet: boolean;
  validator_github: {
    profile: string;
    pass_work: string;
  };
  owner_github: boolean;
  researcher_userName: string;
  launchModal: boolean;
  isComplete: boolean;
};

// Define the context type
type RouterContextType = RouteState & {
  setter: Dispatch<SetStateAction<RouteState>>;
};

export const Router = createContext<RouterContextType>({
  route: "none",
  isComplete: false,
  connect_wallet: false,
  validator_github: {
    profile: "",
    pass_work: "",
  },
  owner_github: false,
  researcher_userName: "",
  launchModal: false,
  setter: () => {}, // This will be overridden by the provider
});

type RouteProviderProps = {
  children: ReactNode;
};

export default function RouteProvider({ children }: RouteProviderProps) {
  const [routeTo, setRouteTo] = useState<RouteState>({
    route: "none",
    connect_wallet: false,
    validator_github: {
      profile: "",
      pass_work: "",
    },
    owner_github: false,
    researcher_userName: "",
    launchModal: false,
    isComplete: false,
  });

  return (
    <Router.Provider value={{ ...routeTo, setter: setRouteTo }}>
      {children}
    </Router.Provider>
  );
}
