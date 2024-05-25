import {
	Box,
	Flex,
	Text,
	Select,
	Circle,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
	Button,
	useDisclosure,
} from '@chakra-ui/react'
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import DatePicker from 'react-datepicker'
import EventBox from './EventBox'
import eventsJson from '../../../data/events.json'
import 'react-datepicker/dist/react-datepicker.css'
import './datepicker.css'

const Events: React.FC = () => {
	const [category, setCategory] = useState('none')
	const [startDate, setStartDate] = useState(new Date())
	const [endDate, setEndDate] = useState(new Date())
	const [eventsData, setEventsData] = useState(eventsJson)
	const [modalData, setModalData] = useState(eventsData[0])
	const { isOpen, onOpen, onClose } = useDisclosure()

	const handleSelectChange = (
		event: React.ChangeEvent<HTMLSelectElement>,
	) => {
		setCategory(event.target.value)
	}

	const search = () => {
		const list = []
		for (let i = 0; i < eventsJson.length; i++) {
			if (category != 'none' && eventsJson[i].category != category) {
				continue
			}
			const d = eventsJson[i].date.split('-')
			const dateObject = new Date(+d[0], +d[1] - 1, +d[2])
			if (dateObject < startDate || dateObject > endDate) {
				continue
			}
			list.push(eventsJson[i])
		}
		setEventsData(list)
	}

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
					<Select onChange={handleSelectChange}>
						<option value="none">Categories</option>
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
						onClick={() => search()}
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
					<Box
						key={event.id}
						onClick={() => {
							console.log('hello')
							setModalData(event)
							onOpen()
						}}
					>
						<EventBox event={event} />
					</Box>
				))}
			</Flex>
			<Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<Box
						height="240px"
						borderRadius="5px 5px 0 0"
						bgImage={modalData.image}
						bgSize="cover"
					></Box>
					<ModalHeader>{modalData.title}</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Text fontWeight="bold" mb="1rem">
							{modalData.date} @ {modalData.time}
						</Text>
						<Text fontWeight="normal" mb="1rem">
							{modalData.description}
						</Text>
						<Text fontWeight="normal" mb="1rem">
							Organized by: {modalData.organizer}
						</Text>
					</ModalBody>

					<ModalFooter>
						<Button colorScheme="green" mr={3} onClick={onClose}>
							Register
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</Flex>
	)
}

export default Events
