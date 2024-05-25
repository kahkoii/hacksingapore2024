import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Navbar from './Templates/Navbar'

const App: React.FC = () => (
	<Router>
		<Routes>
			{/* Public Pages */}
			<Route element={<Navbar />}>
				<Route path="/*" element={<Home />} />
			</Route>
		</Routes>
	</Router>
)

export default App
