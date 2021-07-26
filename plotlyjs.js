function barChart(metric){    
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

    var fy20Label = 'FY 2020';
    var fy21Label = 'FY 2021';
    
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
        height:500,
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

    var barconfig = {
        displaylogo: false,
        autosizable: true,
        responsive: true,
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
};

function lineAvgChart(){    

    LINECHART = document.getElementById('lineAvgChart');

    const avgMonths = ['Jul','Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar','Apr','May','Jun']
    const caseCount = [3785, 4020, 4023, 4208, 4351, 4157, 3942, 4005, 3989, 4750, 4998, 4681, 4962]
    const caseCountAvg = [4298, 4298, 4298, 4298, 4298, 4298, 4298, 4298, 4298, 4298, 4298, 4298, 4298]

    var linelayout = {
        title: "SURGICAL CASE COUNT",
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
            gridcolor:'rgba(0,0,0,0)',
            // Eliminates spacing at beginning of graph
            range: [-0.1,11.5] 
        },
        yaxis: {
            linecolor:'rgba(0,0,0,0.1)',
            gridcolor:'rgba(0,0,0,0)',
            rangemode: 'tozero'
        },
        plot_bgcolor:'rgb(255,255,255)',
        width: 800,
        height:500,
        margin: {
            "l":50,
            "r":20,
            "t":50,
            "b":5,
        },
        modebar: {
            // vertical modebar button layout
            orientation: 'v',
            // for demonstration purposes
            // bgcolor: 'rgb(65,64,66)',
            // color: 'white',
            // activecolor: '#9ED3CD'
        },
    };

    var countTrace = {
        x: avgMonths,
        y: caseCount,
        type: 'line+markers',
        name: 'CASE COUNT',
        marker: {
            color: 'rgb(65, 64, 66)',
            size: 8
        },
        line: {
            color: 'rgb(65, 64, 66)',
            width: 2,
            shape: 'spline',
        }
    };
    
    var avgTrace = {
    x: avgMonths,
    y: caseCountAvg,
    name: '12-MO AVG',
    line: {
        color: 'rgb(246,138,51)',
        width: 1.5,
    },
    mode: 'lines'
    };

    var lineconfig = {
    displaylogo: false,
    autosizable: true,
    responsive: true,
    };
    
    var lineData = [countTrace, avgTrace];
    
    Plotly.newPlot(LINECHART, lineData, linelayout, lineconfig);
}

function lineEMChart(emType){    

    if(emType.toUpperCase() === "NEW"){
        em1Color = "#848287"     
        em2Color = "#29282A"
        em3Color = "#0CFFA6"
        em4Color = "#008755"
        em5Color = "#005536"
        name1 = "99201"
        name2 = "99202"
        name3 = "99203"
        name4 = "99204"
        name5 = "99205"
        title = "NEW PATIENT E&M TREND"
    } else if (emType.toUpperCase() === "EST"){
        em1Color = "#848287"
        em2Color = "#29282A"
        em3Color = "#0CB6FF"
        em4Color = "#005D85"
        em5Color = "#002E42"
        name1 = "99211"
        name2 = "99212"
        name3 = "99213"
        name4 = "99214"
        name5 = "99215"
        title = "ESTABLISHED PATIENT E&M TREND"
    } else{
        alert("emType not acceptable");
    };

    LINECHART = document.getElementById('EMChart');

    const EMMonths = ["Jun 20","Jul 20","Aug 20","Sep 20","Oct 20","Nov 20","Dec 20","Jan 21","Feb 21","Mar 21","Apr 21","May 21","Jun 21"];
    const em5Data = [.094, .108, .116, .104, .111, .127, .115, .139, .169, .170, .190, .176, .183]
    const em4Data = [.365, .336, .383, .407, .422, .398, .397, .402, .454, .443, .453, .444, .416]
    const em3Data = [.441, .463, .434, .407, .403, .413, .414, .440, .364, .377, .349, .373, .397]    
    const em2Data = [.080, .073, .055, .065, .050, .051, .054, .015, .013, .009, .008, .007, .004]
    const em1Data = [.019, .020, .012, .017, .014, .020, .021, .004, .001, .000, .000, .000, .000]

    var linelayout = {
        title: title,
        showlegend: true,
        legend: {"orientation": "h",
            "xanchor":"center",
            "x": .5,
            "y": -.15,
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
            gridcolor:'rgba(0,0,0,0)',
            // Eliminates spacing at beginning of graph
            range: [-0.1,12.5], 
            showspikes: true, 
            spikethickness :2, 
            spikedash: 'dot', 
            spikecolor: ('rgba(65, 64, 66, 0.5)'), 
            spikemode: 'across',
        },
        hovermode: 'x',
        hoverdistance: 100,
        spikedistance: 1000,        
        yaxis: {
            linecolor:'rgba(0,0,0,0.1)',
            gridcolor:'rgba(0,0,0,0)',
            rangemode: 'tozero'
        },
        plot_bgcolor:'rgb(255,255,255)',
        width: 800,
        height:500,
        margin: {
            "l":50,
            "r":20,
            "t":50,
            "b":5,
        },
        modebar: {
            // vertical modebar button layout
            orientation: 'v',
            // for demonstration purposes
            // bgcolor: 'rgb(65,64,66)',
            // color: 'white',
            // activecolor: '#9ED3CD'
        },
    };

    var firstTrace = {
        x: EMMonths,
        y: em1Data,
        type: 'line+markers',
        name: name1,
        marker: {
            color: em1Color,
            size: 6
        },
        line: {
            color: em1Color,
            width: 2,
            shape: 'spline',
        }
    };
    var secondTrace = {
        x: EMMonths,
        y: em2Data,
        type: 'line+markers',
        name: name2,
        marker: {
            color: em2Color,
            size: 6
        },
        line: {
            color: em2Color,
            width: 2,
            shape: 'spline',
        }
    };
    var thirdTrace = {
        x: EMMonths,
        y: em3Data,
        type: 'line+markers',
        name: name3,
        marker: {
            color: em3Color,
            size: 6
        },
        line: {
            color: em3Color,
            width: 2,
            shape: 'spline',
        }
    };
    var fourthTrace = {
        x: EMMonths,
        y: em4Data,
        type: 'line+markers',
        name: name4,
        marker: {
            color: em4Color,
            size: 6
        },
        line: {
            color: em4Color,
            width: 2,
            shape: 'spline',
        }
    };
    var fifthTrace = {
        x: EMMonths,
        y: em5Data,
        type: 'line+markers',
        name: name5,
        marker: {
            color: em5Color,
            size: 6
        },
        line: {
            color: em5Color,
            width: 2,
            shape: 'spline',
        }
    };

    var lineconfig = {
    displaylogo: false,
    autosizable: true,
    responsive: true,
    };
    
    var lineData = [firstTrace, secondTrace, thirdTrace, fourthTrace, fifthTrace];
    
    Plotly.newPlot(LINECHART, lineData, linelayout, lineconfig);
}