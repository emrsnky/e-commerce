import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import router from "./Routes";

import { RouterProvider } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);

