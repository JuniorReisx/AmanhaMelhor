import "./DoacaoCard.css";
import { CiMoneyBill } from "react-icons/ci";

function DoacaoCard() {
  return (
    <div className="icons">
      <CiMoneyBill size={30} />
      <div className="content">
        <h3>Dinheiro</h3>
        <p>R$ 10</p>
      </div>
    </div>
  );
}

export default DoacaoCard;
