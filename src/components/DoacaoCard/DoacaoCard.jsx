import "./DoacaoCard.css";
import { CiMoneyBill } from "react-icons/ci";

function DoacaoCard({num}) {
  return (
    <div className="icons">
      <CiMoneyBill size={30} />
      <div className="content">
        <h3>Dinheiro</h3>
        <p>{num}</p>
      </div>
    </div>
  );
}

export default DoacaoCard;
