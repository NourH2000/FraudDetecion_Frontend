import Cards from "./components/Overview/Cards";
import Barchart from "./components/Overview/Barchart";
import Overview from "./components/Overview/Overview";
import Table from "./components/Table";
import TablePPAHistorique from "./components/PPA/TablePPAHistorique";
import Historique from "./components/PPA/Historique";
import Form from "./components/PPA/Form";

export const routes = [
  { path: "/data-visualizer", component: Table },
  { path: "/OverView", component: Overview },
  { path: "/Cards", component: Cards },
  { path: "/Barchart", component: Barchart },
  { path: "/TablePPA", component: TablePPAHistorique },
  { path: "/Historique", component: Historique },
  { path: "/Form", component: Form },

  //add your routes here
];
