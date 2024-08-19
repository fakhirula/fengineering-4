import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import Container from "../components/Container/Container";

function Layout(props) {
    return (
      <>
        <Navbar />
        <Container>
          <main>{props.children}</main>
        </Container>
        <Footer />
      </>
    );
}

export default Layout;