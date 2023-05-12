import React, { memo } from 'react';
import { OutputJSON } from './App';
import TableDataSelect from './TableDataSelect';

export interface TableRowProps {
  student: string;
  setOutputJSON: React.Dispatch<React.SetStateAction<OutputJSON>>;
}

const assessment_aspect: string[] = [
  'aspek_penilaian_1',
  'aspek_penilaian_2',
  'aspek_penilaian_3',
  'aspek_penilaian_4',
];

const TableRowStudent = memo(({ student, setOutputJSON }: TableRowProps) => {
  console.log('Table Row rerender');

  return (
    <tr>
      <td className="student-column">
        <img src="/user.svg" alt="" width={24} />
        {student}
      </td>
      {assessment_aspect.map((aspect) => (
        <TableDataSelect
          setOutputJSON={setOutputJSON}
          aspect={aspect}
          student={student}
          key={aspect}
        />
      ))}
    </tr>
  );
});
export default TableRowStudent;
