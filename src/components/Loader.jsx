import {Html, useProgress} from '@react-three/drei';


// this is the loader component that will be shown while the model is loading
const Loader = () => {
const {progress} = useProgress()

  return (
<Html>
  <span className='canvas-loader'></span>
  <p 
    style={{
      fontSize: 15,
      color: '#f1f1f1',
      fontWeight: 800,
      marginTop: 40,
    }}
    // show the progress of the loading
  >{progress.toFixed(2)}%</p>
</Html>
  )
}

export default Loader