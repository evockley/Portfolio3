// DISAPPEARING HOME PAGE BUTTON ON SCROLL

// $(window).on("scrolldown", function () {
//     // $(".homeHeroButton").css("display", "none")
//     if($(document).scrollTop() > 100){
//         $('.homeHeroButton').css({'display': 'none'});
//       }
//     });
    
    


// MENU HAMBURGER IN MOBILE VIEW

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

//_________________________________GOCREATE_______________________________
//_________________________________GOCREATE_______________________________
//_________________________________GOCREATE_______________________________




// RECYCLE EASY JOURNEY MAP / LINE GRAPH

var xValues = [1, 2, 3, 4, 5, 6, 7, 8];
var yValues = [8, 2, 6, 5, 7, 6, 9, 10]
var journeyMap = new Chart("journeyMap", {
    type: "line",
    data: {
        labels: ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5", "Step 6", "Step 7", "Step 8"],
        datasets: [{
            label: 'Recycling Journey with Recycle Easy',
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



// ____________________________Una Mesa____________________________


var xValues = [1, 2, 3, 4, 5, 6, 7, 8];
var yValues = [5, 4, 5, 3, 5, 6, 7, 8]
var journeyMap = new Chart("SharonsjourneyMap", {
    type: "line",
    data: {
        labels: ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5", "Step 6", "Step 7", "Step 8"],
        datasets: [{
            label: "Sharon's Journey",
            backgroundColor: "#33333310",
            borderColor: "#333",
            data: yValues,
            lineTension: 0.2,
            pointRadius: 8,
            pointBackgroundColor: "#7CA3DF",
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