import './EventBox.css'
import { Flex, Box, Avatar } from '@chakra-ui/react'

interface EventBoxProps {
	event: {
		name: string
		date: string
		time: string
		title: string
		description: string
	}
}

const EventBox: React.FC<EventBoxProps> = ({ event }) => {
	return (
		<Flex
			height="auto"
			flexDir="column"
			alignItems="center"
			paddingTop="40px"
		>
			<Box
				bg="tomato"
				w="90%"
				maxW="800px"
				mx="auto"
				color="white"
				px="40px"
			>
				<div className="name-date-time-big">
					<Avatar />
					<div className="name-date-time-small">
						<h3 className="name">{event.name}</h3>
						<p>
							{' '}
							{event.date} {event.time}
						</p>
					</div>
				</div>

				<div className="title-desc">
					<h2 className="event-title">{event.title}</h2>
					<div className="event-desc">
						<p>{event.description}</p>
					</div>
				</div>
			</Box>
		</Flex>
	)
}

export default EventBox
