import MultiSelect from "./Component/MultiSelect.jsx";
import {useState} from 'react'
// import './App.css';

const data = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  // Add more options as needed
];
function App() {
  const [fromMultiSelect, setFromMultiSelect] = useState([]);
  const multiSelectRenderer = {

		value: "option",
		label: "lable",
	};  {  console.log('multiSelectRenderer', multiSelectRenderer)}
  return (
    <div className="App">
      <MultiSelect
						options={data}
        
						renderer={multiSelectRenderer}
						setData={setFromMultiSelect}
            
					/> 
    </div>
  );
}

export default App;
