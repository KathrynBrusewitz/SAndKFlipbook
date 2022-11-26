interface Props {
  children: string;
}

const Yellow = ({ children }: Props) => {
  const cList = children.split("").map((child) => (
    <span
      style={{
        color: "white",
        backgroundColor: "#ecc94b",
        padding: "0px 8px",
        margin: "0px 1px",
        border: "1px solid #ecc94b",
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

export default Yellow;
