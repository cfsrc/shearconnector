import * as React from "react"
import { Helmet } from "react-helmet"
import Data from "../../data/Pe.json";
import NavigationBar from "../components/Navigation/navigation-bar"
import DataPlayground from "../components/Plot/playground"
import Project from "../components/Project/project"
import Sponsor from "../components/Sponsor/sponsor"
import References from "../components/References/references"
import Layout from "../components/Layout/layout";
import { useState } from "react"

function IndexPage() {
  const [isMetric, setIsMetric] = useState(false);

  return (

 
          <Layout
      navigation={(
        <NavigationBar
          useMetric={{enabled: isMetric, onChange: () => setIsMetric(!isMetric)}}
        />)}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Shear Connector Database</title>
        <link rel="canonical" href="http://cfs-database.com" />
      </Helmet>
      <DataPlayground dataSet={Data} isMetric={isMetric}/>
      <References />
      <Project />
      <Sponsor />
      
      </Layout>

  )
}


export default IndexPage