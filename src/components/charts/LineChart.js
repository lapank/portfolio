import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

function LineChart ({google}) {
  const [chart, setChart] = useState(null);

  useEffect(() => {
    if (google && !chart) {
      // Create the data table.
      const data = new google.visualization.arrayToDataTable([
          ['Year', 'Sales', 'Expenses'],
          ['2004',  1000,      400],
          ['2005',  1170,      460],
          ['2006',  660,       1120],
          ['2007',  1030,      540]
        ]);

      // Set chart options
      var options = {
          title: 'Company Performance',
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