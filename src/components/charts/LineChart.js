import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

function LineChart ({google}) {
  const [chart, setChart] = useState(null);

  useEffect(() => {
    if (google && !chart) {
      // Create the data table.
      const data = new google.visualization.arrayToDataTable([
          ['Year', 'Site Views'],
          ['2018',  64388],
          ['2019',  59421],
          ['2020',  38002],
          ['2021',  31464]
        ]);

      // Set chart options
      var options = {
          'title': 'Site Views by Year',
          'titleTextStyle':{ color: '#fcfaf5',fontName: '"Exo 2", sans-serif;',fontSize: '2rem'},
          'curveType': 'function',
          'legend': { 'position': 'bottom' },
          'legendTextStyle': { color: '#fcfaf5',fontName: '"Exo 2", sans-serif;',fontSize: '2rem'},
          'hAxis.gridlines': {color: '#fcfaf5', minSpacing: 20},
          'vAxis.gridlines.color': '#fcfaf5',
          'vAxis':{
            'textStyle': { color: '#fcfaf5',fontName: '"Exo 2", sans-serif;', fontSize: '2rem'},
            'baselineColor': '#fcfaf5',
            'gridlineColor': '#fcfaf5',
          },
          'hAxis':{
            'textStyle': { color: '#fcfaf5',fontName: '"Exo 2", sans-serif;', fontSize: '2rem'},
            'baselineColor': '#fcfaf5',
            'gridlineColor': '#fcfaf5',
          },
          'hAxis.baselineColor':'#fcfaf5',
          'colors':['#889fff', '#fcfaf5', '#fcfaf5'],
          'backgroundColor':'#29251e',
          'annotations': {
            'textStyle': {
              'fontName': 'Times-Roman',
              'fontSize': 18,
              'bold': true,
              'italic': true,
              // The color of the text.
              'color': '#fff',
              // The color of the text outline.
              'auraColor': '#fff',
              // The transparency of the text.
              'opacity': 0.8
            }
          }
        };

      // Instantiate and draw our chart, passing in some options.
      const newChart = new google.visualization.LineChart(document.getElementById('curveChart'));
      newChart.draw(data, options);

      setChart(newChart);
    }
  }, [google, chart]);

  return (
    <>
      {!google && <Spinner />}
      <div id="curveChart" className={!google ? 'd-none' : ''} />
    </>
  )
}

export default LineChart;