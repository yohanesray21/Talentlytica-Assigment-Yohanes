import React, { memo } from 'react';
import { TableRowProps } from './TableRowStudent';

type TableDataSelectProps = TableRowProps & {
  aspect: string;
};

const options: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const TableDataSelect = memo(
  ({ setOutputJSON, aspect, student }: TableDataSelectProps) => {
    console.log('TableDataSelect  rerender');

    const handleSelectOption = (evt: React.ChangeEvent<HTMLSelectElement>) => {
      setOutputJSON((prevOutputJSON: any) => ({
        ...prevOutputJSON,
        [aspect]: {
          ...prevOutputJSON[aspect],
          [student.toLocaleLowerCase()]: evt.target.value,
        },
      }));
    };

    return (
      <td>
        <select
          onChange={(evt) => handleSelectOption(evt)}
          defaultValue=""
          required
        >
          <option value="" hidden>
            Pilih Nilai
          </option>
          {options.map((opt) => (
            <option value={opt} key={opt}>
              {opt}
            </option>
          ))}
        </select>
      </td>
    );
  }
);

export default TableDataSelect;
