import {Helmet} from "react-helmet";

function Head(){
	return(
  <>
    <Helmet>
      <title>Portfolio | Kaylin Lapan</title>
      <meta name="keywords" content="HTML,CSS,JavaScript" />
      <meta
        name="description"
        content="Samples of Kaylin Lapan's code, art, and projects."
      />
      
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
		  rel="stylesheet"
		  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
		  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
		  crossorigin="anonymous"
		/>
    
    </Helmet>
   </>
   )
}

export default Head;