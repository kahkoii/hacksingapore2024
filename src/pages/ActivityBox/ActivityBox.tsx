import './ActivityBox.css'
import { Flex, Box, Avatar } from '@chakra-ui/react'

interface ActivityBoxProps {
	activity: {
		name: string
		date: string
		time: string
		title: string
		description: string
	}
}

const ActivityBox: React.FC<ActivityBoxProps> = ({ activity }) => {
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
						<h3 className="name">{activity.name}</h3>
						<p>
							{' '}
							{activity.date} {activity.time}
						</p>
					</div>
				</div>

				<div className="title-desc">
					<h2 className="activity-title">{activity.title}</h2>
					<div className="activity-desc">
						<p>{activity.description}</p>
					</div>
				</div>
			</Box>
		</Flex>
	)
}

export default ActivityBox
