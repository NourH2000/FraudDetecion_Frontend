import Cards from "./components/Overview/Cards"
import Barchart from "./components/Overview/Barchart"
import Overview from "./components/Overview/Overview"
import Table from "./components/Table"
import TablePPAHistorique from "./components/PPA/TablePPAHistorique"
import FormePPA from "./components/PPA/FormPPA"
import Historique from "./components/PPA/Historique"

export const routes=[
  {path:"/data-visualizer",component:Table},
  {path:"/OverView",component:Overview},
  {path:"/Cards",component:Cards},
  {path:"/Barchart",component:Barchart},
  {path:"/TablePPA",component:TablePPAHistorique},
  {path:"/FormePPA",component:FormePPA},
  {path:"/Historique",component:Historique},

  //add your routes here
]
