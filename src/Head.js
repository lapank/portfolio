import {Helmet} from "react-helmet";

function Head(){
	return(
  <>
    <Helmet>
      <title>Ideas || MysiteName</title>
      <meta name="keywords" content="HTML,CSS,JavaScript" />
      <meta
        name="description"
        content="Ideas page using react helmet very easy to implement "
      />
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Helmet>
   </>
   )
}

export default Head;