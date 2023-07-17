import { useRef } from "react"
import { useSearchParams } from 'react-router-dom'

const Buscador = () => {
    const [, setSearchParams] = useSearchParams()

    const ref = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        const value = ref.current.value

        if (value === '') {
            setSearchParams({})
            return
        }

        setSearchParams({
            search: value
        })
    }

    const handleReset = () => {
        setSearchParams({})
    }

    return (
      <form className="p-1" onSubmit={handleSubmit}>
        <button
          type="submit"
          className="bg-indigo-500/100 hover:bg-indigo-700 rounded-l-lg mx-0 px-4 py-1 text-white"
        >
          Buscar
        </button>
        <input ref={ref} className="form-control  px-2 py-1" type="text" />

        <button
          onClick={handleReset}
          type="reset"
          className="bg-indigo-500/100 hover:bg-indigo-700 rounded-r-lg mx-0 px-4 py-1 text-white"
        >
          X
        </button>
      </form>
    );
}

export default Buscador