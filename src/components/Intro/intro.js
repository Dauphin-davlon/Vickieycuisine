import introPicture from '../../Assets/Images/introPicture.png';
import './intro.css';
function AboutOwner(){
    return(
        <div className = "introText">
            <h1>About Vickiey</h1>
            <p>Vickiey is a student at Rutgers University-Newark (RUN).
                She knows the diaspora in Nigeria in Newark, especially the campus 
                and the need for students to enjoy some Afrucan cuisine. She aims to please
                people with her food, and extend the invitation to Non-Africans to enjoy some
                beautiful cuisine. 

            </p>
        </div>
    )
}
function Intro(){
    return(
        <div className="introTop">
            <img src = {introPicture} alt= ""/>
            <AboutOwner/>
        </div>
    )
}

export default Intro;