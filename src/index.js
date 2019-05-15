'use strict';

import $ from 'jquery';
import _ from 'lodash';
import { printMe } from "./shared";

$(document).ready(function(){
    printMe();
});


function component() {
    const element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());

function doIt() {
    printMe();
}