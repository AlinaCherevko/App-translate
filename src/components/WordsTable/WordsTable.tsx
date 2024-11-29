import { FC } from "react";
// import { useReactTable } from "@tanstack/react-table";

export const WordsTable: FC = () => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Word</th>
            <th>Translation</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* Populate this table with data from the WordsContext */}
        </tbody>
      </table>
    </>
  );
};
