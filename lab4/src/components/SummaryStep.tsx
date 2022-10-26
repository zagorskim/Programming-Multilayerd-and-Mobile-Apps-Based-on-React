import "./styles/SummaryStep.css";
import { UserData } from '../misc/UserDataInterface';

export interface SummaryStepProps{
    userData: UserData;
    movetoNextStep: (back: boolean, count: number) => void
}

export const SummaryStep: React.FC<SummaryStepProps> = (props) => {

    const user = props.userData;

    return ( 
        <div>
            <h2>Summary Step</h2>
            <p>{user.name}</p>
            <p>{user.surname}</p>
            <p>{user.email}</p>
            <h2>Delivery Address</h2>
            <p>{user.deliverystreet}</p>
            <p>{user.deliveryzipcode}</p>
            <p>{user.deliverycity}</p>
            <h2>Invoice Address</h2>
            <p>{user.invoicestreet}</p>
            <p>{user.invoicezipcode}</p>
            <p>{user.invoicecity}</p>
            <button onClick={() => props.movetoNextStep(true, 1)}>Back to Address Step</button>
            <button onClick={() => props.movetoNextStep(true, 2)}>Back to Name Step</button>
        </div>
    ) 
}