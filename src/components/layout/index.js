import './index.scss'
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
    <div ckassName="App">
        <Sidebar />
         <div ckassName='page'>
         <span className='tags top-tags'>&lt;body&gt;</span>
        
        <Outlet />
        <span className = 'tags bottom-tags'>
        &lt;body&gt;
        <br />
        <span className='bottom-tag-html'>&lt;body&gt;</span>
        </span>

     </div>
    </div>
    )
}

export default Layout;