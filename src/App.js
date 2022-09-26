
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
let palavraArray = []
let palavraMomento = ""
let gabarito = ""
let corDaPalavra=""




export default function App() {
    const [estagio, setEstagio] = useState(0)
    const [molde, setMolde] = useState([])
    const [liberado, setLiberado] = useState(false)
    const [terminou,setTerminou]=useState(false)
    
    function mudarestagio() {
        let teste2 = estagio + 1
        if (teste2 === 6) {
            alert("Perdeu!")
            setLiberado(false)
            setMolde(palavraArray)
            setTerminou(true)
            corDaPalavra="perdeu"
            
        }
        setEstagio(teste2)
    }
    function sortearPalavra() {
        setLiberado(true)
        const sorteado = Math.floor(Math.random() * palavras.length);
        palavraArray = Array.from(palavras[sorteado])
        gabarito = palavras[sorteado]
        console.log(palavraArray)
        setMolde(palavraArray.map((e, idx) => <span key={idx} >_</span>))
        if(estagio>0 || terminou ){
            setEstagio(0)
            setTerminou(false)
        }


    }


    /*const letraNormal = e.normalize('NFD').replace(/[\u0300-\u036f]/g, "")*/

    function escolherLetra(event, letra) {
        const arrayDeComparacao = palavraArray.map((e) => e.normalize('NFD').replace(/[\u0300-\u036f]/g, ""))
        event.target.disabled = true;
        event.target.className += " desativados"
        console.log(event.target);

        let indices = [];
        let elemento = letra;
        let idx = arrayDeComparacao.indexOf(elemento);
        if (idx !== -1) {
            while (idx !== -1) {
                indices.push(idx);
                idx = arrayDeComparacao.indexOf(elemento, idx + 1);
            }
            console.log(indices)
            //substituir no molde onde a letra existe
            const novoMolde = [...molde]
            indices.forEach((l) => {
                novoMolde[l] = palavraArray[l]
            })
            console.log(novoMolde)
            const arrayVerificacao = novoMolde.filter((elemento) => {
                if (typeof (elemento) === "object") {
                    return true
                } else {
                    return false
                }
            })
            if (arrayVerificacao.length === 0) {
                alert("Ganhou!")
                setLiberado(false)
                setMolde(palavraArray)
                setTerminou(true)
                corDaPalavra="ganhou"
                
            }

            setMolde(novoMolde)
        } else {
            mudarestagio()
        }

    }
    function guardarPalavra(event) {
        palavraMomento = event.target.value
        console.log(palavraMomento)
    }
    function compararPalavra() {
        if (palavraMomento === gabarito && palavraMomento!=="" ) {
            alert("ganhou!")
            setLiberado(false)
            setMolde(palavraArray)
            setTerminou(true)
            corDaPalavra="ganhou"
            
        } else {
            alert("perdeu!")
            
            setLiberado(false)
            setEstagio(6)
            setMolde(palavraArray)
            setTerminou(true)
            corDaPalavra="perdeu"
            
        }
    }
    
    return (
        <>
            <div className="superior">
                <img data-identifier="game-image" src={arrayImagens[estagio]} alt="forca" />
                <button data-identifier="choose-word" onClick={sortearPalavra} >Escolha a palavra</button>
                <div data-identifier="word" className={(terminou===false)? "palavraSorteada":corDaPalavra}>
                    {molde}
                </div>
            </div>
            <div className="espaço"></div>
            <div className="tecladoeinput">
                <div className="teclado">
                    {alfabeto.map((l, idx) => <button data-identifier="letter" disabled={liberado === false ? true : false} key={idx} onClick={(event) => escolherLetra(event, l)} className={liberado === false ? "desativados" : "tecladoAtivado"}>{l.toUpperCase()}</button>)}
                </div>
                <div className="chute" >
                    <p>Já sei a palavra!</p>
                    <input data-identifier="type-guess" disabled={liberado === false ? true : false} onChange={guardarPalavra} ></input>
                    <button disabled={liberado === false ? true : false} data-identifier="guess-button" onClick={compararPalavra} >Chutar</button>
                </div>
            </div>
        </>
    )

}