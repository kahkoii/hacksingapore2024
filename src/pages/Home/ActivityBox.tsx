/* eslint-disable react/prop-types */
import { Flex, Box, Text, Image } from '@chakra-ui/react'
import Avatar from 'boring-avatars'
import { useState } from 'react'
import { FaRegArrowAltCircleUp } from 'react-icons/fa'

interface ActivityBoxProps {
	activity: {
		id: number
		username: string
		name: string
		date: string
		time: string
		organizer: string
		likes: number
		image: string
	}
}

const ActivityBox: React.FC<ActivityBoxProps> = ({ activity }) => {
	const [like, setLike] = useState(false)

	const handleClick = () => {
		setLike(!like)
	}

	return (
		<Flex flexDir="row" alignItems="center">
			<Flex
				flexDir="column"
				borderRadius="20px"
				maxWidth="600px"
				alignItems="center"
				boxShadow="md"
				backgroundColor="white"
			>
				<Flex flexDir="row" padding="20px" gap="14px">
					<Avatar
						size={50}
						name={activity.username}
						variant="marble"
						colors={[
							'#92A1C6',
							'#146A7C',
							'#F0AB3D',
							'#C271B4',
							'#C20D90',
						]}
					/>
					<Text display="inline">
						<a style={{ fontWeight: 'bold' }}>
							{activity.username}
						</a>{' '}
						took part in{' '}
						<a style={{ fontWeight: 'bold' }}>{activity.name}</a>{' '}
						organized by {activity.organizer} on {activity.date}
					</Text>
					<Flex
						flexDir="column"
						alignItems="center"
						gap="4px"
						_hover={{ cursor: 'pointer' }}
						onClick={handleClick}
						color={like ? 'lime' : '#000'}
					>
						{like ? activity.likes + 1 : activity.likes}
						<FaRegArrowAltCircleUp size="20px" />
					</Flex>
				</Flex>
				{activity.image != '' && (
					<Image
						src={activity.image}
						width="100%"
						borderRadius="0 0 20px 20px"
					/>
				)}
			</Flex>
		</Flex>
	)
}

export default ActivityBox
