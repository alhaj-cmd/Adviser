import React from 'react';
import Home from './assets/components/Home/Home';
import Person from './assets/components/Person/Person';
import Button from './assets/components/Button/Button';
import Card from './assets/components/Card/Card';

const App = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <Button>See More</Button>
    <Button>Sort by date</Button>
    <Card></Card>
    <Person></Person>
    <Home/>
    </div>
  );
};

export default App;