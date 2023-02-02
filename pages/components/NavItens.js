import { useState } from "react"
import { Dropdown } from "./Dropdown"

export const NavItens = ({ itens }) => {
	const [dropdown, setDropdown] = useState(false)
	return (
		<>
			<li>
				{itens.navSubItens ? (
					<>
						<a
							role="button"
							aria-haspopup="menu"
							aria-expanded={dropdown ? "true" : "false"}
							onClick={() => {
								setDropdown((prev) => !prev)
							}}
						>
							<i className={itens.icon}></i>
							{itens.navItem}
						</a>
						<Dropdown dropdown={dropdown} subMenuItens={itens.navSubItens} />
					</>
				) : (
					<a href="/#">
						<i className={itens.icon}></i>
						{itens.navItem}
					</a>
				)}
			</li>
			<style jsx>
				{`
					nav {
						display: flex;
						flex-direction: column;
						margin-bottom: auto;
					}
					li {
						padding: 1rem;
					}
					li:hover {
						background-color: #e7e7e7;
					}
					a {
						display: block;
						font-weight: 500;
						font-style: normal;
					}
					i {
						margin-right: 0.5rem;
					}
				`}
			</style>
		</>
	)
}
