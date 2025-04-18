import { CardInicial } from "./components/CardInicial"
import { useState } from "react"

export function App() {
  const [submited, setSubmited] = useState(false)
  const [notaAvaliacao, setNotaAvaliacao] = useState(0)

  return (
   submited === false ? (
    <CardInicial setNotaAvaliacao={setNotaAvaliacao} notaAvaliacao={notaAvaliacao} setSubmited={setSubmited}/>
   ) : (
    <CardFinal notaAvaliacao={notaAvaliacao}/>
   )
  ) 
}