interface Props {
  children: string;
}

const Green = ({ children }: Props) => {
  const cList = children.split("").map((child) => (
    <span
      style={{
        color: "white",
        backgroundColor: "green",
        // letterSpacing: 2,
        padding: "0px 9px",
        margin: 2,
      }}
    >
      {child}
    </span>
  ));
  return <span>{cList}</span>;
};

export default Green;
