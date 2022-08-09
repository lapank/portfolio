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
    <h2 className="headerText gradientText">Case Study: Company Intranet</h2>
    <p className="bodyTextLight">Sanky Tree, Line Chart, Gantt Chart, Pie Chart. Discovery Period. Take stock of intranet's current offerings, goals, and pain points before charting a path forward. How do People Currently use the Intranet?</p>
    	<div className='row'>
    		<div className="col-6">
        <div className="lightCard">
        <p className="bodyTextDark">This date was gathered from the Feedback Survey and Suggestion box on Skynet to create a total of 122 responses from 2017 to present.</p>
        <div className="centerAbsolute">
          <PizzaChart google={google}/>
        </div>
        </div>
  	    </div>
  	    <div className="col-6">
        <div className="lightCard">
        <div className="centerAbsolute">
          <LineChart google={google} />
        </div>
        </div>
  			</div>
      </div>
        
        <div className='row mt-5 mb-5'>
          <div className="col-4">
          <div className="lightCard">
          <div className="centerAbsolute">
            <SankeyChartOne google={google} />
           </div> 
          </div>
          </div>
          <div className="col-4">
          <div className="lightCard">
          <div className="centerAbsolute">
            <SankeyChartTwo google={google} />
            </div>
            </div>
          </div>
          <div className="col-4">
          <div className="lightCard">
          <div className="centerAbsolute">
            <SankeyChartThree google={google} />
            </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <GanttChart google={google} />
        </div>
        <h2 className="headerText">Customer Journey Map:</h2>
        <table className="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th className="smallTitleLight" scope="col">Discovery</th>
            <th className="smallTitleLight" scope="col">Research</th>
            <th className="smallTitleLight" scope="col">Adoption</th>
            <th className="smallTitleLight" scope="col">Advocacy</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="smallTitleLight" scope="row">Actions</th>
            <td className="bodyTextLight">Stubles upon Intranet through staff member recommendation or onboarding matterials</td>
            <td className="bodyTextLight">Asks staff member if Intranet is any good, checked out larger intranet competator.</td>
            <td className="bodyTextLight">Continues to refer to intranet when in need.</td>
            <td className="bodyTextLight">Recomends the intranet as a resource to others.</td>
          </tr>
          <tr>
            <th className="smallTitleLight" scope="row">Motivations</th>
            <td className="bodyTextLight">Need to find a resource. Need to find information.</td>
            <td className="bodyTextLight">Want to make sure this tool is worth it before I spend time with it.</td>
            <td className="bodyTextLight">This tool continues to work for me.</td>
            <td className="bodyTextLight">I want to share this good tool with other collegues who need it.</td>
          </tr>
          <tr>
            <th className="smallTitleLight" scope="row">Questions</th>
            <td className="bodyTextLight">Will this tool be worth my time?</td>
            <td className="bodyTextLight">Is this tool better than the alternatives?</td>
            <td className="bodyTextLight">Will this tool continue to function how I like?</td>
            <td className="bodyTextLight">Is this good enough to recomend to coworkers?</td>
          </tr>
            <tr>
            <th className="smallTitleLight" scope="row">Pain Points</th>
            <td className="bodyTextLight">Can't find intranet site as a resource.</td>
            <td className="bodyTextLight">Find that PRISM is a better tool.</td>
            <td className="bodyTextLight">Find tool stops being useful or updated.</td>
            <td className="bodyTextLight">Don't like the tool so they won't recomend it.</td>
          </tr>
        </tbody>
      </table>
		</div>
  );
}

export default Charts;