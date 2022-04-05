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
            data.map((item)=> <Pokemon key={item.id} name={item.name} type={item.type} averageWeight={item.averageWeight} image={item.image} />)
          }
        </section>
      </section>
    )
  }
}

export default App;
