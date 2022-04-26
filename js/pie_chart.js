$(function() {
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

    var data = google.visualization.arrayToDataTable([
      ['Activity', 'Messages sent'],
      ['B',        10099],
      ['Sakura',    9754],
      ['Bomberlux', 9114],
      ['Steqs',     6120],
      ['Muriam',    5686],
      ['Mo',        1841],
      ['Rickard',   1459],
      ['Embo',       486],
      ['Drew',        99],
      ['Broad',       78],
      ['Ben',         30]
    ]);

    var options = {
        title: 'Amount of messages per person — 50.000 in total!',
        backgroundColor: '#f7dde9',
        legendTextStyle: { color: '#ad2139' },
        titleTextStyle: { color: '#c76982' },
        legend: 'none',
        slices: [{color: '#b4ec5c'},
        {color: '#f495bf'},
        {color: '#ff9376'},
        {color: '#3c68c8'},
        {color: '#d5aaff'},
        {color: '#1c1c1e'},
        {color: '#ae8a5a'},
        {color: '#892723'},
        {color: '#5f1f65'},
        {color: '#ad7586'},
        {color: '#faa61a'},]
    };                   

    var chart = new google.visualization.PieChart(document.getElementById('pie_chart'));
       
    chart.draw(data, options);
    } 
});            