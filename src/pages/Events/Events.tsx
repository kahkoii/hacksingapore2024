import { Flex } from '@chakra-ui/react'
import EventBox from './EventBox'

const Events: React.FC = () => {
	const events = [
		{
			id: 5,
			title: 'Monthly Shelter Cleanup',
			date: '2024-05-30',
			time: '11:00 AM',
			organizer: 'SPCA',
			category: 'animals',
			description:
				'Clean up pet shelters whilst playing with our resident cats and dogs',
			image: '#aaa',
		},
		{
			id: 6,
			title: 'Elderly Engagement Session',
			date: '2024-06-08',
			time: '11:00 AM',
			organizer: 'NTUC Health',
			category: 'elderly',
			description:
				'Chat with members of the elderly to make their day better',
			image: '#ef8272',
		},
		{
			id: 7,
			title: 'Dog Walk Morning',
			date: '2024-06-10',
			time: '09:00 AM',
			organizer: 'SPCA',
			category: 'animals',
			description:
				'Walk all of our dogs on a Sunday morning in Bishan park',
			image: '#a8118a',
		},
		{
			id: 8,
			title: 'Children Ward Visit',
			date: '2024-06-10',
			time: '03:00 PM',
			organizer: 'KKH',
			category: 'children',
			description:
				'Chat and play board games with kids in our children ward',
			image: '#0029ab',
		},
	]

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
			{events.map((event) => (
				<EventBox key={event.id} event={event} />
			))}
		</Flex>
	)
}

export default Events
