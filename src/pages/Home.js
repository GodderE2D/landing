import React from "react"
import "bulma"
import "../App.css"
import { Helmet } from "react-helmet"
import Footer from "../components/Footer"
//import TopNav from "../components/Navbar"

const Home = () => {
  //const [projectData, setProjectData] = React.useState<any>(undefined);

  return (
    <div>
      <Helmet>
        <title>Fuego Creators</title>
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: dark)"></meta>
      </Helmet>

      {/* <TopNav /> */}

      <div className={"container introText"}>
        
        <br />
        <br />

        <h1 className="is-1 title">
          <figure className="image" style={{ width: "256px", display: "inline-block", verticalAlign: "middle" }}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/archive/0/02/20180412131227%21Transparent_square.svg" alt="Logo" />
          </figure>
          <br />
          <span>Fuego Creators</span>
        </h1>

        <p>Wolvesville Simulation - A Discord based social deduction game for all!</p>

        <br />

        <a href="https://discord.gg/MdWTUK2" target="_blank" rel="noreferrer" className="button is-large home-button">
          Join the Discord
        </a>
        <a href="https://fuegocreators.substack.com/" target="_blank" rel="noreferrer" className="button is-large home-button">
          View Newsletter
        </a>
      </div>

      <Footer />
    </div>
  )
}

export default Home
