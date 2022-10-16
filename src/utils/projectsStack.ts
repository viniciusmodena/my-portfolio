import { userData } from "./userData";
import quackritics from "../public/static/img/projectsImages/quackritics.png";
import quackritics_api from "../public/static/img/projectsImages/quackritics-api.png";
import contacts_manager_api from "../public/static/img/projectsImages/contacts-manager-api-doc.png";
import contact_manager_front from "../public/static/img/projectsImages/contacts-manager-front.png";
import court_manager_api from "../public/static/img/projectsImages/court-manager-api.png";
import kenzie_food from "../public/static/img/projectsImages/kenzie-food.png";

export const projectsData = [
  {
    owner: userData.githubUser,
    name: "contacts_manager",
    image_url: contact_manager_front,
    display_name: "Contacts Manager",
    deploy: "https://contacts-manager-rouge.vercel.app",
  },
  {
    owner: userData.githubUser,
    name: "contacts_manager_api",
    image_url: contacts_manager_api,
    display_name: "Contacts Manager API",
    deploy: "https://contacts-manager-api-s1.herokuapp.com/api-docs",
  },
  {
    owner: userData.githubUser,
    name: "quackritics",
    image_url: quackritics,
    display_name: "Quackritics",
    deploy: "https://quackritics.vercel.app/",
  },
  {
    owner: userData.githubUser,
    name: "caps_m4_cap-felipe-05",
    image_url: quackritics_api,
    display_name: "Quackritics API",
    deploy: "https://capstone-m4-api.herokuapp.com/",
  },
  {
    owner: "osmfaria",
    name: "court-scheduler",
    image_url: court_manager_api,
    display_name: "Facility Scheduler API",
    deploy: "",
  },
  {
    owner: "Kenzie-Academy-Brasil-Developers",
    name: "api-kenziefood-m2-viniciusmodena",
    image_url: kenzie_food,
    display_name: "Kenzie Food",
    deploy: "https://kenzie-food-dusky.vercel.app",
  },
];

// {
//     owner: "",
//     name: "",
//     image_url: "",
//     display_name: "",
//     deploy: "",
//   },
