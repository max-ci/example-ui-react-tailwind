import React, { useState } from 'react';
import MenuItem from './MenuItem';
import DarkModeToggle from './themeToggle';

function Menu() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(prev => !prev)
  }

  const menuItems = [
    {
      icon: <svg className="mr-3 text-white group-hover:text-primary" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className="fill-current transition-colors" d="M18.5341 11.3174L18.6962 11.5981C18.9723 12.0764 18.8084 12.688 18.3301 12.9641L14.866 14.9641L17.366 19.2942C17.6422 19.7725 17.4783 20.3841 17 20.6603C16.5217 20.9364 15.9101 20.7725 15.634 20.2942L13.134 15.9641L9.66987 17.9641C9.19158 18.2403 8.57999 18.0764 8.30385 17.5981L8.14181 17.3174C7.30592 15.8696 7.24892 14.0999 7.98989 12.6013L8.16472 12.2477C8.31291 11.948 8.30151 11.594 8.13433 11.3045L7.32731 9.90668C7.21378 9.71003 7.0367 9.55787 6.82519 9.47524L4.4966 8.56548C4.2851 8.48285 4.10802 8.33069 3.99448 8.13404L3.16987 6.70578C2.89373 6.22748 3.05761 5.61589 3.5359 5.33975L10.4641 1.33975C10.9424 1.06361 11.554 1.22748 11.8301 1.70578L12.6547 3.13404C12.7683 3.33069 12.8115 3.56013 12.7773 3.78461L12.4009 6.25611C12.3667 6.48059 12.4099 6.71003 12.5235 6.90668L13.3305 8.30447C13.4977 8.59403 13.7985 8.78088 14.1322 8.8024L14.5258 8.82779C16.1941 8.93538 17.6982 9.86963 18.5341 11.3174Z" fill="white"></path>
      </svg>,
      text: 'Pinned',
      active: false
    },
    {
      icon: <svg className="mr-3 text-primary" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect className="fill-current transition-colors" x="3" y="3" width="8" height="8" rx="3"></rect>
        <rect className="fill-current transition-colors" x="3" y="13" width="8" height="8" rx="3"></rect>
        <rect className="fill-current transition-colors" x="13" y="3" width="8" height="8" rx="3"></rect>
        <rect className="fill-current transition-colors" x="13" y="13" width="8" height="8" rx="3"></rect>
      </svg>,
      text: 'All courses',
      active: true
    },
    {
      icon: <svg className="mr-3 text-white group-hover:text-primary" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className="fill-current transition-colors" d="M22 12C22 15.866 18.866 19 15 19H7C4.23858 19 2 16.7614 2 14C2 11.2386 4.23858 9 7 9C7.54527 9 8.07015 9.08728 8.56143 9.24864C9.63037 6.75042 12.1108 5 15 5C18.866 5 22 8.13401 22 12Z"></path>
      </svg>,
      text: 'Resources',
      active: false
    },
    {
      icon: <svg className="mr-3 text-white group-hover:text-primary" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className="fill-current transition-colors" fillRule="evenodd" clipRule="evenodd" d="M6 2C4.34315 2 3 3.34315 3 5V19C3 20.6569 4.34315 22 6 22H18C19.6569 22 21 20.6569 21 19V7.74264C21 6.94699 20.6839 6.18393 20.1213 5.62132L17.3787 2.87868C16.8161 2.31607 16.053 2 15.2574 2H6ZM15 4.2071V6C15 7.10457 15.8954 8 17 8H18.7929C19.2383 8 19.4614 7.46143 19.1464 7.14644L15.8536 3.85355C15.5386 3.53857 15 3.76165 15 4.2071Z" fill="white"></path>
      </svg>,
      text: 'Online books',
      active: false
    },
    {
      icon: <svg className="mr-3 text-white group-hover:text-primary" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className="fill-current transition-colors" fillRule="evenodd" clipRule="evenodd" d="M9.09404 3.53021C8.91179 4.07694 8.49582 4.50673 7.9923 4.78709C7.91399 4.83069 7.83646 4.87554 7.75974 4.9216C7.26504 5.21857 6.68419 5.36439 6.11891 5.24871L4.91713 5.00278C4.07375 4.8302 3.21455 5.21665 2.78412 5.96218L2.16314 7.03775C1.73271 7.78328 1.82763 8.72059 2.39879 9.36469L3.21381 10.2838C3.59573 10.7145 3.76078 11.2889 3.75166 11.8644C3.75023 11.9548 3.75023 12.0452 3.75166 12.1355C3.76078 12.7111 3.59572 13.2854 3.21381 13.7161L2.39879 14.6352C1.82763 15.2793 1.73271 16.2167 2.16314 16.9622L2.78412 18.0378C3.21455 18.7833 4.07375 19.1697 4.91714 18.9971L6.11883 18.7512C6.68411 18.6356 7.26497 18.7814 7.75967 19.0784C7.83642 19.1244 7.91397 19.1693 7.9923 19.2129C8.49582 19.4933 8.91179 19.9231 9.09404 20.4698L9.48159 21.6325C9.75382 22.4491 10.5181 23 11.379 23H12.6209C13.4818 23 14.2461 22.4491 14.5183 21.6325L14.9058 20.4698C15.0881 19.9231 15.5041 19.4933 16.0076 19.2129C16.0859 19.1693 16.1635 19.1244 16.2402 19.0784C16.7349 18.7814 17.3158 18.6356 17.881 18.7512L19.0827 18.9971C19.9261 19.1697 20.7853 18.7833 21.2157 18.0378L21.8367 16.9622C22.2671 16.2167 22.1722 15.2793 21.601 14.6352L20.7861 13.7162C20.4041 13.2855 20.2391 12.7111 20.2482 12.1356C20.2496 12.0452 20.2496 11.9548 20.2482 11.8644C20.2391 11.2888 20.4041 10.7144 20.7861 10.2838L21.601 9.36469C22.1722 8.72059 22.2671 7.78328 21.8367 7.03775L21.2157 5.96218C20.7853 5.21666 19.9261 4.8302 19.0827 5.00279L17.881 5.2487C17.3157 5.36438 16.7348 5.21857 16.2401 4.92159C16.1634 4.87554 16.0859 4.83069 16.0076 4.78709C15.5041 4.50673 15.0881 4.07694 14.9058 3.53021L14.5183 2.36754C14.2461 1.55086 13.4818 1 12.6209 1H11.379C10.5181 1 9.75382 1.55086 9.48159 2.36754L9.09404 3.53021ZM15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" fill="white"></path>
      </svg>,
      text: 'Settings',
      active: false
    }
  ];

  return (
    <React.Fragment>
      <button type="button" className="inline-flex md:hidden items-center justify-center p-2 absolute right-2 top-2 rounded-md text-gray-400 hover:text-gray-600 transition-colors" onClick={handleToggle}>
        <span className="sr-only">Open main menu</span>

        <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>

        <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className={`flex flex-col min-w-[260px] max-w-[260px] fixed z-10 min-h-screen md:static py-5 bg-primary md:translate-x-0 transition-transform transition-300 ${navbarOpen ? '' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between px-8 mb-20">
          <div className="text-white text-xl font-semibold leading-none">Teachyee</div>

          <DarkModeToggle />
        </div>

        <div className="border-t border-white mx-8"></div>

        <ul className="pr-8 pt-5">
          {menuItems.map((menuItem, index) =>
            <MenuItem key={index} icon={menuItem.icon} text={menuItem.text} active={menuItem.active} />
          )}
        </ul>

        <div className="mt-auto pr-8">
          <div className="group flex items-center py-3 pl-3 mb-5 rounded-r-xl transition-colors cursor-pointer hover:bg-secondary">
            <svg className="mr-3 text-white group-hover:text-primary" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className="fill-current transition-colors" d="M12 2C13.6569 2 15 3.34315 15 5V11H10C9.44772 11 9 11.4477 9 12C9 12.5523 9.44772 13 10 13H15V19C15 20.6569 13.6569 22 12 22H6C4.34315 22 3 20.6569 3 19V5C3 3.34315 4.34315 2 6 2H12Z" fill="white"></path>
              <path className="fill-current transition-colors" d="M15 13L18.0858 13L16.2929 14.7929C15.9024 15.1834 15.9024 15.8166 16.2929 16.2071C16.6834 16.5976 17.3166 16.5976 17.7071 16.2071L20.5 13.4142C21.2811 12.6332 21.281 11.3668 20.5 10.5858L17.7071 7.79289C17.3166 7.40237 16.6834 7.40237 16.2929 7.79289C15.9024 8.18342 15.9024 8.81658 16.2929 9.20711L18.0858 11L15 11V13Z" fill="white"></path>
            </svg>

            <div className="text-white text-sm group-hover:text-primary transition-colors">Log out</div>
          </div>
        </div>

        <div className="flex items-center bg-cta text-xl md:text-2xl text-black p-5 font-semibold rounded-xl mx-8">Save big. Get Monthly Subscription.</div>
      </div>
    </React.Fragment>
  )
}

export default Menu;