
function MyButton({ bgColor, textColor, padding, borderRadius, text }) {
  return (
    <button
      style={{
        backgroundColor:bgColor,
        color: textColor,
        padding:padding,
        borderRadius: borderRadius,
        border: "dotted"
      }}
    >
      {text}
    </button>
  );
}

export default MyButton;
