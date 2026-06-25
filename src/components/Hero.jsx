import "../css/Hero.css"
import image from "../assets/hero-banner.png";

export default function Hero(){
    return(
       
            <section className="hero">
                <div className="hero-content">
                    <h1>Create a Professional Resume in Minutes</h1>
                    <p>
                        Build your resume with modern templates and 
                        download it instantly. 
                    </p>
                    <button>Create Resume</button>
                </div>
                <div className="hero-image">
                    <img src={image} alt="Hero" />
                    </div>
            </section>

            
    

    );
}