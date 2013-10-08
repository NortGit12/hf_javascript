function writeCookie(name, value, days) {
    // By default, there is no expiration so the cookie is temporary
    var expires = "";

    // Specifying a number of days makes the cookie persistent
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }

    // Set the cookie to the name, vlaue and expiration date
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    // Find the specified cookie and return its value
    var searchName = name + "=";
    var cookies = document.cookie.split(";");

    for (var cookieIndex = 0; cookieIndex < cookies.length; cookieIndex++) {
        var currentCookie = cookies[cookieIndex];

        while (currentCookie.charAt(0) === " ") {
            currentCookie = currentCookie.substring(1, currentCookie.length);
        }

        if (currentCookie.indexOf(searchName) === 0) {
            return currentCookie.substring(searchName.length, currentCookie.length);
        }
    }

    return null;
}

function eraseCookie(name) {
    // Erase the specified cookie
    writeCookie(name, "", -1);
    
    alert("Cookie " + name + " erased.");
}