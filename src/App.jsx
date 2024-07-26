import './App.css'
import MortgageCalculator from './components/MortgageCalculator'

function App() {

  return (
    <div class="flex rounded-2xl bg-white w-10/12 h-1/2">
      <div class="w-1/2">
          <MortgageCalculator/>    
      </div>
      <div class="w-1/2 result-panel rounded-tr-2xl rounded-br-2xl">
        Second column
      </div>     
    </div>
  );
}

export default App
