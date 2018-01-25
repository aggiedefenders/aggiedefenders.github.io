import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import "../node_modules/react-bootstrap-table/dist/react-bootstrap-table.min.js";
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

import 'normalize.css/normalize.css';

import '@blueprintjs/core/dist/blueprint.css';

import 'bootstrap/dist/css/bootstrap.css';

require('react-big-calendar/lib/css/react-big-calendar.css');

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
