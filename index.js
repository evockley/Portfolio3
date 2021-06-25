$(".toggle").on("click", function () {
    $(".nav-item").css("display", "flex");
    $(".close").css("display", "flex");
    $(this).css("display", "none");
});

$(".close").on("click", function () {
    $(".nav-item").css("display", "none");
    $(".toggle").css("display", "flex");
    $(this).css("display", "none");
});


// RECYCLE EASY JOURNEY MAP / LINE GRAPH

var xValues = [1, 2, 3, 4, 5, 6, 7, 8];
var yValues = [8, 4, 6, 5, 7, 8, 9, 10]
var journeyMap = new Chart("journeyMap", {
    type: "line",
    data: {

                labels: xValues,
                datasets: [{
                    backgroundColor: "#33333320",
                    borderColor: "#333",
                    data: yValues,
                    lineTension: 0.14,
                    pointRadius: 8,
                    pointBackgroundColor: "#5cb075",
                    pointBorderColor: "#333",
                    pointHoverBackgroundColor: "#333",
                    pointHoverRadius: 16,
                }]
            },
  });