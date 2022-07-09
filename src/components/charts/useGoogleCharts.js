/*https://blog.shahednasser.com/how-to-use-google-charts-in-react/#:~:text=You%20can%20also%20use%20Google,in%20the%20directory%20src%2FWithContext%20.*/
import { useEffect, useState } from "react";

function useGoogleCharts () {
  const [google, setGoogle] = useState(null);
    
    useEffect(() => {
        if (!google) {
            //TODO load google charts
            const head = document.head;
            let script = document.getElementById('googleChartsScript');
            if (!script) {
                script = document.createElement('script');
                script.src = 'https://www.gstatic.com/charts/loader.js';
                script.id = 'googleChartsScript';
                script.onload = () => {
                    if (window.google && window.google.charts) {
                        window.google.charts.load('current', {'packages':['corechart', 'gantt', 'sankey']});

                        window.google.charts.setOnLoadCallback(() => setGoogle(window.google))
                    }
                };
                head.appendChild(script);
            } else if (window.google && window.google.charts && window.google.visualization) {
                setGoogle(window.google);
            }
        }

        return () => {
          let script = document.getElementById('googleChartsScript');
          if (script) {
            script.remove();
          }
        }

   }, [google]);

  return google;
}

export default useGoogleCharts;