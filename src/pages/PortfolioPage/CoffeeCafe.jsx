import React from 'react'
import Img1 from "../../assets/CoffeeCase/1.jpg"
import Img2 from "../../assets/CoffeeCase/2.jpg"
import Img3 from "../../assets/CoffeeCase/3.png"
import Img4 from "../../assets/CoffeeCase/4.png"
import Img5 from "../../assets/CoffeeCase/5.png"
import Img6 from "../../assets/CoffeeCase/6.png"
import Img7 from "../../assets/CoffeeCase/7.png"
import Img8 from "../../assets/CoffeeCase/8.png"

const CoffeeCafe = () => {
  return (
    <div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <img src={Img1} alt="" style={{ width: "100%" }} />
        <img src={Img2} alt="" style={{ width: "100%" }} />
        <img src={Img3} alt="" style={{ width: "100%" }} />
        <img src={Img4} alt="" style={{ width: "100%" }} />
        <img src={Img5} alt="" style={{ width: "100%" }} />
        <img src={Img6} alt="" style={{ width: "100%" }} />
        <img src={Img7} alt="" style={{ width: "100%" }} />
        <img src={Img8} alt="" style={{ width: "100%" }} />
    </div>
    </div>
  )
}

export default CoffeeCafe