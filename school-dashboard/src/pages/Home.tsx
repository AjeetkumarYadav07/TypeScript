import StateCard from "../components/StateCard"

const Home = () => {
  return (
     <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold">Welcome to Sunrise School 🏫 </h2>
        <p className="text-gray-600">Empowering students since 1995</p>
      </div>

                    {/* Image of school   */}

          <img
        src="https://media.istockphoto.com/id/180759684/photo/college-of-william-and-mary-in-williamsburg-va.jpg?s=2048x2048&w=is&k=20&c=u_CKwj4HoQSWlx4QZLBLglnliN-IIsm2vw2nNBvO9Ys="
        alt="College"
        className="rounded-xl w-2xs shadow"
      />

       <div className="grid grid-cols-1 cursor-pointer sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        <StateCard title="Total Students" value="1,200" />
        <StateCard title="Total Teachers" value="45" />
        <StateCard title="Alumni Network" value="5,000+" />
        <StateCard title="Departments" value="Arts & Commerce" />
      </div>  

    </div>
  )
}

export default Home