// Wei Wen Zhou
// SoftDev2 pd8
// K<15> -- Scattered
// 2019-03-25

// Heading
d3.select("body").append("h2").text("Google Play Store")

// Create svg container
var graph = d3.select("body").append("svg").attr("width", 560).attr("height", 525).style("border", "2px solid");

// Add link
d3.select("body").append("br");
d3.select("body").append("a").attr("href", "https://www.kaggle.com/lava18/google-play-store-apps#googleplaystore.csv").text("Click here for original data set");

// Data input
d3.csv("googleplaystore.csv", function(d) {
    if (+d.Rating <= 5 && +d.Rating >= 0) {
        return {
            name : d.App,
            rating : +d.Rating,
            reviews : d.Reviews
        }
    }
}).then(function(data) {
    // Data to work with
    console.log(data[0]);

    // X scale 500 : 5 ( 100 = 1 ) rating * 100
    var x_scale = d3.scaleLinear().domain([0, 5]).range([0, 500]);
    // Y scale 500 : 100M ( 5 = 1M  ) rating * 5*10^-6
    var y_scale = d3.scaleLinear().domain([100000000, 0]).range([0, 500]);

    // X-axis
    graph.append("g").call(d3.axisBottom().scale(x_scale).ticks(5))
        .attr("transform", "translate(60, 500)");
    // X Label
    graph.append("text").text("Rating")
        .attr("transform", "translate(310, 520)");

    // Y-axis
    graph.append("g").call(d3.axisLeft().scale(y_scale).ticks(5))
        .attr("transform", "translate(60, 0)");
    // Y Label
    graph.append("text")
        .attr("transform", "rotate(-90)")
        .attr("x", -280)
        .attr("y", 15)
        .text("Reviews");

    // Title
    graph.append("text").text("Reviews vs. Rating").attr("transform", "translate(200, 50)");
    // Plotting points
    graph.selectAll("circle").data(data).enter().append("circle")
        .attr("cx", function(d) { return x_scale(d.rating);})
        .attr("cy", function(d) { return y_scale(d.reviews);})
        .attr("r", 2)
        .attr("fill", "black")

});
