import "./styles/SummaryStep.css";
import { UserData } from '../misc/UserDataInterface';

export interface SummaryStepProps{
    userData: UserData;
}

export const SummaryStep: React.FC<SummaryStepProps> = (props) => {

    const user = props.userData;

    return ( 
        <div>
            <h2>Summary Step</h2>
            <p>{user.name}</p>
            <p>{user.surname}</p>
            <p>{user.email}</p>
        </div>
    ) 
}