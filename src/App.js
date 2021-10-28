import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
//import { createClient, SupabaseClient } from "@supabase/supabase-js"

// Pages
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
// import ComingSoon from "./pages/ComingSoon"
// import Backgrounds from "./pages/Backgrounds"

// // Supabase configuration
// declare global {
//   interface Window {
//     supabase: SupabaseClient
//   }
// }

// Axios configuration
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

require("dotenv").config()
process.env.REACT_APP_ENVIRONMENT = "production"
// if (!["development", "production"].includes(process.env.REACT_APP_ENVIRONMENT)) throw new Error('Environment variable "REACT_APP_ENVIRONMENT" is not one of "development" or "production"')
// if (!process.env.REACT_APP_SUPABASE_URL) throw new Error('Supabase environment variable "REACT_APP_SUPABASE_URL" has not been setup')
// if (!process.env.REACT_APP_SUPABASE_PUBLIC_KEY) throw new Error('Supabase environment variable "REACT_APP_SUPABASE_PUBLIC_KEY" has not been setup')
// const supabase = createClient(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_SUPABASE_PUBLIC_KEY)
// window.supabase = supabase

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

export default App
