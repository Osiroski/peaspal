
import './prism.css';
import Prism from "prismjs";
import { useEffect} from 'react';
import {ClientApp,ServerApp,EncryptApp, SecureComm} from './codes'
interface Iprops{
  title:string;
}

const Code = (props:Iprops) => {
    useEffect(() => {
        // Update the document title using the browser API
        Prism.highlightAll();
    });
    return(
    <div>
      {
        {
          "Client App":<ClientApp/>,
          "Server App":<ServerApp/>,
          "Encrypt App":<EncryptApp/>,
          "Secure Comm":<SecureComm/>,
        }[props.title]
      }
    </div>
    )
}


export default Code
