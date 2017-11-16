
// Click buttons to open and close nav menu
(function () {
    var sidebarOuter, openbtn, closebtn;
    sidebarOuter = document.getElementsByClassName('sidebar-outer')[0];
    openbtn = document.getElementsByClassName('openbtn')[0];
    closebtn = document.getElementsByClassName('closebtn')[0];
    openbtn.onclick = function () {
        sidebarOuter.style.left = '0';
    };
    closebtn.onclick = function () {
        sidebarOuter.style.left = '-8em';
    };
}());


// Cycle through themes using LESS CSS
(function () {
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
        // Modify LESS variables using next color theme
        less.modifyVars(themesAsArray[increment + 1]);
        // If current theme is last in list, go back to first in list
        current = increment === themesAsArray.length - 1 ? 0 : increment + 1;
    }
    function themeNextRolled() {
        themeNext(current);
    }
    testclick = document.getElementsByClassName('theme-btn')[0];
    testclick.onclick = themeNextRolled;
}());
