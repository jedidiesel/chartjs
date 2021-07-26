var xmlhttp = new XMLHttpRequest();
var url = "http://127.0.0.1:5500/test.json";
xmlhttp.open("GET",url, true);
xmlhttp.send();
xmlhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        // console.log(data)
        var months = data.months_temperature.map(function(elem) {
            return elem.date;
        });
        // console.log(months)
        var high = data.months_temperature.map(function(elem) {
            return elem.high;
        });
        var low = data.months_temperature.map(function(elem) {
            return elem.low;
        });

        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: months,
                datasets: [{
                    label: 'High Temperature F',
                    data: high,
                    backgroundColor: 'transparent',
                    borderColor: 'red',
                    borderWidth: 4,
                },
                {
                    label: 'Low Temperature F',
                    data: low,
                    backgroundColor: 'transparent',
                    borderColor: 'green',
                    borderWidth: 4,
                }
                ]
            },
            options: {
                elements:{
                    line:{
                        tension:0
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

    }
}

