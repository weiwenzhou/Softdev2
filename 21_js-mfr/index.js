// Wei Wen Zhou
// Softdev2 pd8
// K21 -- Onions, Bell Peppers, and Celery, Oh My!
// 2019-04-30

// Reduce, Map, Filter
var makeInt = function(num) {
    // Remove blanks and convert strings to ints
    if (num != "" && num.indexOf(" ") == -1) {
        return parseInt(num);
    } else {
        return 0;
    }
}

var columnSum = function(list, columnName) {
    // Takes a list and sum the values in a specific column
    return list.map(function(a) {
        return makeInt(a[columnName]);
    }).reduce(function(a, b) {
        return parseInt(a) + parseInt(b);
    });
}

d3.csv("data.csv").then(function(data) {
    var year_subset = data.filter(function(row) {
        return row['schoolyear'] == "20052006";
    });

    var total = columnSum(year_subset, 'total_enrollment');
    var female_total = columnSum(year_subset, 'female_num');
    var male_total = columnSum(year_subset, 'male_num');

    document.getElementById('total').innerHTML = total;
    document.getElementById('female_total').innerHTML = female_total;
    document.getElementById('male_total').innerHTML = male_total;

    document.getElementById('female_per').innerHTML = (female_total*100/total).toFixed(2);
    document.getElementById('male_per').innerHTML = (male_total*100/total).toFixed(2);

    var grades = [
        'prek', 'k', 'grade1', 'grade2', 'grade3', 'grade4', 'grade5',
        'grade6', 'grade7', 'grade8', 'grade9', 'grade10', 'grade11', 'grade12'
    ];
    grades.forEach(function(grade) {
        document.getElementById(grade).innerHTML = columnSum(year_subset, grade);
    });
});
