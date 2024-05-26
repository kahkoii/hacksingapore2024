import React, { useState } from 'react'
import {
	Flex,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text,
} from '@chakra-ui/react'
import usersData from '../../../data/rankings.json'

const RankingsPage: React.FC = () => {
	const [activeTab, setActiveTab] = useState(0)

	const { friendsRankings, singaporeRankings } = usersData

	return (
		<Flex direction="column" alignItems="center">
			<Tabs
				isFitted
				variant="soft-rounded"
				colorScheme="yellow"
				onChange={(index) => setActiveTab(index)}
			>
				<TabList padding="0 20px" marginTop="90px">
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
									marginTop="20px"
									backgroundColor="gray.200"
									p="4"
									borderRadius="lg"
									textAlign="left"
									width="100%"
									justifyContent="space-between"
								>
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
										marginTop="20px"
										backgroundColor="gray.200"
										p="4"
										borderRadius="lg"
										textAlign="left"
										width="100%"
										justifyContent="space-between"
									>
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
