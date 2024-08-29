
import {Navigate, Route, Routes} from 'react-router-dom'
import Home from '@screens/home'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route index path='/' element={<Home />} />
      <Route path='*' element={<Navigate to={'/'} />} />
    </Routes>
  )
}