import { Flex, Box, Text } from '@chakra-ui/react'
import Avatar from 'boring-avatars'

const Profile: React.FC = () => (
	<Flex flexDir="column" alignItems="center">
		<Box
			height="68px"
			boxShadow="lg"
			bgColor="#fff"
			width="100%"
			alignContent="center"
		>
			<Text fontSize="20px" fontWeight="bold" textAlign="center">
				Profile
			</Text>
		</Box>
		<Flex
			flexDir="column"
			borderRadius="20px"
			marginTop="24px"
			padding="36px"
			boxShadow="lg"
			gap="8px"
		>
			<Text textAlign="center" fontWeight="bold" fontSize="2xl">
				@Anytng
			</Text>
			<Avatar
				size={300}
				name="RANDOMSEEDHERE"
				variant="marble"
				colors={['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90']}
			/>
			<Flex flexDir="row" marginTop="20px" justifyContent="space-between">
				<Text>Name:</Text>
				<Text>Tan Lam Choo</Text>
			</Flex>

			<Flex flexDir="row" justifyContent="space-between">
				<Text>Total Volunteer Hours:</Text>
				<Text>64</Text>
			</Flex>
		</Flex>
	</Flex>
)

export default Profile
