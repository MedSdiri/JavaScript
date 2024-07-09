function square(x){
    return x*x;
}


function cube(x){
    return x*x*x;
}

module.exports = {
    square, cube
}

/*
In order to be able to use the numbers of one js file in another, first we need to export
and then import them into the file
*/

