import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
  return (
    <button
    className='px-4 py-2 text-white rounded-md bg-orange-600'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn