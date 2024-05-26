import React, { useState } from 'react'
import {
	Flex,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text,
	Box,
} from '@chakra-ui/react'
import usersData from '../../../data/rankings.json'
import Avatar from 'boring-avatars'

const RankingsPage: React.FC = () => {
	const [activeTab, setActiveTab] = useState(0)

	const { friendsRankings, singaporeRankings } = usersData

	return (
		<Flex
			direction="column"
			alignItems="center"
			bgColor="#FFD230"
			height="100vh"
		>
			<Box
				height="68px"
				boxShadow="lg"
				bgColor="#fff"
				width="100%"
				alignContent="center"
			>
				<Text fontSize="20px" fontWeight="bold" textAlign="center">
					Rankings
				</Text>
			</Box>
			<Tabs
				isFitted
				variant="soft-rounded"
				colorScheme="yellow"
				onChange={(index) => setActiveTab(index)}
			>
				<TabList padding="0 20px" marginTop="20px" gap="30px">
					<Tab fontSize="2xl">Friends</Tab>
					<Tab fontSize="2xl">Singapore</Tab>
				</TabList>
				<TabPanels>
					<TabPanel>
						<Flex direction="column" alignItems="center">
							{friendsRankings.map((user: any, index: number) => (
								<Flex
									key={index}
									fontSize="xl"
									marginTop="10px"
									backgroundColor="white"
									p="4"
									borderRadius="lg"
									textAlign="left"
									width="100%"
									justifyContent="space-between"
									gap="10px"
								>
									<Avatar
										size={26}
										name={user.username}
										variant="marble"
										colors={[
											'#92A1C6',
											'#146A7C',
											'#F0AB3D',
											'#C271B4',
											'#C20D90',
										]}
									/>
									<Text width="50%">{user.username}</Text>
									<Text width="50%" textAlign="right">
										{user.hours} hours
									</Text>
								</Flex>
							))}
						</Flex>
					</TabPanel>
					<TabPanel>
						<Flex direction="column" alignItems="center">
							{singaporeRankings.map(
								(user: any, index: number) => (
									<Flex
										key={index}
										fontSize="xl"
										marginTop="10px"
										backgroundColor="white"
										p="4"
										borderRadius="lg"
										textAlign="left"
										width="100%"
										justifyContent="space-between"
										gap="10px"
									>
										<Avatar
											size={26}
											name={user.username}
											variant="marble"
											colors={[
												'#92A1C6',
												'#146A7C',
												'#F0AB3D',
												'#C271B4',
												'#C20D90',
											]}
										/>
										<Text width="50%">{user.username}</Text>
										<Text width="50%" textAlign="right">
											{user.hours} hours
										</Text>
									</Flex>
								),
							)}
						</Flex>
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Flex>
	)
}

export default RankingsPage
