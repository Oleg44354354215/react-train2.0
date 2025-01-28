const Feedback = ({ mark, total, positive }) => {
  return (
    <div>
      <ul>
        <li>good :{mark.good}</li>
        <li>neutral :{mark.neutral}</li>
        <li>bad :{mark.bad}</li>
        <li>total :{total}</li>
        {mark.good > 0 && <li> positive :{positive}%</li>}
      </ul>
    </div>
  );
};

export default Feedback;
