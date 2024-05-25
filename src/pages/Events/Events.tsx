import { Box, Flex, Text } from '@chakra-ui/react'
import EventBox from './EventBox'
import eventsData from '../../../data/events.json'

const Events: React.FC = () => (
	<>
		<Box height="68px" boxShadow="lg" bgColor="#fff" alignContent="center">
			<Text fontSize="20px" fontWeight="bold" textAlign="center">
				Events
			</Text>
		</Box>
		<Flex
			flexDir="column"
			alignItems="center"
			gap="20px"
			minHeight="100vh"
			padding="20px 0"
			marginBottom="80px"
		>
			{eventsData.map((event) => (
				<EventBox key={event.id} event={event} />
			))}
		</Flex>
	</>
)

export default Events
