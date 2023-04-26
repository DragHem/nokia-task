interface Props {
  label: string;
  data: number;
}

const Text = ({ label, data }: Props) => {
  return (
    <div className="flex flex-col gap-2 p-2">
      <p>{label}</p>
      <p className="italic text-accent">{data}</p>
    </div>
  );
};

export default Text;
