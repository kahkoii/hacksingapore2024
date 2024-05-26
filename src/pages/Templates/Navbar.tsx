import { Box, Flex, Text, Link as ChakraLink } from '@chakra-ui/react'
import { NavLink, Outlet } from 'react-router-dom'
import { FaHome, FaCalendarDay } from 'react-icons/fa'
import { FaChartSimple, FaRegUser } from 'react-icons/fa6'

const Navbar: React.FC = () => (
	<>
		<Outlet />
		<Flex
			flexDir="row"
			boxShadow="xl"
			width="100%"
			position="fixed"
			shadow="0px -6px 5px rgb(0, 0, 0, 0.2)"
			borderRadius="30px 30px 0 0"
			bottom="-1px"
			height="80px"
			gap="10vw"
			justifyContent="center"
			color="#929292"
			bgColor="#fff"
		>
			<Flex
				flexDir="column"
				alignItems="center"
				justifyContent="center"
				textAlign="center"
			>
				<ChakraLink
					as={NavLink}
					to="/"
					_activeLink={{ color: '#FFD230' }}
				>
					<Box fontSize="40px" alignContent="center">
						<FaHome />
					</Box>
					<Text fontSize="12px" marginTop="-2px">
						HOME
					</Text>
				</ChakraLink>
			</Flex>
			<Flex
				flexDir="column"
				alignItems="center"
				justifyContent="center"
				textAlign="center"
			>
				<ChakraLink
					as={NavLink}
					to="/events"
					_activeLink={{ color: '#FFD230' }}
				>
					<Box
						paddingLeft="4px"
						fontSize="36px"
						alignContent="center"
					>
						<FaCalendarDay />
					</Box>
					<Text fontSize="12px" marginTop="2px">
						EVENTS
					</Text>
				</ChakraLink>
			</Flex>
			<Flex
				flexDir="column"
				alignItems="center"
				justifyContent="center"
				textAlign="center"
			>
				<ChakraLink
					as={NavLink}
					to="/rankings"
					_activeLink={{ color: '#FFD230' }}
				>
					<Box
						paddingLeft="8px"
						fontSize="40px"
						alignContent="center"
					>
						<FaChartSimple />
					</Box>
					<Text fontSize="12px" marginTop="-2px">
						RANKINGS
					</Text>
				</ChakraLink>
			</Flex>
			<Flex
				flexDir="column"
				alignItems="center"
				justifyContent="center"
				textAlign="center"
			>
				<ChakraLink
					as={NavLink}
					to="/profile"
					_activeLink={{ color: '#FFD230' }}
				>
					<Box
						paddingLeft="5px"
						fontSize="36px"
						alignContent="center"
					>
						<FaRegUser />
					</Box>
					<Text fontSize="12px" marginTop="2px">
						PROFILE
					</Text>
				</ChakraLink>
			</Flex>
		</Flex>
	</>
)

export default Navbar
