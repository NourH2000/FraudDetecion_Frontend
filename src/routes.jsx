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
  { path: "/overView", component: Overview },
  { path: "/cards", component: Cards },
  { path: "/barchart", component: Barchart },
  { path: "/historique", component: Historique },
  { path: "/form", component: Form },
  { path: "/datagrid", component: Datagrid },
  { path: "/dataGridTraining", component: DataGridTraining },
  { path: "/detailOfTraining", component: DetailOfTraining },
  { path: "/donutChart", component: DonutChart },

  //add your routes here
];
