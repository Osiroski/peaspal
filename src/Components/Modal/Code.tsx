
import './prism.css';
import Prism from "prismjs";
import { useEffect} from 'react';
import {ExpressJs,Tcp,Stat, Req, Dynamic} from './codes'
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
          "ExpressJs":<ExpressJs/>,
          "Configurable TCP port":<Tcp/>,
          "Dynamic HTML":<Dynamic/>,
          "Static HTML":<Stat/>,
          "HTTP Requests":<Req/>
        }[props.title]
      }
    </div>
    )
}


export default Code
