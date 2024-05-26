import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Events from './Events/Events'
import Profile from './Profile/Profile'
import Navbar from './Templates/Navbar'
import RankingsPage from './Rankings/rankings'

const App: React.FC = () => (
	<Router>
		<Routes>
			{/* Public Pages */}
			<Route element={<Navbar />}>
				<Route path="/*" element={<Home />} />
				<Route path="/events" element={<Events />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/rankings" element={<RankingsPage />} />
			</Route>
		</Routes>
	</Router>
)

export default App
