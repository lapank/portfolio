import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

function SankeyChartTwo ({google}) {
  const [chart, setChart] = useState(null);

  useEffect(() => {
    if (google && !chart) {
      // Create the data table.
      const data = new google.visualization.DataTable();
    data.addColumn('string', 'From');
    data.addColumn('string', 'To');
    data.addColumn('number', 'Weight');
    data.addRows([
       [ 'Home Page', 'Frequently Used Resources', 1200 ],
       [ 'Home Page', 'Organisation Charts', 1300 ],
       [ 'Home Page', 'Search', 905 ],
       [ 'Home Page', 'Forms and Templates', 649 ],
       [ 'Home Page', 'Drop-off', 3500 ],
        ]);

    let sankyColors = ['#eee', '#111', '#333', '#555',
                  '#777', '#999', '#bbb', '#ddd'];

      // Set chart options
     let options = {
        width: 300,
          height: 300,
          sankey: {
            node: {
              nodePadding: 40,
              colors: sankyColors,
              label: { 
                fontName: 'Source Sans Pro',
                fontSize: 14,
                color: '#000',
                },
            },
            link: {
              colorMode: 'gradient',
              colors: sankyColors
            },
          }
        };

      // Instantiate and draw our chart, passing in some options.
      const newChart = new google.visualization.Sankey(document.getElementById('sankeyChartTwo'));
      newChart.draw(data, options);

      setChart(newChart);
    }
  }, [google, chart]);

  return (
    <>
      {!google && <Spinner />}
      <div id="sankeyChartTwo" className={!google ? 'd-none' : ''} />
    </>
  )
}

export default SankeyChartTwo;