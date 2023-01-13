import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

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
         ['9', 'Sprint Two', 'Developers',
         new Date(2023, 4, 24), new Date(2023, 5, 24), null, 100, null],
         ['10', 'Review', 'QA and Stakeholders',
         new Date(2023, 5, 10), new Date(2023, 5, 24), null, 100, null],
         ['11', 'Sprint Three', 'Developers',
         new Date(2023, 5, 24), new Date(2023, 6, 24), null, 100, null],
        ['12', 'Accessibility Testing and Remediation', 'QA and Developers',
         new Date(2023, 5, 24), new Date(2023, 6, 24), null, 100, null],
        ['13', 'Security Testing and Remediation', 'QA and Developers',
         new Date(2023, 5, 24), new Date(2023, 6, 24), null, 100, null],
        ['14', 'Acceptance Testing', 'Stakeholders',
         new Date(2023, 6, 24), new Date(2023, 7, 7), null, 100, null],
         ['15', 'Final Remediation and Hand-off', 'Developers',
         new Date(2023, 6, 24), new Date(2023, 7, 24), null, 100, null],
      ]);

      // Set chart options
      let options = {
          backgroundColor:{fill: '#615d57'},
          height: 500,
          hAxis: {
            textStyle: { color: '#fcfaf5',fontName: '"Exo 2", sans-serif;', fontSize: '2rem'},
          },
          vAxis: {
            textStyle: { color: '#fcfaf5',fontName: '"Exo 2", sans-serif;', fontSize: '2rem'},
          },
        gantt: {
          labelStyle: {
            fontSize: 14,
            fontColor: '#fff'
          },
          palette:[
            {
              "color": "#889fff",
              "dark": "#5576FF"
            },
              
          ],
          trackHeight: 30,
          innerGridTrack: {fill: '#383531'},
          innerGridDarkTrack: {fill: '#615d57'},
          innerGridHorizLine:{stroke: '#383531'},
          percentStyle:{fill:'#82e6da'},
          
        }
      };

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