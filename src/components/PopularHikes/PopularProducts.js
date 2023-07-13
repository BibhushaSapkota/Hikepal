import CategoriesData from "./CategoriesData";
import "./PopularProducts.css";
import Langtang1 from "../Images/lantang1.jpg";
import Langtang2 from "../Images/lantang2.jpg";
import Annapurna1 from "../Images/annapurna1.jpg";
import Annapurna2 from "../Images/annapurna2.jpg";

const Popular=({products})=>{
    return(
        <div className="popular">
            <div className="title-div">
            <h1 className="title">Most popular Hiking Trails</h1>
            <p className="title-paragraph">
                
Hiking has emerged as one of the most beloved outdoor activities worldwide, captivating nature enthusiasts and adventure seekers alike. Beyond its ability to offer a gateway to explore stunning landscapes, hiking also contributes significantly to physical fitness and mental well-being. However, the challenge of finding a compatible hiking companion often arises, dampening the excitement for many individuals. This is where Hikepal steps in to bridge the gap. Hikepal is an innovative website dedicated to connecting hikers with like-minded individuals who are also seeking a hiking partner. Whether you possess years of hiking experience under your belt or are just beginning to embark on this thrilling journey, Hikepal provides a comprehensive platform for all to discover their ideal hiking buddy. With a diverse community of hiking enthusiasts, Hikepal ensures that everyone can find a suitable companion to share their passion, embark on memorable adventures, and create lifelong connections. Don't let the lack of a hiking partner hold you back—join Hikepal today and unlock a world of possibilities on the trails!
            </p>
            </div>
            <CategoriesData
            className="popular-products"
            heading="Langtang Trek"
            text="The Langtang Valley Trek is a popular hiking trail in Nepal, with a duration of 10-15 days and a maximum elevation of either 3800m (Kyanjin Gompa) or 4773m (Kyanjin Ri), depending on the route taken. The trek begins and ends in Syabru Besi and is considered an easy to moderate difficulty level, making it accessible for most hikers. Accommodation is available in teahouses along the way, making it an ideal choice for those who prefer not to carry camping gear. The best time to embark on this trek is from March to June or September to November, when the weather is mild and visibility is at its best."
            img1={Langtang1}
            img2={Langtang2}/>
            <CategoriesData
            className="popular-products-reverse"
            heading="Annapurna Base Camp Trek"
            text="The minimum duration for this trek is 12 days, and the maximum elevation reached is 4130 meters or 13,550 feet. The trek starts and finishes in Nayapul, and is considered a moderate level of difficulty, making it a popular choice for many hikers. The trek is done in a teahouse style, where accommodation is available in guesthouses along the way. Along the trek, hikers can enjoy spectacular views of the Annapurna massif and other towering peaks of the region."
            img1={Annapurna1}
            img2={Annapurna2}/>
        </div>

    )
}
export default Popular