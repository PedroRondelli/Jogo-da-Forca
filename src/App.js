
import "./style.css"
import "./reset.css"
import palavras from "./palavras";
import forca0 from "./assets/forca0.png"
import forca1 from "./assets/forca1.png"
import forca2 from "./assets/forca2.png"
import forca3 from "./assets/forca3.png"
import forca4 from "./assets/forca4.png"
import forca5 from "./assets/forca5.png"
import forca6 from "./assets/forca6.png"
import { useState } from "react";
const arrayImagens = [forca0, forca1, forca2, forca3, forca4, forca5, forca6]
const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]



export default function App() {
    const [estagio, setEstagio] = useState(0)
    function mudarestagio() {
        console.log("opa")
        setEstagio(estagio + 1)
    }
    return (
        <>
            <div className="superior">
                <img onClick={mudarestagio} src={arrayImagens[estagio]} alt="forca" />
                <button>Escolha a palavra</button>
            </div>
            <div className="espaço"></div>
            <div className="tecladoeinput">
                <div className="teclado">
                    {alfabeto.map(l => <button className="tecladoAtivado">{l.toUpperCase()}</button> )}
                </div>
                <div className="chute" >
                    <p>Já sei a palavra!</p>
                    <input></input>
                    <button>Chutar</button>
                </div>
            </div>
        </>
    )

}