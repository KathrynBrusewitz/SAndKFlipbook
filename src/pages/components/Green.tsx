import { PropsWithChildren } from "react";

const Green = ({ children }: PropsWithChildren) => {
  return <span style={{ color: "green" }}>{children}</span>;
};

export default Green;
