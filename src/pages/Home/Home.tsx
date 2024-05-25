import './Home.css'
import ActivityBox from '../ActivityBox/ActivityBox'
import { Flex } from '@chakra-ui/react'

const Home: React.FC = () => {
	const activities = [
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
			{activities.map((activity) => (
				<ActivityBox key={activity.id} activity={activity} />
			))}
		</Flex>
	)
}

export default Home
