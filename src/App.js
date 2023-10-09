import './App.css';
import { Video, Img } from './Components/Video.js'

function App() {
  return (
    <>
      <div>
        <Video/>
        <Img
          imgalt="Img"
        />
        <div style={{
          backgroundColor: "red",
          color: "white"
        }}>Hello</div>
      </div>
      <label htmlFor="language">Select a Programming Language:</label>
      <select name="language" id="language">
        <option value="javascript">JavaScript</option>
        <option value="python">Python</option>
        <option value="c++" disabled="">
          C++
        </option>
        <option value="java" selected="">
          Java
        </option>
      </select>
    </>
  )
}

export default App
