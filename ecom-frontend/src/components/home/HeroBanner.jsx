// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

// Import Swiper styles
import 'swiper/css';
import { Autoplay, Pagination, EffectFade, Navigation , Scrollbar} from 'swiper/modules';

import { Link } from 'react-router-dom';
import { bannerLists } from '../../utils/BannerLists';

const colors = ["bg-banner-color1", "bg-banner-color2", "bg-banner-color3"];

const HeroBanner = () => {
    return (
        <div className='py-2 rounded-md'>
            <Swiper
                speed={1500}  // Adjust the transition time in ms
                loop={true}
                grabCursor = {true}
                autoplay = {{
                    delay:1000,
                    disableOnInteraction: false,
                }}
                navigation
                modules={[Pagination, EffectFade, Navigation, Autoplay , Scrollbar]}
                //pagination={{clickable: true}}
                //scrollbar={{ draggable: true}}
                slidesPerView={1}>

                    {bannerLists.map((item, i) => (
                        <SwiperSlide key={item.id}>
                            <div className={`carousel-item rounded-md min-h-[300px] ${colors[i]}`}>
                                <div className='flex items-center justify-center'>
                                    <div className='hidden lg:flex justify-center w-1/2 p-8'>
                                    <div className='text-center'>
                                        <h3 className='text-3xl text-white font-bold'>
                                            {item.title}
                                        </h3>
                                        <h1 className='text-5xl text-white font-bold mt-2'>
                                            {item.subtitle}
                                        </h1>
                                        <p className='text-white font-bold mt-4'>
                                            {item.description}
                                        </p>
                                        <Link 
                                            className='mt-6 inline-block bg-black text-white py-2 px-4 rounded-sm hover:bg-gray-800'
                                            to={item.link}>
                                        Shop
                                        </Link>
                                    </div>
                                </div>
                                <div className='w-full flex justify-center lg:w-1/2 p-4'>
                                    <img src={item?.image} className="max-h-[300px] object-contain" />
                                </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    );
}


export default HeroBanner;