

var a, current, testclick, themesAsArray = {};

// Set development mode to see errors
less.env = 'development';


// Make array out of themes object in order to cycle through themes.
themesAsArray = Object.keys(themes).map(
    function (key) {
        return themes[key];
    }
);

current = 0;

function themeNext(increment) {
    'use strict';
    less.modifyVars(themesAsArray[increment + 1]);
    current = increment === themesAsArray.length - 1 ? 0 : increment + 1;
}

function themeNextRolled() {
    themeNext(current);
}

testclick = document.getElementById('footer');
testclick.onclick = themeNextRolled;

