import { useState } from 'react';

const App = () => {
  const [animalCount, setAnimalCount] = useState(0);

  return (
    <div>
      <button onClick={() => setAnimalCount(animalCount + 1)}>
        Add Animal
      </button>{' '}
      <br />
      <text>Animals to show:{animalCount} </text>
    </div>
  );
};

export default App;
