// Images
import zuri from "../images/Zuri.png"
import HNG from "../images/HNG.png";
import I4G from "../images/I4G.png";

// stylesheet
import './Footer.css'
const Footer = () => {
  return (
    <>
        {/* Images on the footer (sponsors) */}
      <div className="sponsors">
        <img src={zuri} alt="zuri" />
        <img src={HNG} alt="HNG" />
        <img src={I4G} alt="I4G" />
      </div>
    </>
  )
}

export default Footer