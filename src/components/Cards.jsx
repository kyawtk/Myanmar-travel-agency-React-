import './Cards.scss'
import CardItem from './CardItem'
 const Cards = () => {
    const imgs = [
        {title: "Royal Majesty of Began", url : '../src/assests/images/img (1).jpg' , to:'/places',bannerText:'Hot'},
        {title: "Sea of Ancient Pagodas", url : '../src/assests/images/img (2).jpg', to:'/places',bannerText:'Favourite'},
        {title: "Fortress of the Highness", url : '../src/assests/images/img (3).jpg', to:'/places',bannerText:'Best Buy'},
        {title: "Rise to the Heaven", url : '../src/assests/images/img (4).jpg' ,to:'/places',bannerText:'Most Liked'},
        {title: "Rays of the Breath Taker", url : '../src/assests/images/img (5).jpg', to:'/places',bannerText:'Special'},
       
        {title: "See the Future", url : '../src/assests/images/img (7).jpg' ,to:'/places',bannerText:'Life Changing'},
    ]
  return (
    <div className="cards-container">
        {imgs.map(img=>{
            return <CardItem key={img.title} {...img}></CardItem>
        })}
    </div>
  )
}
export default Cards