interface Props {
  children: string;
}

const Gray = ({ children }: Props) => {
  const cList = children.split("").map((child) => (
    <span
      style={{
        color: "white",
        backgroundColor: "#94a3b8",
        padding: "0px 8px",
        margin: "0px 1px",
        border: "1px solid #94a3b8",
        borderRadius: 8,
        textTransform: "uppercase",
        fontSize: "large",
      }}
    >
      {child}
    </span>
  ));
  return <span>{cList}</span>;
};

export default Gray;
