import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { GlobalCss } from './styles'

import { store } from './store'
import RoutesPages from './routes'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <RoutesPages />
      </BrowserRouter>
    </Provider>
  )
}

export default App
