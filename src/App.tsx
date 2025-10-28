import './styles/main.scss';
import { Circle } from './components/Circle/Circle';
import { Slider } from './components/Slider/Slider';
import { TimelineNavigator } from './components/TimelineNavigator/TimelineNavigator';
import { Title } from './components/Title/Title';

const items = [1, 2, 3, 4, 5, 6];
const peak = 300;

export const App = () => {
  return (
    <div className='container'>
      <Title/>
      <Circle groupName='timeline' />
      <TimelineNavigator groupName='timeline' />
      <Slider groupName='timeline' />
    </div>
  );
};

export default App;
