import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./styles/main.scss";
import ContactPage from "./pages/ContactPage";
import GalleryPage from "./pages/GalleryPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/about" component={AboutPage} />
        <Route path="/gallery" component={GalleryPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/summerwood" component={HomePage} exact />
      </Switch>
    </div>
  );
}

export default App;
