
import {Link, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const { error} = useRouteError()
  return (
    <div className='text-center m-10'>
        <div>
        <h4 className='text-8xl  text-rose-500'>404</h4>
        <p className='text-2xl'>
            <i>{error?.statusText || error?.message}</i>
        </p>
        <img src="https://i.ibb.co/0sSP4pH/images-1.jpg"  alt="" />
        </div>
        <Link to="/"><button className='bg-secondary text-white rounded p-4 text-3xl'>Back to home</button></Link>
        
    </div>
);
};


export default ErrorPage;