import { useEffect, useState } from 'react';
import './App.css';

interface TableRowProps {
  student: string;
  setOutputJSON: React.Dispatch<React.SetStateAction<OutputJSON>>;
}

type TableDataSelectProps = TableRowProps & {
  aspect: string;
};

const options: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const students = [1, 2];

const assessment_aspect: string[] = [
  'aspek_penilaian_1',
  'aspek_penilaian_2',
  'aspek_penilaian_3',
  'aspek_penilaian_4',
];

const TableDataSelect = ({
  setOutputJSON,
  aspect,
  student,
}: TableDataSelectProps) => {
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
};

const TableRow = ({ student, setOutputJSON }: TableRowProps) => {
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
};

type AspekPenilaian = Record<string, object>;

interface OutputJSON {
  aspek_penilaian_1: AspekPenilaian;
  aspek_penilaian_2: AspekPenilaian;
  aspek_penilaian_3: AspekPenilaian;
  aspek_penilaian_4: AspekPenilaian;
}
function App() {
  const [isSubmit, setIsSubmit] = useState(false);
  const [outputJSON, setOutputJSON] = useState<OutputJSON>({
    aspek_penilaian_1: {},
    aspek_penilaian_2: {},
    aspek_penilaian_3: {},
    aspek_penilaian_4: {},
  });

  useEffect(() => {
    console.table(JSON.stringify(outputJSON));
  }, [outputJSON]);

  return (
    <>
      <div style={{ display: 'flex', gap: 50 }}>
        <div style={{ position: 'relative' }}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setIsSubmit(true);
            }}
          >
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Aspek Penilaian 1</th>
                  <th>Aspek Penilaian 2</th>
                  <th>Aspek Penilaian 3</th>
                  <th>Aspek Penilaian 4</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <TableRow
                    key={student}
                    student={`Mahasiswa_${student}`}
                    setOutputJSON={setOutputJSON}
                  />
                ))}
              </tbody>
            </table>
            <button className="button" type="submit">
              Simpan
            </button>
          </form>
        </div>
        {isSubmit && (
          <div
            style={{
              border: '1px solid black',
              padding: 20,
              textAlign: 'start',
            }}
          >
            <h4>Output Aspek Penilaian </h4>
            <pre>{JSON.stringify(outputJSON, null, 2)}</pre>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
