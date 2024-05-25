import { Flex, Box, Text } from '@chakra-ui/react'
/* eslint-disable react/prop-types */

interface EventBoxProps {
	event: {
		id: number
		title: string
		date: Date
		time: string
		organizer: string
		category: string
		description: string
		image: string
	}
}

const EventBox: React.FC<EventBoxProps> = ({ event }) => (
	<Flex
		flexDir="column"
		borderRadius="20px"
		width="90vw"
		maxWidth="600px"
		boxShadow="md"
		_hover={{ cursor: 'pointer' }}
	>
		<Box
			bgImage={event.image}
			height="120px"
			width="100%"
			borderRadius="20px 20px 0px 0px"
		/>
		<Flex
			flexDir="row"
			padding="12px 24px"
			bgColor="#fff"
			borderRadius="0 0 20px 20px"
			justifyContent="space-between"
		>
			<Flex flexDir="column" justifyContent="center">
				<Text fontSize="2xl" fontWeight="semibold">
					{event.title}
				</Text>
				<Text fontSize="lg" fontWeight="normal">
					{event.date.toString()} @ {event.time}
				</Text>
			</Flex>
			<Flex
				flexDir="column"
				justifyContent="center"
				alignItems="end"
				textAlign="end"
			>
				<Text fontSize="xl" fontWeight="normal">
					{event.organizer}
				</Text>
				<Text fontSize="lg" fontWeight="light">
					{event.category}
				</Text>
			</Flex>
		</Flex>
	</Flex>
)

export default EventBox
