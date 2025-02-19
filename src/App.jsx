import Header from "./components/Header"
import Entry from "./components/Entry"
import data from "./data"

const entryData = data.map((entryData) =>{
  return <Entry
  key={entryData.id}
  entry={entryData}
  />
})

function App() {
  return ( 
    <>
      <Header />
      {entryData}
    </>
  )
}

export default App
