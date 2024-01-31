import Navbar from './components/Navbar.jsx';
import Component from './components/widgets/userPwidgets.jsx';




     

const App = () => {
    const body=document.querySelector('body');
    body.className=" dark:bg-emerald-950 bg-green-100 dark:test-light "
    return(
    <div className=' bgem'>
    <Navbar  />
    <Component />
    </div>
    )
};


        


export default App
