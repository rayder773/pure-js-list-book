'use strict';

import List from '../components/List';
import BookForm from "../components/BookForm/BookForm";

export function Router(routes) {
  try {
    if (!routes) {
      throw 'error: routes param is mandatory';
    }
    this.constructor(routes);
    this.init();
  } catch (e) {
    console.error(e);
  }
}

Router.prototype = {
  routes: undefined,
  rootElem: undefined,
  constructor: function (routes) {
    this.routes = routes;
    this.rootElem = document.getElementById('app');
  },
  init: function () {
    const r = this.routes;
    (function (scope, r) {

      window.addEventListener('hashchange', function (e) {
        scope.hasChanged(scope, r);
      });
    })(this, r);
    this.hasChanged(this, r);
  },
  hasChanged: async function (scope, r) {
    if (window.location.hash.length > 0) {
      for (let i = 0, length = r.length; i < length; i++) {
        const route = r[i];
        if (route.isActiveRoute(window.location.hash.substr(1))) {

          scope.goToRoute(route.htmlName);

          const res = await fetch(`view/${route.htmlName}`, {
            method: 'GET'
          });
          if (route.name === 'main') {
            List();
          } else if (route.name === 'edit') {
            BookForm();
          }
        }
      }
    } else {
      for (let i = 0, length = r.length; i < length; i++) {
        const route = r[i];
        if (route.default) {
          console.log(route.default)
          scope.goToRoute(route.htmlName);
        }
      }
    }
  },
  goToRoute: function (htmlName) {
    (function (scope) {
      const url = 'views/' + htmlName;
      console.log(url)
      const xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
          scope.rootElem.innerHTML = this.responseText;
        }
      };
      xhttp.open('GET', url, true);
      xhttp.send();
    })(this);
  },
};



