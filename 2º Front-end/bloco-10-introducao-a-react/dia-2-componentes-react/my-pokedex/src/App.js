import React from 'react';
import './App.css';
import data from './data';
import Header from './Header';
import Pokemon from './Pokemon';

class App extends React.Component {
  render() {
    return (
      <section>
        <div className='center'>
          <Header />
        </div>
        <section className='conteiner'>
          {
            data.map(({ id, name, type, averageWeight, image }) => <Pokemon key={id} name={name} type={type} averageWeight={averageWeight} image={image} />)
          }
        </section>
      </section>
    )
  }
}

export default App;
