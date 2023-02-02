import { NavItens } from "./NavItens"

export const Dropdown = ({ subMenuItens, dropdown }) => {
	// console.log(subMenuItens)
	return (
		<>
			<ul className={`dropdown ${dropdown ? "show" : ""}`}>
				{subMenuItens.map((subMenuItem, index) => (
					<li key={index} className="subMenuItem">
						<a href="/#">{subMenuItem.title}</a>
					</li>
				))}
			</ul>
			<style jsx>
				{`
					.dropdown {
						display: none;
					}
					.dropdown.show {
						display: block;
					}
					ul {
						padding-left: 1rem;
					}
					li {
						padding: 1rem;
					}
				`}
			</style>
		</>
	)
}
