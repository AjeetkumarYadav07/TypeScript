import  { type  Dispatch , type  SetStateAction} from 'react'

  type InputValType = string | number ;


const form = <T extends InputValType >  ({

    lable,
    value,
    setter,
}: {

    lable:string ;
    value:T ;
    setter: Dispatch<SetStateAction<T>> ;
} ) => {
  return (
     <form>


        <label > {lable} </label>
        <input type="text" value={value} onChange={(e) => setter(e.target.value as T)} />

        <button type='submit' > Submit </button>
     </form>
  );
}

export default form