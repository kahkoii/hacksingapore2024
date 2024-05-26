import { Flex, Box, Text } from '@chakra-ui/react'
import ActivityBox from './ActivityBox'
import activitiesJson from '../../../data/activities.json'

const Home: React.FC = () => {
	return (
		<Flex
			flexDir="column"
			alignItems="center"
			marginBottom="40px"
			paddingBottom="60px"
			bgColor="#FFD230"
		>
			<Box
				height="68px"
				boxShadow="lg"
				bgColor="#fff"
				width="100%"
				alignContent="center"
			>
				<Text fontSize="20px" fontWeight="bold" textAlign="center">
					Activity Feed
				</Text>
			</Box>
			<Flex flexDir="column" marginTop="20px" gap="12px" padding="0 10px">
				{activitiesJson.map((activity) => (
					<ActivityBox key={activity.id} activity={activity} />
				))}
			</Flex>
		</Flex>
	)
}

export default Home
