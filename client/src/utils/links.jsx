import { IoBarChartSharp } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { MdSupervisorAccount } from "react-icons/md";

// This links array to be rendered in NavLinks under components
const links = [
  { id: 1, text: "overview", path: "/", icon: <IoBarChartSharp /> },
  {
    id: 2,
    text: "View All Jobsheets",
    path: "all-jobs",
    icon: <MdQueryStats />,
  },
  { id: 3, text: "Create Jobsheet", path: "add-job", icon: <FaWpforms /> },

  { id: 4, text: "Profile", path: "profile", icon: <ImProfile /> },
  { id: 5, text: "Teams", path: "all-users", icon: <MdSupervisorAccount /> },
  // { id: 8, text: "User Jobs", path: "user-job" },
];

export default links;
