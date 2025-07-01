import { Children, type ReactNode } from "react"

type PropType = {
    heading: string ,
    children: ReactNode ;

}
const Box = ({heading , children }  :PropType) => {
  return (
    <div>Box


        <h1> {heading} </h1>
        {children}
    </div>
  )
}

export default Box