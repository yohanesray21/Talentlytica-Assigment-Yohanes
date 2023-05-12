import { useState } from 'react';
import './App.css';
import TableRow from './TableRowStudent';

type AssessmentAspectStudent = {
  [key: string]: string;
};
type AspekPenilaian = Record<string, AssessmentAspectStudent>;
export interface OutputJSON {
  aspek_penilaian_1: AspekPenilaian;
  aspek_penilaian_2: AspekPenilaian;
  aspek_penilaian_3: AspekPenilaian;
  aspek_penilaian_4: AspekPenilaian;
}

const students = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function App() {
  const [isSubmit, setIsSubmit] = useState(false);
  const [submittedOutput, setSubmittedOutput] = useState({});
  const [outputJSON, setOutputJSON] = useState<OutputJSON>({
    aspek_penilaian_1: {},
    aspek_penilaian_2: {},
    aspek_penilaian_3: {},
    aspek_penilaian_4: {},
  });

  return (
    <>
      <h2>Aplikasi Penilaian Talentlytica</h2>
      <div style={{ display: 'flex', gap: 50 }}>
        <div style={{ position: 'relative' }}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setIsSubmit(true);
              alert('Data Berhasil Diubah');
              setSubmittedOutput(outputJSON);
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
            <pre>{JSON.stringify(submittedOutput, null, 2)}</pre>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
