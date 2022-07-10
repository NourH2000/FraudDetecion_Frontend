import Cards from "./components/History/Details/CardsDetails";
import Barchart from "./components/Overview/Barchart";
import Overview from "./components/Overview/Overview";
import Table from "./components/Table";
import Historique from "./components/PPA/Historique";
import Form from "./components/PPA/Form";
import Datagrid from "./components/History/Datagrid";
import DataGridTraining from "./components/History/Details/DataGridTraining";
import DetailOfTraining from "./components/History/Details/DetailOfTraining";
import DonutChart from "./components/History/Details/DonutChart";
export const routes = [
  { path: "/data-visualizer", component: Table },
  { path: "/OverView", component: Overview },
  { path: "/Cards", component: Cards },
  { path: "/Barchart", component: Barchart },
  { path: "/Historique", component: Historique },
  { path: "/Form", component: Form },
  { path: "/Datagrid", component: Datagrid },
  { path: "/DataGridTraining", component: DataGridTraining },
  { path: "/DetailOfTraining", component: DetailOfTraining },
  { path: "/DonutChart", component: DonutChart },

  //add your routes here
];
