import React from "react"
import {Link} from "gatsby"

export default function Home() {
  return <div style={{color:"blue"}}>
    <h1>Hello world!</h1> 
    <p>This is paragraph</p>
    <Link to="/page-2/" >Page2</Link> <br />
    <Link to="/dir1/page-3/" >Page3</Link> <br />
    
    </div>
    
}
