// import { PaginationWrapper, ObserverBlock, CardWrapper } from './styles'
import styled from 'styled-components'
import { useDynamicPagination } from '../../hooks/useDynamicPagination'
import UniversityCard from '../UniversityCard'

export const PaginationWrapper = styled.div``
export const ObserverBlock = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	height: 50px;
`
export const CardWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	grid-gap: 20px;
	padding: 20px;
`

export const DynamicPagination = () => {
	const { universitiesData, loading, ref } = useDynamicPagination()

	return (
		<>
			<PaginationWrapper>
				<CardWrapper>
					{universitiesData?.length > 0 &&
						universitiesData.map((university, index) => (
							<UniversityCard key={index} data={university} />
						))}
					{!loading && <ObserverBlock ref={ref} />}
				</CardWrapper>
				{loading && 'Загрузка...'}
			</PaginationWrapper>
		</>
	)
}

export default DynamicPagination