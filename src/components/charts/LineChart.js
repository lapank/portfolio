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
          title: 'Site Views by Year',
          curveType: 'function',
          legend: { position: 'bottom' }
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