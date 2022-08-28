import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Chart } from "react-google-charts";

function GanttChart ({google}) {
  const [chart, setChart] = useState(null);

  useEffect(() => {
    if (google && !chart) {
      // Create the data table.
      const data = new google.visualization.DataTable();
      data.addColumn('string', 'Task ID');
      data.addColumn('string', 'Task Name');
      data.addColumn('string', 'Team');
      data.addColumn('date', 'Start Date');
      data.addColumn('date', 'End Date');
      data.addColumn('number', 'Duration');
      data.addColumn('number', 'Percent Complete');
      data.addColumn('string', 'Dependencies');



    data.addRows([
        ['1', 'Technical Inventory', 'Developers',
         new Date(2023, 2, 6), new Date(2023, 3, 24), null, 100, null],
        ['2', 'UX Research', 'UX, IA and Designers',
         new Date(2023, 2, 6), new Date(2023, 2, 17), null, 100, null],
        ['3', 'Wireframing', 'UX and IA',
         new Date(2023, 2, 13), new Date(2023, 2, 24), null, 100, null],
        ['4', 'Review and Revise Wireframes', 'Designers, UX and IA and Stakeholders',
         new Date(2023, 2, 20), new Date(2023, 3, 3), null, 100, null],
        ['5', 'High Fidelity Mock-ups', 'Designers',
         new Date(2023, 3, 3), new Date(2023, 3, 17), null, 100, null],
        ['6', 'Review and Revise Mock-ups', 'Designers, Developers and Stakeholders',
         new Date(2023, 3, 10), new Date(2023, 3, 24), null, 100, null],
        ['7', 'Sprint One', 'Developers',
         new Date(2023, 3, 24), new Date(2023, 4, 24), null, 100, null],
         ['8', 'Review', 'QA and Stakeholders',
         new Date(2023, 4, 10), new Date(2023, 4, 24), null, 100, null],
         ['2', 'Sprint Two', 'Developers',
         new Date(2023, 4, 24), new Date(2023, 5, 24), null, 100, null],
         ['9', 'Review', 'QA and Stakeholders',
         new Date(2023, 5, 10), new Date(2023, 5, 24), null, 100, null],
         ['10', 'Sprint Three', 'Developers',
         new Date(2023, 5, 24), new Date(2023, 6, 24), null, 10, null],
        ['11', 'Accessibility Testing and Remediation', 'QA and Developers',
         new Date(2023, 5, 24), new Date(2023, 6, 24), null, 50, null],
        ['12', 'Security Testing and Remediation', 'QA and Developers',
         new Date(2023, 5, 24), new Date(2023, 6, 24), null, 28, null],
        ['13', 'Acceptance Testing', 'Stakeholders',
         new Date(2023, 6, 24), new Date(2023, 7, 7), null, 0, null],
         ['14', 'Final Remediation and Hand-off', 'Developers',
         new Date(2023, 6, 24), new Date(2023, 7, 24), null, 0, null],
      ]);

      // Set chart options
      let options = {

          height: 500,
        gantt: {
          palette:[
            {
              "color": "#0b79ad",
              "dark": "#45e7d8"
            },
              
          ],
          trackHeight: 30,
          innerGridTrack: {fill: '#fcfaf5'},
          innerGridDarkTrack: {fill: '#ede6da'},
          innerGridHorizLine:{stroke: '#fcfaf5'},
          percentStyle:{fill:'#82e6da'},
        }
      };

      console.log(options);

      // Instantiate and draw our chart, passing in some options.
      const newChart = new google.visualization.Gantt(document.getElementById('ganttChart'));
      newChart.draw(data, options);

      setChart(newChart);
    }
  }, [google, chart]);

  return (
    <>
      {!google && <Spinner />}
      <div id="ganttChart" className={!google ? 'd-none' : ''} />
    </>
  )
}

export default GanttChart;