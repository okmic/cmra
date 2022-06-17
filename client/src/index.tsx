import ReactDOM from 'react-dom/client';
import React, { memo } from 'react';
import reportWebVitals from './reportWebVitals'
import './index.css';
import { useRoutes } from './hooks/routes'
import { BrowserRouter } from 'react-router-dom'

//redux
import { store } from './redux/store'
import { Provider } from 'react-redux'



const App = memo(() => {


  const routes = useRoutes()

  return <BrowserRouter>
        {routes}
    </BrowserRouter>
})


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();


