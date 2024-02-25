import { lazy } from "solid-js";
import { Router, Route } from "@solidjs/router";
import App from './App';

const Home = lazy(() => import("./pages/Home/HomePage"));
const ChiSiamo = lazy(() => import("./pages/ChiSiamo/ChiSiamo"));
const Servizi = lazy(() => import("./pages/Servizi/Servizi"));
const Contatti = lazy(() => import("./pages/Contatti/Contatti"));
const NotFound = lazy(() => import("./pages/NotFound"));

const routes = () => {
  return (
    <Router root={App}>
      <Route path="/" component={Home} />
      <Route path="/chi-siamo" component={ChiSiamo} />
      <Route path="/servizi" component={Servizi} />
      <Route path="/contatti" component={Contatti} />
      <Route path="*" component={NotFound} />
    </Router>
  );
}

export default routes;