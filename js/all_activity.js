$(function() {
    google.charts.load('current', {'packages': ['corechart', 'table']});

    var dataValues = [{DateScore: '2020-10', Sakura: 212, B: 170, Bomberlux: 0, Steqs: 76, Muriam: 0, Mo: 0, Rickard: 0, Embo: 4, Drew: 0, Broad: 0, Ben: 0, },
     {DateScore: '2020-11', Sakura: 953, B: 607, Bomberlux: 322, Steqs: 290, Muriam: 17, Mo: 0, Rickard: 330, Embo: 0, Drew: 2, Broad: 0, Ben: 0, },
     {DateScore: '2020-12', Sakura: 1187, B: 474, Bomberlux: 679, Steqs: 75, Muriam: 57, Mo: 218, Rickard: 550, Embo: 4, Drew: 21, Broad: 0, Ben: 0, }, 
     {DateScore: '2021-01', Sakura: 745, B: 451, Bomberlux: 526, Steqs: 76, Muriam: 194, Mo: 96, Rickard: 498, Embo: 0, Drew: 19, Broad: 0, Ben: 0, },
     {DateScore: '2021-02', Sakura: 350, B: 356, Bomberlux: 367, Steqs: 17, Muriam: 192, Mo: 33, Rickard: 29, Embo: 0, Drew: 3, Broad: 0, Ben: 0, }, 
     {DateScore: '2021-03', Sakura: 770, B: 573, Bomberlux: 682, Steqs: 346, Muriam: 424, Mo: 51, Rickard: 22, Embo: 0, Drew: 6, Broad: 21, Ben: 0, }, 
     {DateScore: '2021-04', Sakura: 506, B: 407, Bomberlux: 585, Steqs: 376, Muriam: 385, Mo: 9, Rickard: 5, Embo: 25, Drew: 17, Broad: 57, Ben: 0, }, 
     {DateScore: '2021-05', Sakura: 576, B: 616, Bomberlux: 503, Steqs: 275, Muriam: 405, Mo: 6, Rickard: 0, Embo: 38, Drew: 15, Broad: 0, Ben: 0, }, 
     {DateScore: '2021-06', Sakura: 1242, B: 1982, Bomberlux: 1634, Steqs: 847, Muriam: 944, Mo: 316, Rickard: 10, Embo: 79, Drew: 0, Broad: 0, Ben: 0, }, 
     {DateScore: '2021-07', Sakura: 2045, B: 1426, Bomberlux: 1336, Steqs: 908, Muriam: 1109, Mo: 635, Rickard: 0, Embo: 61, Drew: 12, Broad: 0, Ben: 0, }, 
     {DateScore: '2021-08', Sakura: 685, B: 744, Bomberlux: 615, Steqs: 579, Muriam: 427, Mo: 297, Rickard: 0, Embo: 23, Drew: 0, Broad: 0, Ben: 30, }, 
     {DateScore: '2021-09', Sakura: 71, B: 492, Bomberlux: 411, Steqs: 614, Muriam: 263, Mo: 48, Rickard: 0, Embo: 29, Drew: 0, Broad: 0, Ben: 0, }, 
     {DateScore: '2021-10', Sakura: 0, B: 338, Bomberlux: 288, Steqs: 362, Muriam: 287, Mo: 88, Rickard: 0, Embo: 11, Drew: 0, Broad: 0, Ben: 0, }, 
     {DateScore: '2021-11', Sakura: 0, B: 317, Bomberlux: 236, Steqs: 346, Muriam: 301, Mo: 26, Rickard: 0, Embo: 31, Drew: 1, Broad: 0, Ben: 0, }, 
     {DateScore: '2021-12', Sakura: 267, B: 461, Bomberlux: 445, Steqs: 358, Muriam: 345, Mo: 7, Rickard: 0, Embo: 38, Drew: 3, Broad: 0, Ben: 0, }, 
     {DateScore: '2022-01', Sakura: 71, B: 194, Bomberlux: 150, Steqs: 174, Muriam: 122, Mo: 0, Rickard: 0, Embo: 20, Drew: 0, Broad: 0, Ben: 0, }, 
     {DateScore: '2022-02', Sakura: 52, B: 132, Bomberlux: 119, Steqs: 52, Muriam: 69, Mo: 3, Rickard: 0, Embo: 11, Drew: 0, Broad: 0, Ben: 0, },
     {DateScore: '2022-03', Sakura: 23, B: 139, Bomberlux: 108, Steqs: 150, Muriam: 76, Mo: 0, Rickard: 0, Embo: 27, Drew: 0, Broad: 0, Ben: 0, },
     {DateScore: '2022-04', Sakura: 0, B: 220, Bomberlux: 108, Steqs: 199, Muriam: 69, Mo: 8, Rickard: 15, Embo: 85, Drew: 0, Broad: 0, Ben: 0, }];

    var Data = {
        displayed: [...dataValues],
        hidden: Object.keys(dataValues[0]).reduce((a, c) => {
            a[c] = false;
            return a;
        }, {}),
        map: Object.keys(dataValues[0])
    };

    var colors = ['#f495bf', '#b4ec5c', '#ff9376', '#3c68c8', '#d5aaff', '#1c1c1e', '#ae8a5a',
        '#892723', '#5f1f65', '#ad7586', '#faa61a'];
        
    google.charts.setOnLoadCallback(DrawChartScores);

    function DrawChartScores() {

        var data = new google.visualization.DataTable();
        var options = {
            title: 'Individual activity by messages — Tap on the right to toggle lines on/off!',
            vAxis: { viewWindow : { min : 0 } },
            curveType: 'function',
            backgroundColor: '#f7dde9',
            legendTextStyle: { color: '#c76982', fontSize: 18 },
            titleTextStyle: { color: '#c76982' },
            width: '80%',
            height: '80%',
            series: Data.map.reduce((a, c, i) => {
                a[i] = {color: colors[i]};
                return a;
            }, {})
        };

        data.addColumn('date', 'Day');
        data.addColumn('number', 'Sakura');
        data.addColumn('number', 'B');
        data.addColumn('number', 'Bomberlux');
        data.addColumn('number', 'Steqs');
        data.addColumn('number', 'Muriam');
        data.addColumn('number', 'Mo');
        data.addColumn('number', 'Rickard');
        data.addColumn('number', 'Embo');
        data.addColumn('number', 'Drew');
        data.addColumn('number', 'Broad');
        data.addColumn('number', 'Ben');

        for (var i = 0; i < dataValues.length; i++) {
            let newRow = Object.values(dataValues[i]);
            newRow[0] = new Date(newRow[0]);
            data.addRow(newRow);
        }

        var chart = new google.visualization.LineChart(document.getElementById('all_activity'));
        var last = {
            column: true,
            row: true
        };


        function showHideSeries() {
            var sel = chart.getSelection();
            if (sel.length === 0 && last.row === null) {
                Data.hidden[Data.map[last.column]] = !Data.hidden[Data.map[last.column]];
            } else if (sel.length && sel[0].row === null) {
                // toggle the current item selected
                Data.hidden[Data.map[sel[0].column]] = !Data.hidden[Data.map[sel[0].column]];
                last = sel[0];
            } else {
                return;
            }
            vparse(data);
            options = vkillLegend(options);
            chart.draw(data, options);

        }

        google.visualization.events.addListener(chart, 'select', showHideSeries);
        chart.draw(data, options);

    }

    function vparse(data) {
        Data.displayed.reduce((a, c, i) => {
            for (let k in c) {
                if (k === "DateScore") continue;
                if (Data.hidden[k])
                    data.setValue(i, Data.map.indexOf(k), null);
                else
                    data.setValue(i, Data.map.indexOf(k), c[k]);
            }
            return true;
        }, []);
        return data;
    }

    function vkillLegend(options) {
        options.series = Object.keys(options.series).reduce((a, c, i) => {
            let current = {};
            if (Data.hidden[Data.map[i]]) current.color = "#CCCCCC";
            else {
                c.color = null;
                current.color = colors[i - 1];
            }
            a[i - 1] = current;
            return a;
        }, {});
        return options;
    }
});