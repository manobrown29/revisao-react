import { useState } from "react"

export function App() {
    const [numero1, setNumero1] = useState(0)
    const [numero2, setNumero2] = useState(0)
    const [resultado, setResultado] = useState(0)
    const [jaSomei, setJaSomei] = useState(false)

    function somar(e) {
        e.preventDefault()
        setResultado(numero1 + numero2)

        if(jaSomei === false) {
            setJaSomei(true)
        }
    } 
    

    return (
        <div>
            <h1>Calculadora de Numero</h1>
            <form action="">
                <input type="number" placeholder="Numero 1" onChange={(e) => setNumero1(e.target.valueAsNumber)}/>
                <input type="number" placeholder="Numero 2"  onChange={(e) => setNumero2(e.target.valueAsNumber)}/>
                <button onClick={somar}>Calcular</button>
            </form>

            {jaSomei === true && <p>{resultado}</p>}
        </div>
    )
}