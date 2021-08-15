import UserImage from '../images/user.jpg';
import CourseImage from '../images/course.jpg';
import TeacherImage1 from '../images/teacher1.jpg';
import TeacherImage2 from '../images/teacher2.jpg';

function CourseDetails(props) {
  return (
    <div className="flex-1 min-w-[50%] p-10 dark:bg-gray-800">
      <div className="md:flex md:items-center md:justify-between mb-10 text-sm">
        <ul className="flex items-center justify-center md:justify-start mb-3 md:mb-0">
          <li className="mr-5">
            <a href="/#" className="transition-colors hover:text-primary dark:text-gray-300 dark:hover:text-secondary">My courses</a>
          </li>

          <li className="mr-5">
            <a href="/#" className="transition-colors hover:text-primary dark:text-gray-300 dark:hover:text-secondary">Purchases</a>
          </li>

          <li className="mr-5">
            <a href="/#" className="transition-colors hover:text-primary dark:text-gray-300 dark:hover:text-secondary">Help</a>
          </li>
        </ul>

        <div className="flex items-center justify-center md:justify-start cursor-pointer transition-colors hover:text-primary dark:text-gray-300 dark:hover:text-secondary">
          <div className="mr-3">Shahriar Sultan</div>

          <img src={UserImage} className="rounded-full" alt="Shahriar Sultan" />
        </div>
      </div>

      <div className="xl:flex mb-10">
        <div className="md:mr-10">
          <div className="mb-5 md:mb-10">
            <img src={CourseImage} className="rounded-2xl max-w-full" alt="User Experience Dsign Fundamentals" />
          </div>

          <h2 className="text-2xl font-semibold mb-5 dark:text-gray-400">User Experience Design Fundamentals</h2>

          <p className="text-gray-700 mb-5 dark:text-gray-300">
            Gain the basic skills in User Experience. Study practice and theory. Find out techniques and tools used to design efficiently <a href="/#" className="text-primary dark:text-secondary">more...</a>
          </p>

          <div className="md:flex xl:block 2xl:flex mb-10">
            <button type="button" className="w-full md:w-auto xl:w-full 2xl:w-auto mb-3 md:mb-0 xl:mb-3 2xl:mb-0 md:mr-5 bg-primary text-white py-3 px-8 rounded-md transition-colors hover:bg-gray-900">Buy Courses</button>

            <button type="button" className="flex w-full md:w-auto xl:w-full 2xl:w-auto justify-center items-center py-3 px-8 rounded-md hover:bg-gray-200 transition-colors dark:text-gray-300 dark:hover:bg-gray-700">
              <svg className="mr-3" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="fill-current" fillRule="evenodd" clipRule="evenodd" d="M2 6.5C2 4.84315 3.34315 3.5 5 3.5H19C20.6569 3.5 22 4.84315 22 6.5V16.5C22 18.1569 20.6569 19.5 19 19.5H8.36205C8.12811 19.5 7.90158 19.582 7.72187 19.7318L5.28037 21.7664C3.97771 22.8519 2 21.9256 2 20.2299V6.5ZM7 9.5C7 8.94772 7.44772 8.5 8 8.5H16C16.5523 8.5 17 8.94772 17 9.5C17 10.0523 16.5523 10.5 16 10.5H8C7.44772 10.5 7 10.0523 7 9.5ZM8 12.5C7.44772 12.5 7 12.9477 7 13.5C7 14.0523 7.44772 14.5 8 14.5H12C12.5523 14.5 13 14.0523 13 13.5C13 12.9477 12.5523 12.5 12 12.5H8Z" fill="black"></path>
              </svg>

              Reviews
            </button>
          </div>
        </div>

        <div className="xl:min-w-[130px] text-center">
          <div className="p-3 mb-5 bg-primary text-secondary rounded-md relative">
            <div className="text-3xl font-bold">02<sup>30</sup>
            </div>

            <div>Starting in</div>

            <div className="absolute right-1 top-1 text-xs">pm</div>
          </div>

          <div className="p-3 mb-5 bg-white rounded-md border border-gray-200 relative dark:bg-gray-800 dark:border-gray-700">
            <div className="text-3xl font-bold dark:text-gray-300">60</div>

            <div className="dark:text-gray-300">Duration</div>

            <div className="absolute right-1 top-1 text-xs dark:text-gray-500">hrs</div>
          </div>

          <div className="p-3 mb-5 bg-white rounded-md border border-gray-200 relative dark:bg-gray-800 dark:border-gray-700">
            <div className="text-3xl font-bold dark:text-gray-300">16</div>

            <div className="dark:text-gray-300">On Group</div>

            <div className="absolute right-1 top-1 text-xs dark:text-gray-500">ppl.</div>
          </div>

          <div className="p-3 mb-5 bg-white rounded-md border border-gray-200 relative dark:bg-gray-800 dark:border-gray-700">
            <div className="text-3xl font-bold dark:text-gray-300">114</div>

            <div className="dark:text-gray-300">Behance</div>

            <div className="absolute right-1 top-1 text-xs dark:text-gray-500">cases</div>
          </div>

          <div className="flex items-center justify-center p-5 bg-white text-primary rounded-md border border-gray-200 cursor-pointer transition-colors duration-100 hover:bg-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 dark:text-secondary">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className="fill-current" d="M13 4C13 3.44772 12.5523 3 12 3C11.4477 3 11 3.44772 11 4V18.0858L6.20711 13.2929C5.81658 12.9024 5.18342 12.9024 4.79289 13.2929C4.40237 13.6834 4.40237 14.3166 4.79289 14.7071L10.5858 20.5C11.3668 21.281 12.6332 21.281 13.4142 20.5L19.2071 14.7071C19.5976 14.3166 19.5976 13.6834 19.2071 13.2929C18.8166 12.9024 18.1834 12.9024 17.7929 13.2929L13 18.0858V4Z" fill="#3639A4"></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="xl:flex pb-5 xl:overflow-x-auto">
        <div className="flex items-center p-5 mb-5 xl:mb-0 xl:mr-5 shadow-lg rounded-md xl:min-w-[250px] dark:bg-gray-900">
          <div className="p-1 border border-gray-700 rounded-full overflow-hidden mr-3">
            <img src={TeacherImage1} className="rounded-full" alt="Karim" />
          </div>

          <div>
            <div className="font-bold dark:text-gray-100">Karim</div>

            <div className="text-sm text-gray-700 dark:text-gray-400">UI/UX Designer,<br /> Mentor</div>
          </div>
        </div>

        <div className="flex items-center p-5 shadow-lg rounded-md min-w-[240px] dark:bg-gray-900">
          <div className="p-1 border border-gray-700 rounded-full overflow-hidden mr-3">
            <img src={TeacherImage2} className="rounded-full" alt="Amrani" />
          </div>

          <div>
            <div className="font-bold dark:text-gray-100">Amrani</div>

            <div className="text-sm text-gray-700 dark:text-gray-400">Graphics Designer,<br /> Mentor</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;