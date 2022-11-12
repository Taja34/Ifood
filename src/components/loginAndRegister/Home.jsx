import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { actionLogoutAsync } from '../../redux/actions/userAction';

const Home = () => {
   const navigate = useNavigate()
    const dispatch = useDispatch();
    const onCloseSession = () => {
        dispatch(actionLogoutAsync());
navigate('/singin')
      };
  return (
    <div><button onClick={onCloseSession}>log out</button></div>
  )
}

export default Home