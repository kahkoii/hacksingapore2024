import './Home.css'
import EventBox from '../EventBox/EventBox'
import { Flex } from '@chakra-ui/react'

const Home: React.FC = () => {
	const events = [
		{
			id: 1,
			name: 'Username',
			date: '2024-05-25',
			time: '10:00 AM',
			title: 'Event #1',
			description: 'Description for event one.',
		},
		{
			id: 2,
			name: 'Username',
			date: '2024-05-26',
			time: '10:00 AM',
			title: 'Event #2',
			description: 'Description for event two.',
		},
	]

	return (
		<Flex
			height="100vh"
			flexDir="column"
			alignItems="center"
			paddingTop="40px"
			gap="20px"
		>
			{events.map((event) => (
				<EventBox key={event.id} event={event} />
			))}
		</Flex>
	)
}

export default Home
