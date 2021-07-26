var xmlhttp = new XMLHttpRequest();
var url = "http://127.0.0.1:5500/plotlyjs.json";
xmlhttp.open("GET",url, true);
xmlhttp.send();
xmlhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
         console.log(data)
        var months = data.charges.map(function(elem) {
            return elem.date;
        });
        var priorFY = data.charges.map(function(elem) {
            return elem.priorFY;
        });
        var curFY = data.charges.map(function(elem) {
            return elem.curFY;
        });
        var varAvg = data.charges.map(function(elem) {
            return elem.avg;
        });

        // Our labels along the x-axis
        var fy20Label = 'FY 2020';
        var fy21Label = 'FY 2021';
        var metric = "WRVUs";

        // Formatting Conditionals
        
        if(metric.toUpperCase() === "CHARGES"){
            barColor = "#939598", metricFormat = '$.2s', titleName = metric;
        } else if (metric.toUpperCase() === "PAYMENTS"){
            barColor = "#4f868e", metricFormat = '$.2s', titleName = metric;
        } else if (metric.toUpperCase() === "WRVUS"){
            barColor = "#6c54a3", metricFormat = '.2s', titleName = metric;
        } else{
            barColor = "#414042", metricFormat = '.2s', titleName = metric;
        };

        BARCHART = document.getElementById('barChart');    

        var barconfig = {
            displaylogo: true,
            //displayModeBar: false,
            autosizable: true,
            responsive: true,
        };

        var barlayout = {
            title: titleName.toUpperCase(),
            showlegend: true,
            legend: {"orientation": "h",
                "xanchor":"center",
                "x":.5,
                "itemclick":"toggleothers",
                "itemdoubleclick":"toggle",
            },
            font: {
                color:'rgb(65,64,66)',
                family:'Sofia Pro, sans-serif',
            },
            xaxis: {
                tickangle: -45,
                linecolor:'rgba(0,0,0,0.1)',
            },
            yaxis: {
                linecolor:'rgba(0,0,0,0.1)',
                gridcolor:'rgba(0,0,0,0)',
                tickformat: metricFormat,
            },
            plot_bgcolor:'rgb(255,255,255)',
            barmode: 'group',
            width: 800,
            height: 600,
            margin: {
                "l":30,
                "r":30,
                "t":30,
                "b":5,
            },
            bargap:0.15,
            bargroupgap:0.2,            
            modebar: {
                // vertical modebar button layout
                orientation: 'v',
                // for demonstration purposes
                // bgcolor: 'rgb(65,64,66)',
                // color: 'white',
                // activecolor: '#9ED3CD'
              },
        };

        var bartrace1 = {
            x: months,
            y: priorFY,
            type: 'bar',
            name: fy20Label,
            marker: {
            color: 'rgb(217, 217, 217)',
            opacity: 0.7,
            }
        };

        var bartrace2 = {
            x: months,
            y: curFY,
            type: 'bar',
            name: fy21Label,
            marker: {
            color: barColor,
            }
        };

        var bartrace3 = {
            x: months,
            y: varAvg,
            type: 'lines',
            name: '12-MO AVG',
            line: {
                color: 'rgb(246,138,51)',
                width: 1.5,
            },
            mode: 'lines',
        }

        var barData = [bartrace1, bartrace2, bartrace3];

        Plotly.newPlot(BARCHART, barData, barlayout, barconfig);   


    }
}

