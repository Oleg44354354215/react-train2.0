const SearchBox = ({ cur, setCur }) => {
  return (
    <div>
      <label>
        <div>Find contacts by name</div>
        <input
          type="text"
          placeholder="Put name..."
          value={cur}
          onChange={(e) => setCur(e.target.value)}
        />
      </label>
    </div>
  );
};

export default SearchBox;
