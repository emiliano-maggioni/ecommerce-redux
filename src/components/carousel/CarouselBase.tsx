import { Carousel } from "react-responsive-carousel";
import './Carousel.css';
import classes from "./CarouselBase.module.scss";

const CarouselBase = (props: any) => {

    return (
        <Carousel showArrows={false} showStatus={false}  >
            {props.images?.map((el: string) => <div key={el} ><img src={`/images/${el}`} /></div>)}
        </Carousel>
    );
}

export default CarouselBase;
