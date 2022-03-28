// DISAPPEARING HOME PAGE ELEMENTS ON SCROLL



// window.addEventListener('scroll', () => {
//     const scrollable = document.documentElement.scrollHeight - window.innerHeight;
//     const scrolled = window.scrollY;
//     console.log(scrollable);

//     if (scrolled === scrollable) {
//         alert('Youve reached the bottom')
//     }

// });





// function myFunction() { document.getElementById("navbar").style.backgroundColor = "red"; }




// function scrollFunction() {
//     if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
//         document.getElementById("navbar").style.padding = "30px 10px";

//     } else {
//         document.getElementById("navbar").style.padding = "80px 10px";

//     }
// }



window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbarRegular").style.padding = "0px 100px";

    } else {
        document.getElementById("navbarRegular").style.padding = "24px 100px";

    }
}




$(window).scroll(function () {
    if ($(this).scrollTop() > 700) {
        $('.homeHeroButton').css("visibility", "hidden");
        $('.heroFlex').css("visibility", "hidden");
    } else {
        $('.homeHeroButton').css("visibility", "visible");
        $('.heroFlex').css("visibility", "visible");
    }
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 700) {
        $('.myLogo').css("visibility", "hidden");
    } else {
        $('.myLogo').css("visibility", "visible");
    }
});



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
var xValues = [1, 2, 3, 4, 5, 6, 7, 8];
var yValues = [8, 2, 6, 5, 7, 6, 9, 10]
var journeyMap = new Chart("quentinsJourneyMap", {
    type: "line",
    data: {
        labels: ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5", "Step 6", "Step 7", "Step 8"],
        datasets: [{
            label: 'Submitting an Order',
            backgroundColor: "#33333310",
            borderColor: "#333",
            data: yValues,
            lineTension: 0.2,
            pointRadius: 8,
            pointBackgroundColor: "#423AC4",
            pointBorderColor: "#333",
            pointHoverBackgroundColor: "#333",
            pointHoverRadius: 18,
        }]
    },
    options: {
        legend: {
            labels: {
                color: "#192E10",
                boxWidth: 0,
            },
        },
        scales: {
            yAxes: [{
                gridLines: {
                    display: false,
                },
                ticks: {
                    fontColor: "#192E1080",
                    beginAtZero: true,
                }
            }],
            xAxes: [{
                gridLines: {
                    display: false,
                },
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




// RECYCLE EASY JOURNEY MAP / LINE GRAPH

var xValues = [1, 2, 3, 4, 5, 6, 7, 8];
var yValues = [8, 2, 6, 5, 7, 6, 9, 10]
var journeyMap = new Chart("samanthasJourneyMap", {
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
        legend: {
            labels: {
                color: "#192E10",
                boxWidth: 0,
            },
        },
        scales: {
            yAxes: [{
                gridLines: {
                    display: false,
                },
                ticks: {
                    fontColor: "#192E1080",
                    beginAtZero: true,
                }
            }],
            xAxes: [{
                gridLines: {
                    display: false,
                },
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
        legend: {
            labels: {
                fontColor: "#192E10",
                boxWidth: 0,
            }

        },
        scales: {
            yAxes: [{
                gridLines: {
                    display: false,
                },
                ticks: {
                    fontColor: "#192E1080",
                    beginAtZero: true,
                }
            }],
            xAxes: [{
                gridLines: {
                    display: false,
                },
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


// KINFOLK JOURNEY MAP / LINE GRAPH

var xValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var yValues = [2, 4, 3, 4, 6, 7, 8, 10]
var journeyMap = new Chart("allisonsJourneyMap", {
    type: "line",
    data: {
        labels: ["passes KINFOLK storefront", "Visits website", "Dark Mode and lots of text", "Finds Apply for a Card page", "Overwhelmed by text", "Watches interviews with owner", "Reads Reviews/Testimonials", "Goes in to Visit"],
        datasets: [{
            label: "Allison's Journey",
            backgroundColor: "#33333310",
            borderColor: "#00000090",
            data: yValues,
            lineTension: 0.2,
            pointRadius: 8,
            pointBackgroundColor: "#000000",
            pointBorderColor: "#333",
            pointHoverBackgroundColor: "#333",
            pointHoverRadius: 18,
        }]
    },
    options: {
        legend: {
            labels: {
                fontColor: "#192E10",
                boxWidth: 0,
            }
        },
        scales: {
            yAxes: [{
                gridLines: {
                    display: false,
                },
                ticks: {
                    fontColor: "#192E1080",
                    beginAtZero: true,
                }
            }],
            xAxes: [{
                gridLines: {
                    display: false,
                },
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



//________________________________ Beela________________________________
//________________________________ Beela________________________________
//________________________________ Beela________________________________
//________________________________ Beela________________________________
// https://www.youtube.com/watch?v=RxnV9Xcw914 ((((((7 minutes in))))))




$(window).scroll(function () {
    if ($(this).scrollTop() > 150) {
        $('banner1').removeClass("bannerWrapper").addClass("bannerWrapperSmall");
    }
});

var banner1 = document.getElementById('banner1')
var banner2 = document.getElementById('banner2')
var banner3 = document.getElementById('banner3')
var banner4 = document.getElementById('banner4')
var banner5 = document.getElementById('banner5')
var banner6 = document.getElementById('banner6')


