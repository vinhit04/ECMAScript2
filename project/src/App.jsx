import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Booking from './pages/Booking'
function App() {
    return (
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<About />} />
                <Route path="/booking" element={<Booking />} />
            </Routes>
        </BrowserRouter>
)
}

export default App
