import './charts.scss';
import {chartData} from './chartData.js';


/*Donut chart*/
const data = {
    labels: [
      'Facility Requests',
      'Technology Requests',
      'Personel Requests',
      'Recognition',
      'Strategy Suggestions'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [29, 20, 48, 9, 16],
      backgroundColor: [
        'rgb(0, 0, 0)',
        'rgb(54, 54, 54)',
        'rgb(100, 100, 100)',
        'rgb(200, 200, 200)',
        'rgb(150, 150, 150)'
      ],
      hoverOffset: 4
    }]
  };

    const config = {
      type: 'doughnut',
      data: data
    };

    const myChart = new Chart(
      document.getElementById('myChart'),
      config
    );

/*Line Chart*/    
const labels = [
    '2018',
    '2019',
    '2020',
    '2022'
  ];

  const dataTwo = {
    labels: labels,
    datasets: [{
      label: 'Site Views By Year',
      backgroundColor: 'rgb(75, 52, 82)',
      borderColor: 'rgb(255,255,255)',
      data: [64388, 59421, 38002, 31464],
    }]
  };

  const configTwo = {
    type: 'line',
    data: dataTwo,
    options: {}
  };

const lineChart = new Chart(
      document.getElementById('lineChart'),
      configTwo
    );
/*Gnatt Chart*/

    google.charts.load('current', {'packages':['gantt']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

      var gdata = new google.visualization.DataTable();
      gdata.addColumn('string', 'Task ID');
      gdata.addColumn('string', 'Task Name', 'color: #b87333');
      gdata.addColumn('string', 'Resource', 'color: #b87333');
      gdata.addColumn('date', 'Start Date', 'color: #e5e4e2');
      gdata.addColumn('date', 'End Date', 'color: #e5e4e2');
      gdata.addColumn('number', 'Duration','color: #e5e4e2');
      gdata.addColumn('number', 'Percent Complete','color: #e5e4e2');
      gdata.addColumn('string', 'Dependencies','color: #e5e4e2');

      gdata.addRows([
        ['2014Spring', 'Spring 2014', 'spring',
         new Date(2014, 2, 22), new Date(2014, 5, 20), null, 100, null],
        ['2014Summer', 'Summer 2014', 'summer',
         new Date(2014, 5, 21), new Date(2014, 8, 20), null, 100, null],
        ['2014Autumn', 'Autumn 2014', 'autumn',
         new Date(2014, 8, 21), new Date(2014, 11, 20), null, 100, null],
        ['2014Winter', 'Winter 2014', 'winter',
         new Date(2014, 11, 21), new Date(2015, 2, 21), null, 100, null],
        ['2015Spring', 'Spring 2015', 'spring',
         new Date(2015, 2, 22), new Date(2015, 5, 20), null, 50, null],
        ['2015Summer', 'Summer 2015', 'summer',
         new Date(2015, 5, 21), new Date(2015, 8, 20), null, 0, null],
        ['2015Autumn', 'Autumn 2015', 'autumn',
         new Date(2015, 8, 21), new Date(2015, 11, 20), null, 0, null],
        ['2015Winter', 'Winter 2015', 'winter',
         new Date(2015, 11, 21), new Date(2016, 2, 21), null, 0, null],
        ['Football', 'Football Season', 'sports',
         new Date(2014, 8, 4), new Date(2015, 1, 1), null, 100, null],
        ['Baseball', 'Baseball Season', 'sports',
         new Date(2015, 2, 31), new Date(2015, 9, 20), null, 14, null],
        ['Basketball', 'Basketball Season', 'sports',
         new Date(2014, 9, 28), new Date(2015, 5, 20), null, 86, null],
        ['Hockey', 'Hockey Season', 'sports',
         new Date(2014, 9, 8), new Date(2015, 5, 21), null, 89, null]
      ]);

      var options = {
        height: 400,
        gantt: {
          palette: [
            {
              "color": "#777",
              "dark": "#555",
              "light": "#999"
            },
              
          ],
          trackHeight: 30,
          innerGridTrack: {fill: '#fff'},
          innerGridDarkTrack: {fill: '#eee'},
          labelStyle: {
           fontName: 'Source Sans Pro',
           fontSize: 14,
           color: '#000',
          },
        },

        backgroundColor:{
          fill: 'white',
        },
      };
console.log(options);
console.log(gdata);


      var chart = new google.visualization.Gantt(document.getElementById('chart_div'));

      chart.draw(gdata, options);
    }

    /*Sankey Diagram*/
    google.charts.load("current", {packages:["sankey"]});
  google.charts.setOnLoadCallback(drawSankyChart);
   function drawSankyChart() {
    var sankyDataOne = new google.visualization.DataTable();
    sankyDataOne.addColumn('string', 'From');
    sankyDataOne.addColumn('string', 'To');
    sankyDataOne.addColumn('number', 'Weight');
    sankyDataOne.addRows([
       [ 'Home Page', 'Frequently Used Resources', 2000 ],
       [ 'Home Page', 'Organisation Charts', 1200 ],
       [ 'Home Page', 'Search', 684 ],
       [ 'Home Page', 'Departments', 636 ],
       [ 'Home Page', 'Forms and Templates', 579 ],
       [ 'Home Page', 'Drop-off', 4800 ],
       
    ]);

    var sankyDataTwo = new google.visualization.DataTable();
    sankyDataTwo.addColumn('string', 'From');
    sankyDataTwo.addColumn('string', 'To');
    sankyDataTwo.addColumn('number', 'Weight');
    sankyDataTwo.addRows([
       [ 'Home Page', 'Frequently Used Resources', 1200 ],
       [ 'Home Page', 'Organisation Charts', 1300 ],
       [ 'Home Page', 'Search', 905 ],
       [ 'Home Page', 'Forms and Templates', 649 ],
       [ 'Home Page', 'Drop-off', 3500 ],
       
    ]);

    var sankyDataThree = new google.visualization.DataTable();
    sankyDataThree.addColumn('string', 'From');
    sankyDataThree.addColumn('string', 'To');
    sankyDataThree.addColumn('number', 'Weight');
    sankyDataThree.addRows([
       [ 'Home Page', 'Frequently Used Resources', 346 ],
       [ 'Home Page', 'Organisation Charts', 637 ],
       [ 'Home Page', 'Search', 290 ],
       [ 'Home Page', 'Staff Cafe', 791 ],
       [ 'Home Page', 'Departments', 376 ],
       [ 'Home Page', 'Drop-off', 1800 ],
       
    ]);
        var sankyColors = ['#eee', '#111', '#333', '#555',
                  '#777', '#999', '#bbb', '#ddd'];

    // Set chart options
    var options = {
      width: 700,
      height: 300,
      sankey: {
        node: {
          nodePadding: 40,
          colors: sankyColors,
          label: { 
            fontName: 'Source Sans Pro',
            fontSize: 14,
            color: '#000',
            },
        },
        link: {
          colorMode: 'gradient',
          colors: sankyColors
        },
      }
    };

    // Instantiate and draw our chart, passing in some options.
    var chartOne = new google.visualization.Sankey(document.getElementById('sankey_one'));
    var chartTwo = new google.visualization.Sankey(document.getElementById('sankey_two'));
    var chartThree = new google.visualization.Sankey(document.getElementById('sankey_three'));
    chartOne.draw(sankyDataOne, options);
    chartTwo.draw(sankyDataTwo, options);
    chartThree.draw(sankyDataThree, options);
   }


/*-------------------------------------------------------------------------------*/


function charts(props) {
  // Correct! There is no need to specify the key here:
  return (
  	<div className='row'>
  		<div className="col-md-6">
        <img className="img-fluid" src={props.image} alt={props.altText} />
	    </div>
	    <div className="col-md-6">
	    	<div className="p-3">
				<h4 className="yellow small">{props.eyebrow}</h4>
				<h3 className="yellow times large">{props.h3}</h3>
				<p className="white">{props.text}</p>
			</div>
		</div>
	</div>	
  );
}

function charts(props) {
  const item = props.item;
  const listItems = item.map((item) =>
    // Correct! Key should be specified inside the array.
    <TwoColBoxContent key={item.eyebrow}
      image = {item.image}
      altText = {item.altText}
      link = {item.link}
      eyebrow = {item.eyebrow}
      h3 = {item.h3}
      text = {item.text} />
	);
  return (
    <div className="container pt-2">
      {listItems}
    </div>
  );
}

export default charts;