import { Button, Container } from '@mui/material'
import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { NavBar } from './common/NavBar'
import { NotificationProvider } from './context/notification.context'
import { AppRouter } from './Router'

function App() {
  return (
    <NotificationProvider>
      <BrowserRouter>
        {/* se usa cuando usamos lazy load */}
        <Suspense fallback={'Cargando...'}>
          {/* <NavBar /> */}
          {/* <Container sx={{ mt: 9 }} maxWidth="xl">
        <Button variant="contained">Hola mundo</Button>
      </Container> */}
          <AppRouter />
        </Suspense>
      </BrowserRouter>
    </NotificationProvider>
  )
}

export default App
