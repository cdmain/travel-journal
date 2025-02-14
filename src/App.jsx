import Header from "./components/Header"
import Entry from "./components/Entry"
import data from "./data"

const entryData = data.map((data) =>{
  return <Entry
  img = {{
    src: data.img.src,
    alt: data.img.alt
  }}
  title={data.title}
  country={data.country}
  googleMapsLink={data.googleMapsLink}
  dates={data.dates}
  text={data.text}
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
