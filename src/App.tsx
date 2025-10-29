import './styles/main.scss';
import './styles/media.scss';
import { Circle } from './components/Circle/Circle';
import { Slider } from './components/Slider/Slider';
import { TimelineNavigator } from './components/TimelineNavigator/TimelineNavigator';
import { Title } from './components/Title/Title';

export const App = () => {
  return (
    <div className='wrapper'>
      <div className='container'>
        <Title />
        <Circle groupName='timeline' />
        <div className='timeline-section'>
          <TimelineNavigator groupName='timeline' />
          <Slider groupName='timeline' />
        </div>
      </div>
    </div>
  );
};

export default App;
