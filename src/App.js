
import "./style.css"
import "./reset.css"
import palavras from "./palavras";

export default function App() {
    const nomes = [
		<li>João</li>,
		<li>Maria</li>,
		<li>José</li>
	];
    return (

        <div className="daleo">
            {nomes.map((n) => n)}
        </div>

    )
}