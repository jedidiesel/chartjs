//Global Options
Chart.defaults.global.defaultFontFamily = 'Sofia Pro';

// Our labels along the x-axis
const months = ["Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun"];

// For drawing the bar charts
const FY20 = [100000000, 100000000, 100000000, 100000000, 100000000, 100000000, 100000000, 100000000, 100000000, 60000000, 90000000, 100000000];
const FY19 = [100300000, 103000000, 105000000, 99000000, 100000000, 100000000, 100000000, 100000000, 100000000, 60000000, 90000000, 100000000];
const Avg = [96441667, 96441667, 96441667, 96441667, 96441667, 96441667, 96441667, 96441667, 96441667, 96441667, 96441667, 96441667];
const chgColor = "#939598";
const pmtColor = "#4f868e";
const wrvuColor = "#6c54a3";
const procQtyColor = "#414042";
const avgColor = "#f68a33";

// For drawing the line with average charts
const avgMonths = ["Jun 20","Jul 20","Aug 20","Sep 20","Oct 20","Nov 20","Dec 20","Jan 21","Feb 21","Mar 21","Apr 21","May 21","Jun 21"];
const caseCount = [3785, 4020, 4023, 4208, 4351, 4157, 3942, 4005, 3989, 4750, 4998, 4681, 4962]
const caseCountAvg = [4298, 4298, 4298, 4298, 4298, 4298, 4298, 4298, 4298, 4298, 4298, 4298, 4298]
const countColor = "#414042";

// For drawing the EM line charts
const EMMonths = ["Jun 20","Jul 20","Aug 20","Sep 20","Oct 20","Nov 20","Dec 20","Jan 21","Feb 21","Mar 21","Apr 21","May 21","Jun 21"];
const em99205 = [.094, .108, .116, .104, .111, .127, .115, .139, .169, .170, .190, .176, .183]
const em99204 = [.365, .336, .383, .407, .422, .398, .397, .402, .454, .443, .453, .444, .416]
const em99203 = [.441, .463, .434, .407, .403, .413, .414, .440, .364, .377, .349, .373, .397]    
const em99202 = [.080, .073, .055, .065, .050, .051, .054, .015, .013, .009, .008, .007, .004]
const em99201 = [.019, .020, .012, .017, .014, .020, .021, .004, .001, .000, .000, .000, .000]
const em99205Color = "#005536";
const em99204Color = "#008755";
const em99203Color = "#0CFFA6";
const em99202Color = "#29282A";
const em99201Color = "#848287";

// Build Canvas IDs
const fyBarChart = document.getElementById("barChart");
const lineWithAvg = document.getElementById("lineChart");
const EMDistChart = document.getElementById("lineEMChart");

let barConfig = {

    type: 'bar',
    data: {        
        labels: months,
        datasets: [
        {
            type: 'line',
            label: '12 Mo Avg',
            data: Avg,
            fill: false,
            backgroundColor: avgColor,
            borderColor: avgColor,            
            borderWidth: 1,
            pointRadius: 0,
        },
        {         
            label: 'FY 19',
            data: FY19,
            fill: true,
            backgroundColor: "#D9D9D9",
            hoverBackgroundColor: "#E9EAEA",
            borderWidth: 1,
            borderColor: "#B3B2B3",
        },
        {         
            label: 'FY 20',
            data: FY20,
            fill: true,
            backgroundColor: procQtyColor,
            borderWidth: 1,
        },
        ]
    },
    options: {
        title: {
            display: true,
            text: 'PROCEDURE QUANTITY',
            },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    // Include a dollar sign in the ticks
                    callback: function (value, index, values) {
                        return '$' + value / 1e6 + 'M';
                    }
                },
                scaleLabel: function (valuePayload) {
                    return Number(valuePayload.value).toFixed(2).replace('.', ',') + '$';
                },
                gridLines: {
                    display: false
                }
            }],
            xAxes: [{
                gridLines: {
                    display: false
                }
            }]
        },
        legend: {
            position: "bottom",
            align: "center",
        }
    }
};

let lineAvgConfig = {

    type: 'line',
    data: {        
        labels: avgMonths,
        datasets: [
        {
            label: '12 Mo Avg',
            data: caseCountAvg,
            fill: false,
            backgroundColor: avgColor,
            borderColor: avgColor,            
            borderWidth: 1,
            pointRadius: 0,
        },
        {         
            label: 'Case Count',
            data: caseCount,
            fill: false,
            borderWidth: 2,
            borderColor: countColor,
            pointBackgroundColor: countColor,
        },
        ]
    },
    options: {
        title: {
            display: true,
            text: "CHART TITLE: This will need to be dynamic",
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                },
                scaleLabel: function (valuePayload) {
                    return Number(valuePayload.value).toFixed(2).replace('.', ',') + '$';
                },
                gridLines: {
                    display: false
                }
            }],
            xAxes: [{
                gridLines: {
                    display: false
                }
            }]
        },
        legend: {
            position: "bottom",
            align: "center",
        }
    }
};

let EMDistConfig = {

    type: 'line',
    data: {        
        labels: avgMonths,
        datasets: [
        {
            label: '99205',
            data: em99205,
            fill: false,
            backgroundColor: em99205Color,
            borderColor: em99205Color,            
            borderWidth: 2,
            pointRadius: 0,
        },
        {
            label: '99204',
            data: em99204,
            fill: false,
            backgroundColor: em99204Color,
            borderColor: em99204Color,            
            borderWidth: 2,
            pointRadius: 0,
        },
        {
            label: '99203',
            data: em99203,
            fill: false,
            backgroundColor: em99203Color,
            borderColor: em99203Color,            
            borderWidth: 2,
            pointRadius: 0,
        },
        {
            label: '99202',
            data: em99202,
            fill: false,
            backgroundColor: em99202Color,
            borderColor: em99202Color,            
            borderWidth: 2,
            pointRadius: 0,
        },
        {
            label: '99201',
            data: em99201,
            fill: false,
            backgroundColor: em99201Color,
            borderColor: em99201Color,            
            borderWidth: 2,
            pointRadius: 0,
        },
        ]
    },
    options: {
        title: {
            display: true,
            text: "CHART TITLE: This will need to be dynamic",
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                },
                gridLines: {
                    display: false
                }
            }],
            xAxes: [{
                gridLines: {
                    display: false
                }
            }]
        },
        legend: {
            position: "bottom",
            align: "center",            
        },
        stacked: true
    }
};

let barChart = new Chart(fyBarChart, barConfig);

let lineChart = new Chart(lineWithAvg, lineAvgConfig);

let lineEMChart = new Chart(EMDistChart, EMDistConfig);
