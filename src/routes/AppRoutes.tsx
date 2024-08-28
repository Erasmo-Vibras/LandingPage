
import {Navigate, Route, Routes} from 'react-router-dom'
import Home from '@screens/home'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route index path='/LandingPage' element={<Home />} />
      <Route path='*' element={<Navigate to={'/LandingPage'} />} />
    </Routes>
  )
}