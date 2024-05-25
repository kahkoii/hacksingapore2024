import { Flex } from '@chakra-ui/react'
import EventBox from './EventBox'
import eventsData from '../../../data/events.json'

const Events: React.FC = () => {
	return (
		<Flex
			flexDir="column"
			alignItems="center"
			gap="20px"
			border="1px solid black"
			minHeight="100vh"
			padding="20px 0"
			marginBottom="80px"
		>
			{eventsData.map((event) => (
				<EventBox key={event.id} event={event} />
			))}
		</Flex>
	)
}

export default Events
