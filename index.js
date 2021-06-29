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
var yValues = [8, 2, 6, 5, 7, 8, 9, 10]
var journeyMap = new Chart("journeyMap", {
    type: "line",
    data: {
                labels: ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5", "Step 6", "Step 7", "Step 8"],
                datasets: [{
                    backgroundColor: "#33333315",
                    borderColor: "#333",
                    data: yValues,
                    lineTension: 0.2,
                    pointRadius: 10,
                    pointBackgroundColor: "#5cb075",
                    pointBorderColor: "#333",
                    pointHoverBackgroundColor: "#333",
                    pointHoverRadius: 18,

                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }

  });


//   RECYCLE EASY CAROUSEL
