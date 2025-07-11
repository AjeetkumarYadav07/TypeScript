
import { complaints } from '../rowdata/complaints/complaints.data';

const ComplaintPage = () => {
  const artsComplaints = complaints.filter(c => c.studentdepartment === 'Arts');
  const commerceComplaints = complaints.filter(c => c.studentdepartment === 'Commerce');

  return (
    <div className="p-6 font-sans">
      <h2 className="text-3xl font-bold text-center mb-8">
        All Student Complaints
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Arts Department */}
        <div className="border rounded-lg p-4 shadow-md bg-white">
          <h3 className="text-xl font-semibold mb-2">Arts Department</h3>
          <p className="text-red-600 font-medium mb-4">
            Total: {artsComplaints.length}
          </p>

          {artsComplaints.map(c => (
            <div key={c.id} className="mb-4 border-b pb-2">
              <h4 className="font-bold">{c.title}</h4>
              <p className="text-gray-700">{c.complaint}</p>
            </div>
          ))}
        </div>

        {/* Commerce Department */}
        <div className="border rounded-lg p-4 shadow-md bg-white">
          <h3 className="text-xl font-semibold mb-2">Commerce Department</h3>
          <p className="text-red-600 font-medium mb-4">
            Total: {commerceComplaints.length}
          </p>

          {commerceComplaints.map(c => (
            <div key={c.id} className="mb-4 border-b pb-2">
              <h4 className="font-bold">{c.title}</h4>
              <p className="text-gray-700">{c.complaint}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComplaintPage;
