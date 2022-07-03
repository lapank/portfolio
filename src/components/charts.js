
import {chartData} from './ChartsData.js';


function chartsContent(props) {
  // Correct! There is no need to specify the key here:
  return (
  	<div className='row'>
  		<div className="col-6">
        <div class="chart-container" focusable="true" aria-label="A consisten downward trend is reveiled when looking at page views from 2018 to 2022.  With 65,000 page views in 2018 cut in half to 31,464 in 2022." role="img" style="position: relative; height:50vh; width:50vw">
          <canvas id="lineChart"></canvas>
          <p className="white">{props.lineGraphText}</p>
        </div>
	    </div>
	    <div className="col-6">
	    	 <p className="white">{props.pieChartText}</p>
			</div>
		</div>
  );
}

function charts(props) {
  const item = props.item;
  const listItems = item.map((item) =>
    // Correct! Key should be specified inside the array.
    <chartsContent key={item.lineGraphText}
      lineGraphText = {item.lineGraphText}
      pieChartText = {item.pieChartText}/>
	);
  return (
    <div className="w-100 p-2">
      {listItems}
    </div>
  );
}

export default charts;