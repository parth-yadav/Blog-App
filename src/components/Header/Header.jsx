import React from 'react'
import {Container, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Logo from '../BlogApp/Logo'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]


//   return (
//     <header className="flex gap-5 justify-between w-full text-sm whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
//       <Container>
//         <nav className='flex gap-5 self-start mt-1 leading-[143%] text-slate-900'>
//           <div className='mr-4'>
//             <Link to='/'>
//               <Logo width='70px'   />

//               </Link>
//           </div>
//           <ul className='flex ml-auto gap-2'>
//             {navItems.map((item) => 
//             item.active ? (
//               <li key={item.name}>
//                 <button
//                 onClick={() => navigate(item.slug)}
//                 className='px-4 py-2 rounded-md border border-solid hover:bg-orange-200 border-slate-500 text-black text-lg'
//                 >{item.name}</button>
//               </li>
//             ) : null
//             )}
//             {authStatus && (
//               <li>
//                 <LogoutBtn />
//               </li>
//             )}
//           </ul>
//         </nav>
//         </Container>
//     </header>
//   )
// }

return (
  <header className="w-full text-sm">
    <Container>
      <nav className="flex gap-5 justify-between items-center flex-wrap max-w-full">
        <div className="flex items-center gap-4">
          <Link to='/'>
            <Logo width='70px' />
          </Link>
        </div>
        <ul className="flex gap-2 flex-wrap">
          {navItems.map((item) =>
            item.active ? (
              <li key={item.name}>
                <button
                  onClick={() => navigate(item.slug)}
                  className="px-4 py-2 rounded-md border border-solid hover:bg-orange-200 border-slate-500 text-black text-lg"
                >
                  {item.name}
                </button>
              </li>
            ) : null
          )}
          {authStatus && (
            <li>
              <LogoutBtn />
            </li>
          )}
        </ul>
      </nav>
    </Container>
  </header>
);
}

export default Header