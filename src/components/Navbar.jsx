import TechHead from '../assets/TechHead.jpg';
import Github from '../assets/Github.png';
import LinkedIn from '../assets/LinkedIn.png';
import './navbar.css';

export default function Navbar(){
    return (
        <nav class="navbar bg-primary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src={TechHead} alt="Logo" width="100" height="75" class="d-inline-block align-text-top"/>
                        Abhudaya Rayamajhi
                </a>
            </div>
            <div class="container-fluid">
                <a class="navbar-brand" href="https://www.linkedin.com/in/abhudaya-rayamajhi-516412118/">
                    <img src={LinkedIn} alt="LinkedIn Logo" href='https://www.linkedin.com/in/abhudaya-rayamajhi-516412118/' height='75' width='75'/>
                </a>
                <a href="https://github.com/abhuraya">
                    <img src={Github} alt="Github logo" width='75' height='75' />
                </a>
            </div>
        </nav>
    )
}