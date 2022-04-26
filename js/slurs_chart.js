google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Slur', 'Bomberlux','Sakura', 'Muriam', 'B', 'Steqs',
        'Rickard', 'Mo', 'Drew', 'Alex', 'Ben', 'Embo',  { role: 'annotation' } ],
        ['fuck', parseFloat(95),  parseFloat(44), parseFloat(45), parseFloat(20), parseFloat(28), parseFloat(29), parseFloat(3), parseFloat(0), parseFloat(0), parseFloat(0), parseFloat(0),''],
        ['shit', parseFloat(68), parseFloat(44), parseFloat(33), parseFloat(34), parseFloat(16), parseFloat(16), parseFloat(21), parseFloat(2), parseFloat(0), parseFloat(0), parseFloat(0),''],
        ['bitch + heck', parseFloat(47), parseFloat(15), parseFloat(17), parseFloat(5), parseFloat(6), parseFloat(0), parseFloat(1), parseFloat(0), parseFloat(0), parseFloat(0), parseFloat(0),''],
    ]);

    var color_list = ['#ff9376', '#f495bf', '#d5aaff','#b4ec5c', '#3c68c8',  '#ae8a5a','#1c1c1e',
        '#5f1f65', '#ad7586', '#faa61a', '#892723'];

    var options = {
    backgroundColor: '#f7dde9',
    legend: 'none',
    isStacked: true,
    colors: color_list,
    };
        
    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    
    var chart = new google.visualization.ColumnChart(document.getElementById("slurs"));
    chart.draw(view, options);
};

