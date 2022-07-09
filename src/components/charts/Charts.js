import PizzaChart from "./PizzaChart.js";
import DinosaurChart from "./DinosaurChart.js";
import LineChart from "./LineChart.js";
import GanttChart from "./GanttChart.js";
import SankeyChart from "./SankeyChart.js";
import useGoogleCharts from './useGoogleCharts.js';


function Charts() {
  const google = useGoogleCharts();
  // Correct! There is no need to specify the key here:
  return (
    <div className="w-100 p-5">
    	<div className='row'>
    		<div className="col-6">
          <PizzaChart google={google}/>
  	    </div>
  	    <div className="col-6">
          <DinosaurChart google={google} />
  			</div>
      </div>
        <div className='row'>
          <LineChart google={google} />
        </div>
        <div className='row'>
          <SankeyChart google={google} />
        </div>
		</div>
  );
}

export default Charts;