const Input = ({
  filterValue,
  setFilterValue,
}: {
  filterValue: string;
  setFilterValue: (e: string) => void;
}) => {
  return (
    <input
      type="text"
      value={filterValue}
      onChange={(e) => setFilterValue(e.target.value)}
      className="flex my-4 input w-full top-0"
      placeholder="Search country"
    />
  );
};

export default Input;
