import React from 'react';
import './App.css';
import { CustomerForm } from './components/CustomerForm';


function App ()  {
  return (
    <div className="App">
      <CustomerForm/>
    </div>
  );
}
// why error?
// export default App;

// import React from 'react';
// import './App.css';
// import { CustomerForm } from './components/CustomerForm';

// type AppProps = {
//   counter: number;
// }

// function App: React.FC<AppProps> = (props: AppProps) => {
//   return (
//     <div className="App">
//       <CustomerForm/>
//     </div>
//   );
// }

 export default App;
