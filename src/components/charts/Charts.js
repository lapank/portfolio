import PizzaChart from "./PizzaChart.js";
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
    <div className="w-100 p-5 backgroundDark">
    <h2 className="blueGradientText fourColTitle headerText">Case Study: Company Intranet</h2>
    <p className="bodyTextLight">This Gantt chart outlines the project schedule for the site redesign and rebuild. The schedule emphasizes iterative development and design to ensure both the stakeholders and build team’s expectations stay inline.</p>

    <div className='row'>
          <GanttChart google={google} />
          <div className="bodyTextLight">
          <h3 className="videoEyebrow">Discovery Period</h3>
          <p>A month long discovery phase will allow developers to examine the existing site to take an inventory of existing components, functionality, and 3rd party site integrations.  While this is occurring designers, and UX/IA specialists will conduct stakeholder interviews to determine aspects of the existing site users like, dislike, and functionality users would like to add.</p>
          <h3 className="videoEyebrow">Design Phase</h3>
          <p>While developers are still examining the existing site as part of the Discovery Period, designers, and UX/IA specialists will move into the Design Phase and produce wireframes for stakeholders to review.  After a round of review and remediation with the stakeholders, the wireframes will be turned into high fidelity mock-ups by the designers.  These mock-ups will then be reviewed by the stakeholders and the developers to make sure the mock-ups are not only designs the stakeholders approve, but also designs that the developers can build within the allotted timeframe.  If too many component variations are present this is the time the developers will notify the designers and the designers will produce a simplified design to show the stakeholders.  If a simplified design is needed, and the stakeholders do not approve the simplified design, the projects scope will need to be reassessed.  This review period is also when the site design will be run through its first accessibility tests.</p>
          <h3 className="videoEyebrow">Build Phase</h3>
          <p>Once the design of the site’s IA and components are settled, the developers will begin the build phase.  The build phase is divided into 3 sprints that each last a month.  Towards the end of each sprint, stakeholders will be shown site demos to ensure the build matches their expectations.  The last sprint will include accessibility and security testing to ensure the site meets required accessibility and security standards and will pass the organizations Technical Review Board.</p>
          <h3 className="videoEyebrow">Review and Acceptance</h3>
          <p>The last month of the project will consist of final reviews by the stakeholders and QA teams and final fixes and remediations from the developers to resolve any outstanding issues.</p>
          </div>
        </div>
        <div className="bodyTextLight">
        <h2 className="videoGalleryTitle">Discovery Period In-Depth</h2>
        </div>
      <p className="bodyTextLight">During the Discovery Phase, the UX and IA team will create Customer Journey maps and dive into the website’s existing analytics.  The following charts are a sample of what they will find to help inform their stakeholder conversations and wireframe development.</p>
    	<div className='row'>
    		<div className="col-6">
        <div className="darkCard">
        <div className="centerAbsolute">
          <PizzaChart google={google}/>
        </div>
        </div>
        <div className="bodyTextLight">
        <h3 className="videoEyebrow">Intranet’s Use for Communication</h3>
        <p>This pie chart shows data gathered from the Feedback Survey and Suggestion box on the intranet site totaling 122 responses from 2017 to present.  From this data the UX and IA team can gather that the intranet is seen as a way to communicate personnel and facility needs at the organization.  Follow-up questions include understanding if this workflow is effective in getting requests to the individuals who need to see them.  It would also be helpful to know what other tools and method’s staff use to communicate their organizational needs and how effective are those methods.</p>
  	    </div>
        </div>
  	    <div className="col-6">
        <div className="darkCard">
        <div className="centerAbsolute">
          <LineChart google={google} />
        </div>
        </div>
        <div className="bodyTextLight">
        <h3 className="videoEyebrow">Intranet’s Visitation</h3>
        <p>This line chart shows a downward trend with visitors using the organizations intranet.  This data is good for stakeholder interviews where UX and IA experts can uncover why site usage may have dropped.  It’s possible the drop in usage correlates to a lack of upkeep concerning site content and site functionality.  There may also be larger organizational changes and shifts or new workflows that effect how useful the intranet is.  At which point, it is the UX and IA experts job to discover out what would make the intranet useful to stakeholders again.</p>
  			</div>
        </div>
      </div>
        <div className='row mt-5 mb-5'>
          <div className="col-4">
          <div className="darkCard">
          <h3 className="videoEyebrow">2017</h3>
          <div className="centerAbsolute">
            <SankeyChartThree google={google} />
           </div> 
          </div>
          </div>
          <div className="col-4">
          <div className="darkCard">
          <h3 className="videoEyebrow">2018</h3>
          <div className="centerAbsolute">
            <SankeyChartTwo google={google} />
            </div>
            </div>
          </div>
          <div className="col-4">
          <div className="darkCard">
          <h3 className="videoEyebrow">2019</h3>
          <div className="centerAbsolute">
            <SankeyChartOne google={google} />
            </div>
            </div>
          </div>
          <div className="bodyTextLight">
          <h3 className="videoEyebrow">Site Navigation</h3>
          <p>These Sanky Tree charts show how user’s navigation through the intranet changed from 2017 to 2019.  Mostly site usage has stayed the same, there is a high number of drop-offs which might indicate a user need that is missing from the site, and many users continue to navigate towards resource pages, organizational charts, and other administrative pages.  In 2017 a staff café page was popular on the site, and it disappeared in following years.  It would be important to establish what happened to that section of the site and if that resource is still needed.</p>
          </div>
        </div>
        
        <h2 className="smallTitleLight">Customer Journey Map:</h2>
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
      <div className="bodyTextLight">
          <h3 className="videoEyebrow">Users Deciding to Adopt the Site</h3>
          <p>This customer journey map will be developed during the stakeholder interviews to better understand the Intranet’s users and the Intranet’s drop off in user retention.  In partnership with personas and other UX tools, these models will help design a sight that takes into consideration a user’s specific needs and behaviors.</p>
          </div>
		</div>
  );
}

export default Charts;