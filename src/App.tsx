import { RecoilRoot } from 'recoil';
import FormComp from './components/FormComp';

function App() {

  return (
    <RecoilRoot>
      <div>
        <FormComp/>
      </div>
    </RecoilRoot>
  )
}

export default App;