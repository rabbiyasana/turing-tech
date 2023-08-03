function Button(props) {
  return (
    <>
      <button
        {...props}
        className="border-white text-white"
        style={{ backgroundColor: "#4F46F8", width: "115px", height: "40px" }}
      >
        {props.text}
      </button>
    </>
  );
}

export default Button;
