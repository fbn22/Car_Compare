import "./CategoryBar.css";
import { Link } from "react-router-dom";

const CategoryBar = () => {
  return (
    <div className='category-bar'>
      {Categories.map((category) => (
        <Link to={category.link}>
          <div className='category-element'>
            <img src={category.img} alt='category image'/>
            <h3>{category.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryBar;

const Categories = [
  {
    id: 1,
    img: "https://res.cloudinary.com/efer/image/upload/v1654882115/CarCompare/binance_hbtivc.png",
    title: "crypto",
    link: "/crypto",
  },
  {
    id: 2,
    img: "https://res.cloudinary.com/efer/image/upload/v1654882115/CarCompare/football_oq8a4e.png",
    title: "football",
    link: "/football",
  },
  // {
  //   id: 0,
  //   img: "https://res.cloudinary.com/efer/image/upload/v1645272009/CarCompare/steering-wheel_ypzenl.png",
  //   title: "cars",
  //   link: "/game",
  // },
  // {
  //   id: 1,
  //   img: "https://res.cloudinary.com/efer/image/upload/v1645285107/CarCompare/planet-earth_lasasb.png",
  //   title: "coutries",
  //   link: "/countries",
  // },
  // {
  //   id: 4,
  //   img: "https://res.cloudinary.com/efer/image/upload/v1645285469/CarCompare/rich-man_rr6zv7.png",
  //   title: "/networth",
  //   link: "/networth",
  // },
];






