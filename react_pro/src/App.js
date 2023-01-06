
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';
import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Button from "./components/Button";


const logoItem = [
  {id:1, title: "PORTFOLIO"},
  {id:2, title: "BLOG"},
  {id:3, title: "CV"},
  {id:4, title: "STORE"},
  {id:5, title: "FREELANCE"},
  {id:6, title: "ABOUT ME"},
  {id:7, title: "CONTACT"},
];
const tses = [
  {id:1, title: "ALL"},
  {id:1, title: "UI Design"},
  {id:1, title: "UX Design"},
  {id:1, title: "Product Design"},
  {id:1, title: "Articles"},
  {id:1, title: "Tutorials"},
  {id:1, title: "News"},
];
const imgList = {
  img1: require("./images/Rectangle114.png"),
  img2: require("./images/zurag.png"),
  img3: require("./images/card pic 2.png"),
  img4: require("./images/card pic.png"),
};

const card = [
  {
    img: {card},
    date: "2020.11.23",
    title: "This way is wrong about UI Design.",
    text: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ",
    span: "read more"
  },
  {
    img: {card},
    date: "2020.11.23",
    title: "This way is wrong about UI Design.",
    text: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ",
    span: "read more"
  },
  {
    img: {card},
    date: "2020.11.23",
    title: "This way is wrong about UI Design.",
    text: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ",
    span: "read more"
  },
]
 



export default function App() {
  return (
    <div className='tom-container'>
      <Header logo={imgList.img1} menus={logoItem}/>
      <Main zurag={imgList.img2} tses={tses} card={imgList.img3}/>


    </div>
    
  
  )
  
}
 

