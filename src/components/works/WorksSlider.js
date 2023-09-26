import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import styles from './styles.module.css';
import Image from 'next/image';

const WorksSlider = ({ data }) => {
  console.log(data);
  return (
    <Swiper
      pagination={{
        type: 'progressbar',
      }}
      autoplay={{
        delay: 2000,
        disableOnInteraction: true,
      }}
      slidesPerView={'auto'}
      navigation={true}
      modules={[Pagination, Navigation]}
      className={styles.swiper}
      //onSlideChange={() => console.log('slide change')}
      //onSwiper={(swiper) => console.log(swiper)}
    >
      {data.map((item, idx) => (
        <SwiperSlide key={idx} className={styles.mySwiper}>
          <Image
            src={'https:' + item.fields.file.url}
            alt={item?.fields?.description}
            width={0}
            sizes='100vw'
            height={0}
            fill
            className={styles.swiperImg}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorksSlider;
