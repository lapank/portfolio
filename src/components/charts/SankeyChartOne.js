import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

function SankeyChartOne ({google}) {
  const [chart, setChart] = useState(null);

  useEffect(() => {
    if (google && !chart) {
      // Create the data table.
      const data = new google.visualization.DataTable();
    data.addColumn('string', 'From');
    data.addColumn('string', 'To');
    data.addColumn('number', 'Weight');
    data.addRows([
       [ 'Home Page', 'Frequently Used Resources', 2000 ],
       [ 'Home Page', 'Organisation Charts', 1200 ],
       [ 'Home Page', 'Search', 684 ],
       [ 'Home Page', 'Departments', 636 ],
       [ 'Home Page', 'Forms and Templates', 579 ],
       [ 'Home Page', 'Drop-off', 4800 ],
        ]);

     let colors = ['#82e6da', '#06465f', '#0b79ad', '#45e7d8',
                  '#0b9a94', '#0a9964', '#82e6da'];

    let options = {
      height: 300,
      sankey: {
        node: {

          nodePadding: 20,
          colors: colors,
          label: { 
                fontName: "'Exo 2', sans-serif",
                fontSize: 14,
                color: '#29251e',
                },
        },
        link: {
          colorMode: 'gradient',
          colors: colors
        }
      }
    };

      // Instantiate and draw our chart, passing in some options.
      const newChart = new google.visualization.Sankey(document.getElementById('sankeyChartOne'));
      newChart.draw(data, options);

      setChart(newChart);
    }
  }, [google, chart]);

  return (
    <>
      {!google && <Spinner />}
      <div id="sankeyChartOne" className={!google ? 'd-none' : ''} />
    </>
  )
}

export default SankeyChartOne;