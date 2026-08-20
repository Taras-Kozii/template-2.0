'use strict';

import { initNavigation } from './menu.js';
import { initHeader } from './header.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initHeader();
  // watcherToggle('.trending', 0.5);
});