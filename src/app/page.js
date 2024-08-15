import Navbar from "./Components/Navbar/Navbar"
import MainPage from "./Components/Main/MainPage"
import DishboardImg from "./Components/DishboardImg/DishboardImg"
import Feature1 from "./Components/Feature/Feature1"
import Feature2 from "./Components/Feature/Feature2"
import Feature3 from "./Components/Feature/Feature3"
import Question from "./Components/Question/Qustion"
import Gradient from "./Components/Gradient/Gradient"
import Footer from "./Components/footer/Footer"
import Plan from "./Components/Plannong/Plan"
export default function Home() {
  return (
  <div>
<Navbar/>
<MainPage/>
{/* <DishboardImg/> */}
<Feature1/>
<Feature2/>
<Feature3/>
<Question/>
<Plan/>
<Gradient/>
<Footer/>


  </div>
  )
}
