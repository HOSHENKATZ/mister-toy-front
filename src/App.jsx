import { Provider } from 'react-redux';
import './assets/style/main.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router'
import { AppHeader } from './assets/cmps/AppHeader.jsx';
import { AppFooter } from './assets/cmps/AppFooter.jsx';
import { HomePage } from './assets/pages/HomePage.jsx'
import { AboutUs } from './assets/pages/AboutUs.jsx';
import { ToyIndex } from './assets/pages/ToyIndex.jsx';
import { store } from './store/store.js';
import { ToyEdit } from './assets/pages/ToyEdit.jsx'

export function App() {

  return (
    <Provider store={store}>

      <Router>
        <section className='app'>
          <AppHeader />
          <main className='main-layout'>
            <Routes>
              <Route element={<HomePage />} path="/" />
              <Route element={<AboutUs />} path="/about" />
              <Route element={<ToyIndex />} path="/toy" />
              <Route element={<ToyEdit />} path="/toy/edit/:carId?" />
            </Routes>
          </main>
          <AppFooter />
        </section>
      </Router>
    </Provider>


  )


}
