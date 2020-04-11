'use strict';

import { Router } from "../router/router";
import { Route } from "../router/route";
import NavBar from "./NavBar/NavBar";
import List from "./List/List";

(function () {
    function init() {
        const router = new Router([
            new Route('edit', 'edit.html'),
            new Route('main', 'main.html', true)
        ]);
    }
    init();
    NavBar();
    List();
}());
