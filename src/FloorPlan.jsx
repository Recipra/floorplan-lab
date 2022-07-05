import Bedroom1 from "./Bedroom1"
import Bedroom2 from "./Bedroom2"
import Bedroom3 from "./Bedroom3"
import Kitchen from "./Kitchen"
import LivingRoom from "./LivingRoom"

const FloorPlan = (props) => {
  return (
    <>
      <LivingRoom />
      <Bedroom1 bedNum={1}/>
      <Kitchen />
      <Bedroom2 bedNum={2}/>
      <Bedroom3 bedNum={3}/>
    </>
  )
}

export default FloorPlan