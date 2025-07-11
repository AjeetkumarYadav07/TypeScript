import { students } from "../rowdata/students/student.data"

const StudentPage = () => {
    // seprate the students based on their Stream 
    const arts =   students.filter((s)=> s.department === "Arts" );
  const commerce = students.filter((s) => s.department === "Commerce") ;
  return (
         <div>
      <h2 className="text-2xl font-bold mb-4">🎓 Students</h2>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-white p-4 shadow rounded">
          <h3 className="text-lg font-semibold">Arts Students</h3>
          <p className="text-3xl">{arts.length}</p>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h3 className="text-lg font-semibold">Commerce Students</h3>
          <p className="text-3xl">{commerce.length}</p>
        </div>
      </div>

      <div className="bg-white p-4 shadow rounded">
        <h3 className="text-lg font-semibold mb-2">All Students</h3>
        <ul className="list-disc ml-6">
          {students.map((student) => (
            <li key={student.id}>
              {student.name} ({student.department})
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default StudentPage