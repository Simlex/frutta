import { FunctionComponent, ReactElement } from "react";
import customStyle from '../theme/cart.module.scss';

interface HistoryProps {
    
}
 
const History: FunctionComponent<HistoryProps> = ():ReactElement => {
    return ( 
        <div className="bodyContainer">
            Cart
            <p>Here</p>
        </div>
     );
}
 
export default History;