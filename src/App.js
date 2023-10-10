import './App.css';
import Video from './Components/Video.js'

function App() {
  let video2 = {
    src: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
    alt: "tbumbail1",
    title: "React3",
    channel: "Codewithme04",
    views: "2m",
    time: "12mins",
    verified: true
  }
  return (
    <>
      <div>
        <Video
          src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
          alt="tbumbail1"
          title="React1"
          channel="Codewithme04"
          views="1.2k"
          time="12mins"
          verified={false}
        />
        <Video
          src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
          alt="tbumbail1"
          title="React1"
          channel="Codewithme04"
          views="1.2k"
          time="12mins"
          verified={false}
        />
        <Video
          src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
          alt="tbumbail1"
          title="React1"
          channel="Codewithme04"
          views="1.2k"
          time="12mins"
          verified={false}
        />
        <Video
          src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
          alt="tbumbail1"
          title="React1"
          channel="Codewithme04"
          views="1.2k"
          time="12mins"
          verified={false}
        />
        <Video
          src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
          alt="tbumbail2"
          title="React2"
          channel="Codewithme04"
          views="4.5k"
          time="5mins"
          verified={true}
        />
        <Video
          src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
          alt="tbumbail2"
          title="React2"
          channel="Codewithme04"
          views="4.5k"
          time="5mins"
          verified={true}
        />
        <Video
          src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
          alt="tbumbail2"
          title="React2"
          channel="Codewithme04"
          views="4.5k"
          time="5mins"
          verified={true}
        />
        <Video
          src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
          alt="tbumbail2"
          title="React2"
          channel="Codewithme04"
          views="4.5k"
          time="5mins"
          verified={true}
        />
        <Video
          src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
          alt="tbumbail2"
          title="React2"
          channel="Codewithme04"
          views="4.5k"
          time="5mins"
          verified={true}
        />
        <Video
          src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
          alt="tbumbail2"
          title="React2"
          channel="Codewithme04"
          views="4.5k"
          time="5mins"
          verified={true}
        />
        <Video
          src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
          alt="tbumbail2"
          title="React2"
          channel="Codewithme04"
          views="4.5k"
          time="5mins"
          verified={true}
        />
        <Video
          {...video2}
        />
      </div>
    </>
  )
}

export default App
