
import "./style.css"
import "./reset.css"

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