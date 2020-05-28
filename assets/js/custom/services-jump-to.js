// Name:    services-jump-to.js
// Author:  Ethan Cannon
// Date:    20/11/19
// Purpose: retreive the parameters passed in url of services page
//          so that can perform smooth scrolling to a section
// Limitations: 
//          For services page and named sections only

function jumpTo(section) {

    // get the url
    var url = window.location.toString();

    // check if url containers params
    if(url.indexOf('?') > -1) {

        // get value of passed parameter 
        // assuming attribute is 'jumpto' only
        var paramValue = url.substring(
            url.lastIndexOf("=") + 1
        );

        // NOTE: THIS SCRIPT IS NOT FINISHED - DNU

    }

}