// Wei Wen Zhou
// Softdev2 pd8
// K21 -- Onions, Bell Peppers, and Celery, Oh My!
// 2019-04-30


// Reduce, Map, Filter
d3.csv("data.csv").then(function(data) {
    console.log(data);
    var i = 0;
    var grade1 = [];
    while (i < data.length) {
        grade1.push(data[i]["grade1"]);
        i++;
    }
    console.log(grade1);
    console.log(grade1.filter(
        function(a) {
            return a != "" && a.indexOf(" ") == -1;
        })
        .reduce(
        function(a,b) {
            return parseInt(a) + parseInt(b);
        })  /grade1.length);
})
