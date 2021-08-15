import Course from './Course';
import CourseImage1 from '../images/course1.jpg';
import CourseImage2 from '../images/course2.jpg';
import CourseImage3 from '../images/course3.jpg';
import CourseImage4 from '../images/course4.jpg';

function Courses(props) {
  const courses = [
    {
      name: 'Software Testing and Automation',
      img: CourseImage1,
      likes: '1.4K',
      active: false
    },
    {
      name: 'User Experience Design Fundamentals',
      img: CourseImage2,
      likes: '1.4K',
      active: true
    },
    {
      name: 'Drawing and Paintin with Procreate',
      img: CourseImage3,
      likes: '1.4K',
      active: false
    },
    {
      name: 'How To Become A Master of Influence',
      img: CourseImage4,
      likes: '1.4K',
      active: false
    }
  ];

  return (
    <div className="bg-gray-100 p-5 pt-16 md:p-10 flex-1 min-w-[50%] dark:bg-gray-900">
      <div className="mb-10 flex justify-between items-center">
        <div className="flex bg-gray-200 p-3 rounded-md border-2 border-transparent focus-within:border-primary transition-colors duration-100 dark:bg-gray-700 dark:focus-within:border-secondary">
          <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M18.0319 16.6177C19.2635 15.078 20 13.125 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C13.125 20 15.078 19.2635 16.6177 18.0319L19.2929 20.7071C19.6834 21.0976 20.3166 21.0976 20.7071 20.7071C21.0976 20.3166 21.0976 19.6834 20.7071 19.2929L18.0319 16.6177ZM18 11C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11Z" fill="#808080"></path>
          </svg>

          <input type="text" className="bg-transparent focus:outline-none dark:text-gray-300 w-[120px] md:w-auto" placeholder="Search" />
        </div>

        <button type="button" className="group bg-gray-200 text-gray-500 p-3 rounded-md cursor-pointer transition-colors duration-100 hover:bg-primary hover:text-white dark:text-gray-300 dark:bg-gray-700 dark:hover:bg-primary">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="fill-current" d="M14.6116 20.152C14.8915 19.5867 14.4118 19 13.781 19H10.219C9.58821 19 9.10853 19.5867 9.38844 20.152C9.93874 21.2633 10.9027 22 12 22C13.0973 22 14.0613 21.2633 14.6116 20.152Z" fill="#808080"></path>
            <path className="fill-current" d="M18.5194 17H5.4702C4.65823 17 4 16.3418 4 15.5298C4 15.1874 4.11953 14.8557 4.33795 14.592L5.19493 13.5573C5.49322 13.1972 5.65589 12.7439 5.65466 12.2763L5.64449 8.39447C5.63525 4.86562 8.49337 2 12.0222 2C15.5446 2 18.4 4.85542 18.4 8.37776L18.4 12.2984C18.4 12.7526 18.5546 13.1932 18.8383 13.5478L19.6755 14.5944C19.8856 14.857 20 15.1832 20 15.5194C20 16.3371 19.3371 17 18.5194 17Z" fill="#808080"></path>
          </svg>
        </button>
      </div>

      <div>
        <div className="mb-5 text-sm dark:text-gray-300">All Courses</div>

        {courses.map((course, index) =>
          <Course key={index} name={course.name} img={course.img} likes={course.likes} active={course.active} />
        )}
      </div>
    </div>
  )
}

export default Courses;