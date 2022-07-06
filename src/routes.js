import Cards from "./components/Overview/Cards";
import Barchart from "./components/Overview/Barchart";
import Overview from "./components/Overview/Overview";
import Table from "./components/Table";
import TablePPAHistorique from "./components/History/TablePPAHistorique";
import Historique from "./components/PPA/Historique";
import Form from "./components/PPA/Form";
import Datagrid from "./components/History/Datagrid";
import Details from "./components/History/Details";

export const routes = [
  { path: "/data-visualizer", component: Table },
  { path: "/OverView", component: Overview },
  { path: "/Cards", component: Cards },
  { path: "/Barchart", component: Barchart },
  { path: "/TablePPA", component: TablePPAHistorique },
  { path: "/Historique", component: Historique },
  { path: "/Form", component: Form },
  { path: "/Datagrid", component: Datagrid },
  { path: "/Details", component: Details },

  //add your routes here
];
