import styled from "styled-components";
import { FaDropbox } from "react-icons/fa";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;

	@media (min-width: 1024px) {
		max-width: 480px;
	}
`;

export const Navigation = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 16px 32px;
	min-height: 60px;

	> h1 {
		display: flex;
		align-items: center;

		> span {
			color: var(--color-quaternary);
			font-size: 28px;
			margin-left: 12px;
		}
	}

	> button {
		background: none;
		border: none;
		color: var(--color-quaternary);
		font-size: 24px;
		font-weight: 600;
		outline: 0;
		cursor: pointer;
	}

	@media (min-width: 1024px) {
		> h1 {
			display: none;
		}
	}
`;

export const DropboxLogo = styled(FaDropbox)`
	width: 36px;
	height: 32px;
	fill: var(--color-blue);
`;

export const Form = styled.form`
	display: flex;
	height: 100%;
	flex-direction: column;
	justify-content: center;
	padding: 0 32px;
	max-width: 480px;
	margin: 0 auto;

	>.title{
		font-size: 24px;
		font-weight: 600;
	}

	>.subtitle{
		font-size: 16px;
		margin-top: 4px;
	}

	> input {
		margin-top: 16px;
		background: var(--color-tertiary);
		border: 1px solid var(--color-border);
		font-size: 16px;
		padding: 12px 16px;
		border-radius: 4px;
	}

	> button {
		margin-top: 16px;
		padding: 12px 16px;
		font-size: 16px;
		background-color: var(--color-blue);
		color: var(--color-tertiary);
		border: none;
		border-radius: 4px;
		cursor: pointer;

		&:hover {
			background-color: var(--color-primary);
			transition: 0.5s;
		}
	}

	>.terms {
		font-size: 12px;
		margin-top: 8px;
		opacity: 0.5;
	}
`;
