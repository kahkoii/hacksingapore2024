import { Flex, Box, Text } from '@chakra-ui/react'
/* eslint-disable react/prop-types */

interface EventBoxProps {
	event: {
		id: number
		title: string
		date: string
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
	>
		<Box
			bgColor={event.image}
			height="120px"
			width="100%"
			borderRadius="20px 20px 0px 0px"
		/>
		<Flex
			flexDir="row"
			padding="12px"
			bgColor="#fff"
			borderRadius="0 0 20px 20px"
		>
			<Flex flexDir="column">
				<Text fontSize="2xl" fontWeight="semibold">
					{event.title}
				</Text>
				<Text fontSize="lg" fontWeight="light">
					{event.date} @ {event.time}
				</Text>
			</Flex>
		</Flex>
	</Flex>
)

export default EventBox
