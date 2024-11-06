// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FaRecycle } from "react-icons/fa";

import './IconCard.css'
function IconCard({title,num}) {
    return (
        <div className="icons">
         <FaRecycle size={30} />
            <div className="content">
                <h3><strong>{num} </strong></h3>
                <p><strong>{title}</strong></p>
            </div>
        </div>
    );
};

export default IconCard;
