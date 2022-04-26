google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

    var data = google.visualization.arrayToDataTable([
    [' ', 'Gratefulness Index*'],
    ['Ben',         1.824],
    ['Embo',        1.576],
    ['B',           1.166],
    ['Sakura',      1.079],
    ['Muriam',      1.078],
    ['Rickard',     1.012],
    ['Bomberlux',   0.990],
    ['Mo',          0.849],
    ['Steqs',       0.837],
    ['Drew',            0],
    ['Broad',           0],
    ]);

    var options = {
    title: 'Gratefulness Index*',
    backgroundColor: '#f7dde9',
    colors: ['#c76982'],
    legendTextStyle: { color: '#ad2139' },
    titleTextStyle: { color: '#c76982' },
    legend: 'none',
    chartArea: {width: '50%'},
    hAxis: {
      title: 'Score',
      minValue: 0,
    },
    };

    var chart = new google.visualization.BarChart(document.getElementById('grateful'));

    chart.draw(data, options);
}

$(window).resize(function() {
    if(this.resizeTO) clearTimeout(this.resizeTO);
    this.resizeTO = setTimeout(function() {
        $(this).trigger('resizeEnd');
    }, 500);
});

//redraw graph when window resize is completed  
$(window).on('resizeEnd', function() {
    drawBasic();
});

