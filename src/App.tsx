import './App.css'
import lifeMatrixConfig from './config/config'
import { randomNumber } from './utils/random'

const {rows, columns, interval} = lifeMatrixConfig;
import  Matrix from './components/life-matrix/Matrix'

function App() {

  return <div>
    <Matrix rows={rows} columns={columns} interval={interval}></Matrix>
  </div>
}

export default App
//    {Array.from({length: 50}, () => randomNumber(0, 5)).map(n => <div>{n}</div>)}
