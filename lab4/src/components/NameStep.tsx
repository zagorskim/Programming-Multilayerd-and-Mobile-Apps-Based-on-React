import "./styles/NameStep.css";
import { useState } from "react";
import { UserData } from "../misc/UserDataInterface";

export interface NameStepProps {
  data: UserData;
  movetoNextStep: () => void;
  saveFormData: (name: string, surname: string, email: string) => void;
}

export const NameStep: React.FC<NameStepProps> = (props) => {
  const [name, setName] = useState(props.data.name);
  const [surname, setSurname] = useState(props.data.surname);
  const [email, setEmail] = useState(props.data.email);

  const sendData = () => {
    props.saveFormData(name, surname, email);
    props.movetoNextStep();
  };

  return (
    <div>
      <h2>Name Step</h2>
      <form onSubmit={sendData}>
        {/* submit button does not validating */}
        <input
          style={{ margin: 20 }}
          minLength={3}
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
          type="text"
          placeholder="name"
        ></input>
        <input
          style={{ margin: 20 }}
          minLength={3}
          onChange={(e) => setSurname(e.target.value)}
          value={surname}
          required
          type="text"
          placeholder="surname"
        ></input>
        <input
          style={{ margin: 20 }}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
          type="email"
          placeholder="e-mail"
        ></input>
        <button
          style={{ margin: 20 }}
          type="submit"
          onSubmit={(e) => {
            props.saveFormData(name, surname, email);
            props.movetoNextStep();
          }}
        >
          Next
        </button>
      </form>
    </div>
  );
};
