import Header from './components/Header';
import Hero from './components/Hero';
import Cards from './components/Cards';
import data from './data.js';


import './App.css';

function App() {
  const dataCard = data.map(item => {
    return (
      <Cards
        key={item.id}
        item={item}
      />
    )
  })
  return (
    <div>
      <Header />
      <Hero />
      <section className='card-container'>
        {dataCard}
      </section>
    </div>
  );
}

export default App;