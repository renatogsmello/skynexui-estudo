import { navItens } from "../navItens"
import { NavItens } from "./NavItens"
export default function Sidenav() {
	return (
		<>
			<div className="navWrapper">
				<nav>
					{navItens.map((navItem, index) => {
						return <NavItens itens={navItem} key={index} />
					})}
				</nav>
				<button type="button">
					<i className="fas fa-arrows-alt-h"></i>Minimizar / Expandir
				</button>
			</div>
			<style jsx>{`
				.navWrapper {
					display: flex;
					flex-direction: column;
					width: 280px;
					border-right: 2px solid #0166a5;
					background-color: #f5f5f5;
					justify-content: space-between;
				}
				button {
					border: none;
					padding: 1rem;
					border-top: 1px solid #0d384b;
					color: #0d384b;
				}
				i {
					margin-right: 0.5rem;
					font-size: 1em;
				}
			`}</style>
		</>
	)
}
