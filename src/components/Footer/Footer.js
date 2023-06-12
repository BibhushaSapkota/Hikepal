import './Footer.css';

const Footer = () => {
    return(
        <div className="footer">
            <div className="top">
                <div>
                     <h1>Hikepal</h1>
                     <p>Join the Hike hit the trail with Hikepal fun will Never fail</p>
                </div>
                <div>
                    <a href="/"><i className='fa-brands fa-facebook-square'></i></a>
                    <a href="/"><i className='fa-brands fa-instagram'></i></a>
                    <a href="/"><i className='fa-brands fa-twitter-square'></i></a>
                    <a href="/"><i className='fa-brands fa-linkedin'></i></a>
                </div>
               
                
             </div>
             <div className="bottom">
                <div>
                    <h4>Join</h4>
                    <a href="/">Langtang Trek</a>
                    <a href="/">ABC Trek</a>
                    <a href="/">Ama Yangri Trek</a>

                </div>
                <div>
                    <h4>Company</h4>
                    <a href="/">About us</a>
                    <a href="/">Contact us</a>
                    <a href="/">Terms and conditions</a>
                    <a href="/">Privacy policy</a>
                </div>
                <div>
                    <h4>Help</h4>
                    <a href="/">FAQ</a>
                    <a href="/">Account Security</a>
                    <a href="/">Hike Status</a>
                    <a href="/">Contact</a>
                </div>
                <div>
                    <h4>Newsletter</h4>
                    <p>Subscribe to our newsletter to get the latest updates</p>
                    <input type="text" placeholder="Enter your email"/>
                    <button>Subscribe</button>
                </div>

            </div>
        </div>
    )

}

export default Footer