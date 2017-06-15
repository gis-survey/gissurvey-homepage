google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawStuff);

      function drawStuff() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Year');
        data.addColumn('number', 'Cost');
        data.addColumn({type: 'string', role: 'annotation'});
        data.addRows([
          ["2012", 71, '$71'],
          ["2016", 48, '$48']
          ]);

        var formatter = new google.visualization.NumberFormat(
            { prefix: '$'}
        ); 

        formatter.format(data, 1);

        /*var view = new google.visualization.DataView(data);
        view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);*/
        var view = new google.visualization.DataView(data);
        view.setColumns([0, 1, 2]);

        var options = {
          title: 'Cost Per Sample Hour',
          titleTextStyle: {
            fontName: 'Arial',
            fontSize: 14,
            bold: true
          },
          width: 500,
          legend: { position: 'none' },
          chart: { title: 'Cost Per Sample Hour Comparison' },
          bar: { groupWidth: "70%" },
          vAxis: {format: 'currency'},
          colors:['#0069aa']
        };


        var chart = new google.visualization.ColumnChart(document.getElementById('cost_div'));
        chart.draw(view, options);
      };