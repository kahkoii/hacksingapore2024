import { Box, Flex, Text, Select, Circle } from '@chakra-ui/react'
import EventBox from './EventBox'
import { FaSearch } from 'react-icons/fa'
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
			width="100%"
			margin="40px 0px 20px"
		>
			<Flex
				flexDir="row"
				width="100%"
				maxWidth="800px"
				padding="8px"
				gap="12px"
				alignItems="center"
			>
				<Select placeholder="Categories">
					<option value="animals">Animals</option>
					<option value="children">Children</option>
					<option value="elderly">Elderly</option>
					<option value="environment">Environment</option>
					<option value="impoverished">Impoverished</option>
				</Select>
				<Circle
					padding="14px"
					bgColor="#00C2A2"
					color="white"
					_hover={{ cursor: 'pointer' }}
					onClick={() => console.log('search')}
				>
					<FaSearch />
				</Circle>
			</Flex>
		</Flex>
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
