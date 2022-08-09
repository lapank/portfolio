import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

function PizzaChart ({google}) {
  const [chart, setChart] = useState(null);

  useEffect(() => {
    if (google && !chart) {
      // Create the data table.
      const data = new google.visualization.DataTable();
      data.addColumn('string', 'Concerns');
      data.addColumn('number', 'Comments');
      data.addRows([
        ['Facility Requests', 29],
        ['Technology Requests', 20],
        ['Personel Requests', 48],
        ['Recognition', 9],
        ['Strategy Suggestions', 16]
      ]);

      // Set chart options
      var options = {'title':'What do people want from the intranet?',
                    'width':400,
                    'height':300,
                    'backgroundColor':'#fcfaf5',
                    'backgroundColor.stroke':'#fcfaf5',
                    'pieSliceTextStyle':{color: '#29251e', fontName: '"Exo 2", sans-serif;', fontSize: '2rem'},
                    slices: {
                    0: { color: '#82e6da' },
                    1: { color: '#45e7d8' },
                    2: { color: '#0b79ad' },
                    3: { color: '#0b9a94' },
                    4: { color: '#0a9964' }
                  }
                };

      // Instantiate and draw our chart, passing in some options.
      const newChart = new google.visualization.PieChart(document.getElementById('pizzaChart'));
      newChart.draw(data, options);

      setChart(newChart);
    }
  }, [google, chart]);

  return (
    <>
      {!google && <Spinner />}
      <div id="pizzaChart" className={!google ? 'd-none' : ''} />
    </>
  )
}

export default PizzaChart;