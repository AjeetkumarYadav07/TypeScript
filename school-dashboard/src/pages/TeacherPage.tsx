import { teachers } from "../rowdata/teachers/teacher.data"

const TeacherPage = () => {
  return (
   <div>
      <h2 className="text-2xl font-bold mb-4">👩‍🏫 Teachers</h2>

      <div className="bg-white p-4 shadow rounded">
        <ul className="list-disc ml-6">
          {teachers.map((teacher) => (
            <li key={teacher.id}>
              {teacher.name} — <span className="text-gray-500">{teacher.subject}</span>
              <span className="text-gray-700   ">({teacher.qualification})</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TeacherPage