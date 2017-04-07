/**
 * Created by skolapar on 4/7/2017.
 */
"use strict"
function test() {
    var num = 100
    console.log("value of num in test() "+num)
    {
        console.log("Inner Block begins")
        let num = 200
        console.log("value of num : "+num)
    }

    console.log("value of num outside : "+num)
}
test()