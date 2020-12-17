import React from "react";
import "./styles/sass/ui.scss";
import "./styles/sass/responsive.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarItems from "./components/Header/NavbarItems";
import routes from "./routes";
import TopNavigation from "./components/TopNavigation";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PageTop from "./components/PageTop";
import TopMenu from "./components/Header/TopMenu";
import {
  ViewportProvider,
  useViewport,
} from "./components/Utils/context/ViewportContext";

const DesktopComponent = () => <></>;
const MobileNavigation = () => {
  const { width } = useViewport();
  const breakpoint = 767;
  return width < breakpoint ? <TopMenu /> : <DesktopComponent />;
};
const DesktopNavigation = () => {
  const { width } = useViewport();
  const breakpoint = 767;
  return width < breakpoint ? <DesktopComponent /> : <TopNavigation />;
};

function App() {
  return (
    <ViewportProvider>
      <div className="App">
        <NavbarItems />
        <PageTop />
        <MobileNavigation />
        <Container fluid className="section-content padding-y">
          <div className="container">
            <Row>
              <Col xs={12} md={4} lg={3}>
                <DesktopNavigation />
              </Col>
              <Col xs={12} md={8} lg={9}>
                {routes}
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </ViewportProvider>
  );
}

export default App;
