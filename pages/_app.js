import '../styles/globals.css'

//Internal Import
import { NavBar } from '../components/ComponentsIndex'


const MyApp = ({ Component, pageProps }) => (
  <div>
    <NavBar />
    <Component {...pageProps} />
  </div>
)

export default MyApp
