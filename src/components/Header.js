// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="John Doe" />

            <div className='header__content'>
                <h1>Hi, I'm Renzo</h1>
                <p>Blockchain Developer</p>
                <a href="mailto:renzoaqc@gmail.com" className='button'>Get In Touch</a>
            </div>
        </section>
    );
}

export default Header;