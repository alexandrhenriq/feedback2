export function InputButton({ value, handleAlterarNotaAvaliacao, notaAvaliacao, setNotaAvaliacao }) {
    function handleAlterarNotaAvaliacao(nota) {
        setNotaAvaliacao(nota)
    }

    

  return (
    <input type="button" value={value} className="w-10.5 h-10.5 bg-dark-blue rounded-full text-sm leading-2 text-medium-grey font-bold focus:bg-medium-grey focus:text-white sm:w-13 sm:h-13 hover:bg-orange hover:text-white hover:cursor-pointer" onClick={() => handleAlterarNotaAvaliacao(value)}/>
  )
}