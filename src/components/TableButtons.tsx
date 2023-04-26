import { ReactNode } from "react";

const TableButtons = ({
  children,
  page,
  pagesCount,
}: {
  children: ReactNode;
  page: number;
  pagesCount: number;
}) => {
  return (
    <div className="flex gap-2 items-center justify-center mt-4">
      <p>
        {page} / {pagesCount}
      </p>
      {children}
    </div>
  );
};

export default TableButtons;
