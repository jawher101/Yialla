// STATIC DATA FOR DASHBOARD
import EuroSymbolTwoToneIcon from "@mui/icons-material/EuroSymbolTwoTone";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";

export const data1 = [
  {
    text: "MON PORTEFEUILLE",
    title: "0",
    type: "",
    icon: AccountBalanceWalletOutlinedIcon,
    rounded: "lg",
    bg: true,
    textColor: true,
    firstElement: true,
    textSize: "text-md font-semibold",
  },
  {
    title: "0",
    text: "MES ENVOIES EN COURS",
    icon: Inventory2OutlinedIcon,
  },
  {
    title: "0",
    text: "MES LIVRAISONS EN COURS",
    icon: LocalShippingOutlinedIcon,
  },
  {
    title: "0",
    text: "GAGNÉ EN JUILLET 2023",
    icon: EuroSymbolTwoToneIcon,
  },
];

export const data2 = [
  {
    title: "Mes",
    text: "tecccccccccccccccccccxt1",
  },
  {
    title: "0",
    text: "texcccccccccccccccct1",
  },
];
export const data3 = [
  {
    title: "0",
    text: "tecccccccccccccccccccxt1",
  },
  {
    title: "0",
    text: "texcccccccccccccccct1",
  },
];
export const carouselTitle = ["MES STATISTIQUES"];

export const tabs = [
  {
    id: "Mes-annonces",
    label: "Mes annonces",
    content:
      "Voudrais-tu être celui qui brise ce silence en créant une annonce ?",
  },
  {
    id: "Mes-livraisons",
    label: "Mes livraisons",
    content: "Oups, tu n'as pas encore de livraison. allons chercher une ?",
  },
  {
    id: "Mes-tragets",
    label: "Mes tragets",
    content:
      "Tu n'as pas créé de trajet depuis un moment. Créons-en un maintenant, c'est le moment de voyager !",
  },
];
