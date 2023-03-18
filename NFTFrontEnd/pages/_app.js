import "../styles/globals.css";
;;;;;;;;;;;
// INTERNAL IMPORT
import Navbar from "../components/NavBar/Navbar";

const MyApp = ({ Component, pageProps }) => (
  <div>
    <Navbar />
    <Component {...pageProps} />
  </div>
);

export default MyApp;
