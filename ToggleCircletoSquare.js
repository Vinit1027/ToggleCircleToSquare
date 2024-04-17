function fun69(){

    var k = document.getElementsByClassName("get");

    for (var i = 0; i < k.length; i++) {

        if (k[i].className == 'get cirsq') {
            k[i].className = 'get sqcirc';
        }
        else if (k[i].className == 'get sqcirc') {
            k[i].className = 'get cirsq';
        }
    }

}