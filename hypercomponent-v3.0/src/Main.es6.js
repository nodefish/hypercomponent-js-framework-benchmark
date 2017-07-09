'use strict';

import { Main } from './components/Main';

const app = new Main();
document.getElementById('main').appendChild(app.render());