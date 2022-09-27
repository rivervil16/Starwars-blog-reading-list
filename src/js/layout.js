import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import injectContext from "./store/appContext";
import { DetailCharacter } from "./views/detailCharacter";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Card } from "./component/card";
import { DetailPlanet} from "./views/detailPlanet";



//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    /*
    Revisar linea 40 - El nombre tiene un conflicto en el componente Card
    */
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/demo">
              <Demo />
            </Route>
            <Route exact path="/planets/:theid">
              <DetailPlanet />
            </Route>
            <Route exact path="/character/:theid">
              <DetailCharacter />
            </Route>
          
            <Route>
              <h1>Not found!</h1>
            </Route>
          </Switch>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
