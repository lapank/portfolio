import PizzaChart from "./PizzaChart.js";
import DinosaurChart from "./DinosaurChart.js";
import LineChart from "./LineChart.js";
import GanttChart from "./GanttChart.js";
import SankeyChartOne from "./SankeyChartOne.js";
import SankeyChartTwo from "./SankeyChartTwo.js";
import SankeyChartThree from "./SankeyChartThree.js";
import useGoogleCharts from './useGoogleCharts.js';


function Charts() {
  const google = useGoogleCharts();
  // Correct! There is no need to specify the key here:
  return (
    <div className="w-100 p-5">
    	<div className='row'>
    		<div className="col-6">
        <p>This date was gathered from the Feedback Survey and Suggestion box on Skynet to create a total of 122 responses from 2017 to present.</p>
          <PizzaChart google={google}/>
  	    </div>
  	    <div className="col-6">
          <LineChart google={google} />
  			</div>
      </div>
        
        <div className='row mt-5 mb-5'>
          <div className="col-4">
            <SankeyChartOne google={google} />
          </div>
          <div className="col-4">
            <SankeyChartTwo google={google} />
          </div>
          <div className="col-4">
            <SankeyChartThree google={google} />
          </div>
        </div>
        <div className='row'>
          <GanttChart google={google} />
        </div>
        <h2>Customer Journey Map:</h2>
        <table className="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Discovery</th>
            <th scope="col">Research</th>
            <th scope="col">Adoption</th>
            <th scope="col">Advocacy</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Actions</th>
            <td>Stubles upon Intranet through staff member recommendation or onboarding matterials</td>
            <td>Asks staff member if Intranet is any good, checked out larger intranet competator.</td>
            <td>Continues to refer to intranet when in need.</td>
            <td>Recomends the intranet as a resource to others.</td>
          </tr>
          <tr>
            <th scope="row">Motivations</th>
            <td>Need to find a resource. Need to find information.</td>
            <td>Want to make sure this tool is worth it before I spend time with it.</td>
            <td>This tool continues to work for me.</td>
            <td>I want to share this good tool with other collegues who need it.</td>
          </tr>
          <tr>
            <th scope="row">Questions</th>
            <td>Will this tool be worth my time?</td>
            <td>Is this tool better than the alternatives?</td>
            <td>Will this tool continue to function how I like?</td>
            <td>Is this good enough to recomend to coworkers?</td>
          </tr>
            <tr>
            <th scope="row">Pain Points</th>
            <td>Can't find intranet site as a resource.</td>
            <td>Find that PRISM is a better tool.</td>
            <td>Find tool stops being useful or updated.</td>
            <td>Don't like the tool so they won't recomend it.</td>
          </tr>
        </tbody>
      </table>
		</div>
  );
}

export default Charts;