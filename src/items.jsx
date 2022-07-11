import GridViewIcon from "@mui/icons-material/GridView";
import PriceChangeIcon from "@mui/icons-material/PriceChange";
import PaidIcon from "@mui/icons-material/Paid";
import MedicationIcon from "@mui/icons-material/Medication";
import ArchiveIcon from "@mui/icons-material/Archive";
import EqualizerRoundedIcon from "@mui/icons-material/EqualizerRounded";
import SettingsIcon from "@mui/icons-material/Settings";
export const items = [
  { icon: "", path: "", type: "", label: "Overview" },
  {
    icon: <GridViewIcon />,
    path: "/overview",
    type: "item",
    label: "Overview",
  },

  {
    icon: <PaidIcon />,
    path: "/overview",
    type: "item",
    label: "PPA Price",
  },
  {
    icon: <MedicationIcon />,
    path: "/overview",
    type: "item",
    label: "Quantity Of Medication",
  },
  { icon: "", patéh: "", type: "", label: "History" },
  {
    icon: <ArchiveIcon />,
    path: "/historique",
    type: "item",
    label: "PPA price History",
  },
  {
    icon: <ArchiveIcon />,
    path: "/historique",
    type: "item",
    label: "Medications Quantity History",
  },
  { icon: "", path: "/historique", type: "", label: "Other" },
  {
    icon: <EqualizerRoundedIcon />,
    path: "",
    type: "item",
    label: "Data analysis",
  },
  //{ icon: "", path: "/historique", type: "", label: "devider" },
  {
    icon: <SettingsIcon />,
    path: "",
    type: "item",
    label: "parameter",
  },
];
