import '../styles/globals.css'

//Internal Import
import { NavBar, Footer } from '../components/ComponentsIndex'
// import { Footer } from '../components/Footer/Footer'


const MyApp = ({ Component, pageProps }) => (
  <div>
    <NavBar />
    <Component {...pageProps} />
    <Footer />
  </div>
)

export default MyApp
