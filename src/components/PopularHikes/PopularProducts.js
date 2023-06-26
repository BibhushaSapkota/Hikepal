import CategoriesData from "./CategoriesData";
import "./PopularProducts.css";
import Langtang1 from "../Images/lantang1.jpg";
import Langtang2 from "../Images/lantang2.jpg";
import Annapurna1 from "../Images/annapurna1.jpg";
import Annapurna2 from "../Images/annapurna2.jpg";

const Popular=({products})=>{
    return(
        <div className="popular">
            <h1>Most popular Hiking Trails</h1>
            <p>Hiking is one of the most popular outdoor activities around the world. It not only provides an opportunity to explore nature but also helps in maintaining physical and mental well-being. However, finding a hiking companion can be challenging. This is where Hikepal comes in.Hikepal is a website that connects hikers with like-minded individuals who are also looking for a hiking partner. Whether you are a seasoned hiker or a beginner, Hikepal provides a platform for all to find a suitable hiking buddy.</p>
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