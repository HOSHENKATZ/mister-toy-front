import { Provider } from 'react-redux';
import './assets/style/main.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router'
import { AppHeader } from './assets/cmps/AppHeader.jsx';
import { AppFooter } from './assets/cmps/AppFooter.jsx';
import { HomePage } from './assets/pages/HomePage.jsx'
import { AboutUs } from './assets/pages/AboutUs.jsx';
import { ToyIndex } from './assets/pages/ToyIndex.jsx';
import { store } from './store/store.js';
import { ToyEdit } from './assets/pages/ToyEdit.jsx'
import { ToyDetails } from './assets/pages/ToyDetails.jsx';
import {DashBoard} from './assets/pages/DashBoard.jsx'
import { ReviewIndex } from './assets/pages/ReviewIndex.jsx';
import { LoginSignup } from './assets/cmps/LoginSignup.jsx';
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
              <Route element={<ToyDetails />} path="/toy/:toyId" />
              <Route element={<ToyEdit />} path="/toy/edit/:toyId?" />
              <Route element={<ReviewIndex />} path="/review" />
              <Route element={<DashBoard />} path="/dash" />
              <Route element={<LoginSignup />} path="/Sign" />
            </Routes>
          </main>
          <AppFooter />
        </section>
      </Router>
    </Provider>


  )


}
