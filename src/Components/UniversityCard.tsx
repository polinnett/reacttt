import { UniversityCardData } from '../Interfaces/IUniversityCardData'
import { FC, useState } from 'react'


export const UniversityCard: FC<{ data: UniversityCardData }> = ({ data }) => {
	const [counter, setCounter] = useState(0);

	const counterToggle = () => {
		setCounter((prev) => prev + 1)
	}
	return (
		<div onClick={counterToggle}>
			<p>{`Счетчик кликов: ${counter}`}</p>
			<h1>{data.name}</h1>
			<span>{data.country}</span>
		</div>
	)
}

export default UniversityCard