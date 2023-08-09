//import logo from './logo.svg';
import './App.css';
import Page from './Page';

function App() {
 //const data =['Item 1','Item 2','Item 3','Item 4','Item 5','Item 6','Item 7','Item 8','Item 9','Item 10','Item 11','Item 12','Item 13','Item 14'];
//  const data=[
//   {}
//  ]
const data = Array.from({ length: 50 }, (_, index) => `Item ${index + 1}`);
 return (

    <div className="App">
    <h1>Pagination example</h1>
    <Page data={data}/>
    </div>
  );
}

export default App;
