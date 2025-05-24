import Header from './header'
import Nav from './nav'
import logo from './assets/kosLogo.jpg'

function Index() {
    return(
    <>
        <Header />
      <Nav />
      <img className="logoen" src={logo} alt="bile av logo" />
    </>
    )
}

export default Index;