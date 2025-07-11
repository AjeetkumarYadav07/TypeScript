interface StateCardProps {
    title :string ;
    value: string ;
}
const StateCard = ({title , value}:StateCardProps ) => {
  return (
     <div className="bg-white shadow rounded-lg p-4">
      <h4 className="text-sm text-gray-500">{title}</h4>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  )
}

export default StateCard