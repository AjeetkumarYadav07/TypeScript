import React from 'react'
  interface SearchBoxProps {
    city:string ;
    onCityChange : (newCity:string) => void ;
    onSearch: () => void ;

  }
const SearchBox:React.FC<SearchBoxProps> = ({city , onCityChange , onSearch}) => {
  return (
    <>
     <div className='flex mb-4'>

      <input type="text" 
       value={city}
       onChange={ (e) => onCityChange(e.target.value)  }
       placeholder='Enter City' 
       className="p-2 rounded-l border border-gray-300 outline-none"/>

      <button  onClick={onSearch}
       className="bg-blue-500 text-white px-4 rounded-r hover:bg-blue-600 transition"
        >Search</button>

     </div>
    
    </>
  )
}

export default SearchBox