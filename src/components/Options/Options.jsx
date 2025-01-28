const Options = ({ values, putClick, resetPut, total }) => {
  return (
    <div>
      {values.map((item) => (
        <button onClick={() => putClick(item)} key={item}>
          {item}
        </button>
      ))}
      {total > 0 && <button onClick={resetPut}>RESET</button>}
    </div>
  );
};

export default Options;
