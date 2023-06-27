import './Chat.scss';

// <<---- Importações ---->> \\
import { useNavigate, useParams } from 'react-router-dom';

import Header from '../../../components/Header/Header';
import App from './app/App';

export default function Chat() {
  
  return (
    <div className="Chats">
      <Header hasLink={true} backLink="/" showHelp={true} />
      <div className="content">
        <App/>
      </div>
    </div>
  );
}
