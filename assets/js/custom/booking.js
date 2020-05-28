// Name:    booking.js
// Author:  Ethan Cannon
// Date:    18/10/19
// Purpose: retreive the parameters passed in url of booking page and update
//          timely booking system link to reflect this
// Limitations: 
//          Identified 6/11/19: Cannot use 'product' only on Facebook, as it passes its own 'fbclickid' as well

function setSrc(frame) {
    var url = window.location.toString(); // url of page

    // check if the url contains parameters
    if (url.indexOf('?') > -1) {

        // if the url contains an & - means it is passing atleast two params (category and product)
        if (url.indexOf('&') > -1) {

            // get the value of the first
            var parameters = location.search.substring(1).split("&");
            var temp = parameters[0].split("=");
            l = unescape(temp[1]);

            // get the value of the second
            temp = parameters[1].split("=");
            c = unescape(temp[1]);

            // include the path of timely booking
            var fullPath = "https://aitkenvalebeautyspot.gettimely.com/book/embed?category=" + l + "&product=" + c;

            // set to passed element source (assume iframe)
            document.getElementById(frame).src = fullPath;

        } else {
            // else, only passing one, which could be category or product

            // get name of param
            var paramName = url.substring(
                url.lastIndexOf("?") + 1,
                url.lastIndexOf("=")
            );

            // get value of param
            var paramValue = url.substring(
                url.lastIndexOf("=") + 1
            )

            // include the path of timely booking
            var fullPath = "https://aitkenvalebeautyspot.gettimely.com/book/embed?" + paramName + "=" + paramValue;

            // set to passed element source (assume iframe)
            document.getElementById(frame).src = fullPath;

        } // end else

    } else {
        // no parameters have been passed, just use the default page
        document.getElementById(frame).src = "https://aitkenvalebeautyspot.gettimely.com/book/embed";
    } // end if else
} // end function