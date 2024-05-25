import { Box, Flex, Text, Select, Circle } from '@chakra-ui/react'
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import DatePicker from 'react-datepicker'
import EventBox from './EventBox'
import eventsData from '../../../data/events.json'
import 'react-datepicker/dist/react-datepicker.css'
import './datepicker.css'

const Events: React.FC = () => {
	const [startDate, setStartDate] = useState(new Date())
	const [endDate, setEndDate] = useState(new Date())

	return (
		<Flex flexDir="column" alignItems="center">
			<Box
				height="68px"
				boxShadow="lg"
				bgColor="#fff"
				width="100%"
				alignContent="center"
			>
				<Text fontSize="20px" fontWeight="bold" textAlign="center">
					Events
				</Text>
			</Box>
			<Flex
				flexDir="column"
				alignItems="center"
				width="100%"
				margin="40px 0 0 0"
				padding="0 20px 30px 20px"
				borderBottom="1px solid #ccc"
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
				<Flex
					flexDir={{ base: 'column', md: 'row' }}
					gap={{ base: '10px', md: '0' }}
					width="100%"
					maxWidth="800px"
					padding="8px"
					alignItems="center"
				>
					<Flex flexDir="row" alignItems="center" width="100%">
						<Text fontWeight="bold" width="60px">
							From
						</Text>
						<DatePicker
							selected={startDate}
							onChange={(date) => setStartDate(date)}
							wrapperClassName="datePickerStart"
							dateFormat="dd/MM/yyyy"
						/>
					</Flex>
					<Flex flexDir="row" alignItems="center" width="100%">
						<Text fontWeight="bold" width="60px" textAlign="center">
							To
						</Text>
						<DatePicker
							selected={endDate}
							onChange={(date) => setEndDate(date)}
							wrapperClassName="datePickerEnd"
							dateFormat="dd/MM/yyyy"
						/>
					</Flex>
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
		</Flex>
	)
}

export default Events