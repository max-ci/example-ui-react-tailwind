import Menu from './components/Menu';
import Courses from './components/Courses';
import CourseDetails from './components/CourseDetails';

import './index.css';

function App() {
  return (
    <div className="flex min-h-screen font-sans">
      <Menu />

      <div className="xl:flex w-full">
        <Courses />

        <CourseDetails />
      </div>
    </div>
  );
}

export default App;