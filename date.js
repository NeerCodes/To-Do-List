// Method-1
// module.exports.getDate = getDate;

// function getDate() {
//     let today = new Date();
//     let options = {
//         weekday: "long",
//         day: "numeric",
//         month: "long"
//     };

//     //   var day = today.toLocaleDateString("hi-IN", options);
//     let day = today.toLocaleDateString("en-US", options);
//     return day;
// }

// Method-2
exports.getDate = function () {
    let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    //   var day = today.toLocaleDateString("hi-IN", options);
    let day = today.toLocaleDateString("en-US", options);
    return day;
}

module.exports.getDay = getDay;

function getDay() {
    let today = new Date();
    let options = {
        weekday: "long"
    };

    //   var day = today.toLocaleDateString("hi-IN", options);
    // let day = today.toLocaleDateString("en-US", options);
    // return day;
    return today.toLocaleDateString("en-US", options);
}

console.log(module.exports);
