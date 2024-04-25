import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiLogOut } from "react-icons/fi";

import AddRoadIcon from "@mui/icons-material/AddRoad";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import AddIcon from "@mui/icons-material/Add";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import ChatIcon from "@mui/icons-material/Chat";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import LocationSearchingOutlinedIcon from "@mui/icons-material/LocationSearchingOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import StickyNote2OutlinedIcon from "@mui/icons-material/StickyNote2Outlined";

export const menus = [
  {
    name: "dashboard",
    link: "/dashboard",
    icon: MdOutlineDashboard,
    title: "Generale",
  },

  { name: "messages", link: "/messages", icon: FiMessageSquare },
  {
    name: "Notifications",
    link: "/notifications",
    icon: NotificationsNoneOutlinedIcon,
  },
  {
    name: "AJOUTER UNE ANNONCE",
    link: "/ajouter-une-annonce",
    icon: AddIcon,
    title: "Mes outils",
  },
  {
    name: "CRÉE UN TRAJET",
    link: "/ajouter-un-trajet",
    icon: AddRoadIcon,
  },
  {
    name: "CHERCHER UN COLIS",
    link: "/chercher-un-colis",
    icon: ManageSearchIcon,
  },
  {
    name: "CARNET D'ADRESSE",
    link: "/carnet-d-adresse",
    icon: StickyNote2OutlinedIcon,
  },
  {
    name: "MES PAIEMENTS",
    link: "/payments",
    icon: AttachMoneyOutlinedIcon,
  },
];

export const bottomMenu = [
  {
    dataTooltipTarget: "tooltip-home",
    link: "/dashboard",
    type: "button",
    className:
      "inline-flex flex-col items-center justify-center p-6 hover:bg-blue-600 group cursor-pointer",

    svg: {
      w: 26,
      h: 26,
    },
    icon: DashboardOutlinedIcon,
  },
  {
    dataTooltipTarget: "tooltip-bookmark",
    link: "/messages",
    type: "button",
    className:
      "inline-flex flex-col items-center justify-center p-6 hover:bg-blue-600 group cursor-pointer",
    svg: {
      w: 26,
      h: 26,
    },
    icon: ChatBubbleOutlineOutlinedIcon,
  },
  {
    dataTooltipTarget: "tooltip-add",
    type: "button",
    className:
      "inline-flex flex-col items-center justify-center p-4 hover:bg-blue-600 group cursor-pointer",
    svg: {
      w: 32,
      h: 32,
    },
    icon: AddIcon,
  },
  {
    dataTooltipTarget: "tooltip-search",
    link: "chercher-un-colis",
    type: "button",
    className:
      "inline-flex flex-col items-center justify-center p-4 hover:bg-blue-600 group cursor-pointer",
    svg: {
      w: 32,
      h: 32,
    },
    icon: SearchOutlinedIcon,
  },
  {
    dataTooltipTarget: "tooltip-settings",
    link: "",
    type: "button",
    className:
      "inline-flex flex-col items-center justify-center p-4 hover:bg-blue-600 group cursor-pointer",
    svg: {
      w: 32,
      h: 32,
    },
    icon: MoreHorizIcon,
  },
];
