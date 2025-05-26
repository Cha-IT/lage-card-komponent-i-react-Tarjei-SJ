import Header from './header'
import Nav from './nav'
import logo from './assets/kosLogo.jpg'
import Footer from './footer'

function Index() {
    return(
    <>
        <Header />
      <Nav />
      <img className="logoen" src={logo} alt="bile av logo" />
      <Footer />
    </>
    )
}

export default Index;