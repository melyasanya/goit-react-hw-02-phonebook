export const Filter = ({ getName, filter }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" name="filter" onChange={getName} value={filter} />
    </>
  );
};
