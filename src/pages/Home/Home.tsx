import './Home.css'
import EventBox from '../EventBox/EventBox'
import { Flex } from '@chakra-ui/react'
import eventsData from '../../../data/events.json'

const Home: React.FC = () => {
	const events = eventsData

	return (
		<Flex
			height="100vh"
			flexDir="column"
			alignItems="center"
			paddingTop="40px"
			gap="5px"
			overflowX="hidden"
		>
			{events.map((event) => (
				<EventBox key={event.id} event={event} />
			))}
		</Flex>
	)
}

export default Home
