var f1team = [{
        "team": "Mercedes",
        "score": 712,
        "color": "color: silver"
    }, {
        "team": "Mclaren",
        "score": 100,
        "color": "color: silver"
    },
    {
        "team": "Ferrari",
        "score": 590,
        "color": "color: silver"
    },
    {
        "team": "Renault",
        "score": 285,
        "color": "color: silver"
    },
    {
        "team": "Red Bull",
        "score": 455,
        "color": "color: silver"
    },
    {
        "team": "Sauber",
        "score": 58,
        "color": "color: aqua"
    }
];

// var teamStr="";
for (var x = 0; x < f1team.length; x++) {
    console.log(f1team[x].team + " " + f1team[x].score);
    // teamStr += '<tr>';
    // teamStr += '<td>' + f1team[x].team + '</td>'
    // teamStr += '<td>' + f1team[x].score + '</td>'
    // teamStr += '</tr>'
}

// document.getElementById("teamset").innerHTML = teamStr;

// 長條圖
google.charts.load('current', {
    packages: ['corechart']
});
// table chart
google.charts.load('current', {
    'packages': ['table']
});

google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(drawTable);


function drawChart() {
    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Team');
    data.addColumn('number', 'Score');
    // data.addColumn('string', 'color');
    // data.addRows([
    //     ['Mercedes', 712],
    //     ['Mclaren', 100],
    //     ['Ferrari', 590],
    //     ['Red Bull', 455],
    //     ['Renault', 285]
    // ]);
    for (var x = 0; x < f1team.length; x++) {
        data.addRows([
            [f1team[x].team, f1team[x].score]
        ]);
    };

    // Set chart options
    var options = {
        'title': '2017 F1 車隊比較圖',
        'width': 800,
        'height': 600,
        'colors': ['red']
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}

function drawTable() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Team');
    data.addColumn('number', 'Score');

    // data.addRows([
    //   ['Mercedes',  712],
    //   ['Mclaren',   100],
    //   ['Ferrari', 590],
    //   ['Renault', 455],
    //   ['Red Bull',  285]
    // ]);

    for (var x = 0; x < f1team.length; x++) {
        data.addRows([
            [f1team[x].team, f1team[x].score]
        ]);
    };

    var table = new google.visualization.Table(document.getElementById('table_div'));

    table.draw(data, {
        width: '500',
        height: '400'
    });
}