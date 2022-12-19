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

    let colors = ['#889fff', '#5576FF', '#224DFF', '#2F4ED3',
                  '#243EAB', '#889fff', '#5576FF'];

    let options = {
      height: 300,
      sankey: {
        node: {

          nodePadding: 20,
          colors: colors,
          label: { 
                fontName: "'Exo 2', sans-serif",
                fontSize: 14,
                color: '#fff',
                },
        },
        link: {
          colorMode: 'gradient',
          colors: colors
        }
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