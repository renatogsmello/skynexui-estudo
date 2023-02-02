import { Box, Text } from "@skynexui/components"

export default function Header() {
	return (
		<>
			<header>
				<h1>SIMP</h1>
				<div className="headerInfo">
					<span>Renato Mello</span>
					<a href="/">Sair</a>
				</div>
			</header>
			<style jsx>{`
				header {
					background: #0d384b;
					width: 100%;
					height: 50px;
					padding-left: 1rem;
					padding-right: 1rem;
					display: flex;
					justify-content: space-between;
				}
				h1 {
					font-weight: 600;
					font-size: 28px;
					line-height: 33px;
					color: #ffffff;
					margin: auto 0;
				}
				.headerInfo {
					display: flex;
					align-items: center;
				}
				span {
					margin-right: 1rem;
					color: #fff;
				}
				a {
					padding: 10px 20px;
					background: rgba(0, 0, 0, 0.5);
					border-radius: 4px;
					font-weight: 400;
					font-size: 15px;
					line-height: 18px;
					color: #ffffff;
				}
			`}</style>
		</>
	)
}
