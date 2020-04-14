import React, {useState} from 'react';

const CovidStats = (props) => {
  const [indiaData, setIndiaData] = useState(null)
  const [worldData,setWorldData] = useState(null)
  useEffect(() => {
    fetch('https://corona.lmao.ninja/v2/all')
    .then(resp => resp.json())
    .then(data => setWorldData(data))
    fetch('https://corona.lmao.ninja/v2/countries/india')
      .then(resp => resp.json())
      .then(data => setIndiaData(data))
      .then(console.log("india: ", indiaData))
  })
  return (
    <div className="commentCard">
    Covid Status:
			<div className="comment">
				{`India: ${indiaData}`}
			</div>
			<div className="comment">
							{`World: ${worldData}`}
						</div>
		</div>
  )
}

export default Comment;