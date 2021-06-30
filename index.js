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
var yValues = [8, 2, 6, 5, 7, 6, 9, 10]
var journeyMap = new Chart("journeyMap", {
    type: "line",
    data: {
        labels: ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5", "Step 6", "Step 7", "Step 8"],
        datasets: [{
            label: 'Recycling Journey',
            backgroundColor: "#33333310",
            borderColor: "#333",
            data: yValues,
            lineTension: 0.2,
            pointRadius: 8,
            pointBackgroundColor: "#068806",
            pointBorderColor: "#333",
            pointHoverBackgroundColor: "#333",
            pointHoverRadius: 18,

        }]
    },
    options: {

        scales: {
            yAxes: [{
                ticks: {
                    fontColor: "#192E1080",
                    beginAtZero: true,
                }
            }],
            xAxes: [{
                ticks: {

                    fontColor: "#192E1080",
                }
            }]
        },
        plugins: {
            tooltip: {
backgroundColor: "#ffffff",
            }
        }

    }

});


//   RECYCLE EASY CAROUSEL
