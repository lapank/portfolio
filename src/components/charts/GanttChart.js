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
        ['2023Spring', 'Technical Inventory', 'Developers',
         new Date(2023, 2, 6), new Date(2023, 3, 24), null, 100, null],
        ['2023Summer', 'UX Research', 'UX, IA and Designers',
         new Date(2023, 2, 6), new Date(2023, 2, 17), null, 100, null],
        ['2023Autumn', 'Wireframing', 'UX and IA',
         new Date(2023, 2, 13), new Date(2023, 2, 24), null, 100, null],
        ['2023Winter', 'Review and Revise Wireframes', 'Designers, UX and IA and Stakeholders',
         new Date(2023, 2, 20), new Date(2023, 3, 3), null, 100, null],
        ['2024Spring', 'High Fidelity Mock-ups', 'Designers',
         new Date(2023, 3, 3), new Date(2023, 3, 17), null, 50, null],
        ['2024Summer', 'Review and Revise Mock-ups', 'Designers, Developers and Stakeholders',
         new Date(2023, 3, 10), new Date(2023, 3, 24), null, 0, null],
        ['2024Autumn', 'Sprint One', 'Developers',
         new Date(2023, 4, 3), new Date(2023, 4, 28), null, 0, null],
         ['2024Winter', 'Review Build', 'QA and Stakeholders',
         new Date(2023, 5, 1), new Date(2023, 5, 5), null, 0, null],
         ['2', 'Sprint Two', 'Developers',
         new Date(2023, 5, 1), new Date(2023, 6, 2), null, 0, null],
         ['Football', 'Review Build', 'QA and Stakeholders',
         new Date(2023, 5, 29), new Date(2023, 6, 2), null, 100, null],
         ['3', 'Sprint Three', 'Developers',
         new Date(2023, 6, 2), new Date(2023, 6, 30), null, 0, null],
        ['Baseball', 'Accessibility Testing and Remediation', 'QA and Developers',
         new Date(2023, 6, 2), new Date(2023, 6, 30), null, 14, null],
        ['Basketball', 'Security Testing and Remediation', 'QA and Developers',
         new Date(2023, 6, 2), new Date(2023, 6, 30), null, 86, null],
        ['Hockey', 'Acceptance Testing', 'Stakeholders',
         new Date(2023, 7, 4), new Date(2023, 7, 15), null, 89, null],
         ['3', 'Final Remediation and Hand-off', 'Developers',
         new Date(2023, 7, 4), new Date(2023, 7, 29), null, 89, null],
      ]);

    console.log(data);

      // Set chart options
      let options = {

          height: 500,
        gantt: {
          palette:[
            {
              "color": "#f00",
              "dark": "#0f0"
            }
            
              
          ],
          trackHeight: 30,
          innerGridTrack: {fill: '#fcfaf5;'},
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