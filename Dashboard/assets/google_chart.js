google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data1 = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Work',     11],
          ['Eat',      2],
          ['Commute',  2],
          ['Watch TV', 2],
          ['Sleep',    7]
        ]);
        var data2 = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Work',     5],
          ['Eat',      5],
          ['Commute',  5],
          ['Watch TV', 5],
          ['Sleep',    5]
        ]);
        var data3 = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Work',     30],
          ['Eat',      2],
          ['Commute',  3],
          ['Watch TV', 4],
          ['Sleep',    5]
        ]);

        var options1 = {
          title: 'This is the Test1',
          colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
          titleTextStyle: {
            color: "black",               
            fontName: "Barlow",    
            fontSize: 25,               
            bold: true,                 
            italic: false                
            },

        };
        var options2 = {
          title: 'This is the Test2',
          colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
          titleTextStyle: {
            color: "black",               
            fontName: "Barlow",    
            fontSize: 25,               
            bold: true,                 
            italic: false                
            },

        };
        var options3 = {
          title: 'This is the Test3',
          colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
          titleTextStyle: {
            color: "black",        
            fontName: "Barlow",    
            fontSize: 25,               
            bold: true,                 
            italic: false
            },

        };

        var chart1 = new google.visualization.PieChart(document.getElementById('piechart1'));
        var chart2 = new google.visualization.PieChart(document.getElementById('piechart2'));
        var chart3 = new google.visualization.PieChart(document.getElementById('piechart3'));

        chart1.draw(data1, options1);
        chart2.draw(data2, options2);
        chart3.draw(data3, options3);
    }