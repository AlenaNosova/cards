import Cards from './components/Cards';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
    <Cards
      title="Card title"
      text="Some quick example text to build on the card title and make up the bulk of the card's content.">
      <img src="https://www.meme-arsenal.com/memes/91c8399b67808e6a05fcbb2499a71ff2.jpg" className="card-img-top" alt="..."/>
    </Cards>

    <Cards
    title="Special title treatment"
    text="With supporting text below as a natural lead-in to additional content.">
</Cards>
</>
  );
}

export default App;
