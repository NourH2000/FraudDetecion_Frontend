import Overview from "./components/Overview/Overview";
import HistoryLayout from "./components/Quantity/History/Layout";
import OneMedicationLayout from "./components/Quantity/OneMedication/Layout";
import OneTrainingLayout from "./components/Quantity/OneTraining/Layout";

export const routes = [
  { path: "/overview", component: Overview },
  { path: "/history/quantity", component: HistoryLayout },
  { path: "/history/quantity/oneTraining", component: OneTrainingLayout },
  {
    path: "/history/quantity/oneTraining/oneMedication",
    component: OneMedicationLayout,
  },

  //add your routes here
];
