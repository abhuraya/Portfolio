import TechHead from '../assets/TechHead.jpg';
import Github from '../assets/Github.png';
import LinkedIn from '../assets/LinkedIn.png'
export default function Navbar(){
    return (
        <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src={TechHead} alt="Logo" width="100" height="75" class="d-inline-block align-text-top"/>
                        Abhudaya Rayamajhi
                </a>
            </div>
            <div class="container-fluid">
                <a class="navbar-brand" href="https://www.linkedin.com/in/abhudaya-rayamajhi-516412118/">
                    <button><img src={LinkedIn} alt="LinkedIn Logo" href='https://www.linkedin.com/in/abhudaya-rayamajhi-516412118/' /></button>
                </a>
            </div>
        </nav>
    )
}