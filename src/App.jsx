import { useState } from 'react'
import reactLogo from './assets/arrow.png'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div class="container">
     <div class="row1">
        <img src={reactLogo}/>
        <h1>Join Us</h1>
        <p>Subscribe Easy Tutorials Youtube Channel to watch more videos</p>
        <button type="button" class="b1">About Us</button>
     </div>
     
        <div class="row2">
            <div class="reg">
                <h1 class="re">REGISTER HERE</h1>
                <div class="form-group">
                   <form action="#"method='get'/>
                      <label for="Name" >NAME:
                      <input type="text" id="Name" placeholder="NAME" required/></label><br/><br/>
                      <label for="Username">USER NAME:<input type="text" id="Username" placeholder="USER NAME" pattern="[a-z]{8}" required/></label><br/><br/>
                      <label for="Email">EMAIL<input type="email" id="Email" placeholder="EMAIL" required/></label><br/><br/>
                      <label for="Password">PASSWORD:<input type="password" id="Password" placeholder="PASSWORD" pattern="[A-Za-z0-9]{8}" required/></label><br/><br/>
                     <div class="bt">
                      <label for="submit"><input type="submit" class="b" value="REGISTER"/></label>
                     </div>
                    
                </div>
            </div>
        </div>
    </div>
    </>
       
  )
}

export default App
