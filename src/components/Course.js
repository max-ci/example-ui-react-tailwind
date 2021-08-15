function Course(props) {
  let itemClassName = 'flex flex-col md:flex-row items-center bg-white mb-8 p-3 md:p-5 rounded-md dark:bg-gray-800';
  if (props.active) {
    itemClassName += ' shadow-xl scale-105';
  }

  return (
    <div className={itemClassName}>
      <img src={props.img} className="mb-3 md:mb-0" alt={props.name} />

      <div className="flex flex-col items-center text-center md:text-left md:items-start md:ml-10">
        <h2 className="text-black text-xl font-semibold mb-2 dark:text-gray-300">{props.name}</h2>

        <div className="inline-flex items-center">
          <svg className="mr-3" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.52873 4.64668C7.25942 3.35304 5.19693 3.35304 3.92761 4.64668C2.66418 5.93433 2.66418 8.01765 3.92761 9.3053L7.83355 13.2861C8.27743 13.7385 9.00618 13.7385 9.45007 13.2861L13.356 9.3053C14.6194 8.01765 14.6194 5.93433 13.356 4.64668C12.0867 3.35304 10.0242 3.35304 8.75488 4.64668C8.69278 4.70997 8.59083 4.70997 8.52873 4.64668Z" fill="#6FDCE3"></path>
          </svg>

          <div className="text-sm text-gray-500 dark:text-gray-400">{props.likes}</div>
        </div>
      </div>

    </div>
  )
}

export default Course;