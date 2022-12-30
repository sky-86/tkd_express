//import Image from 'react-bootstrap/Image';

//<img className="bgPhoto" src="homepage.jpg" alt="group photo" />
function HomePage() {
  return (
    <div style={{backgroundImage: "url(/homepage.jpg)"}} className="home">
      Home
      <div className='cards'>
      </div>
    </div>
  )
}

export default HomePage;
