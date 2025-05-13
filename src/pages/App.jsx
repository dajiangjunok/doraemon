import doraemonImg from '../assets/img/doraemon.jpeg'
import Doraemon from './Doraemon.jsx'

const App = () => {
  return (
    <div className="w-[100vw] h-[100vh] relative">
      <Doraemon />
      {/* <img
        className="h-[500px] absolute right-0 bottom-0"
        src={doraemonImg}
        alt="doraemon"
      /> */}
    </div>
  )
}

export default App
