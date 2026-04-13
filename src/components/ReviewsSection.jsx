
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Section from "./Section";

const REVIEWS_URL = "/reviews.json";


const ReviewsSection = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(REVIEWS_URL)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <Section>
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-10">
        Dicono di noi
      </h2>
      {loading ? (
        <div className="text-center">Caricamento recensioni...</div>
      ) : (
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-md rounded-2xl p-6 h-full flex flex-col justify-between">
                <p className="mb-4 text-gray-700">“{review.text || review.text || review.review_text}”</p>
                <p className="font-semibold text-primary">{review.author_name || review.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </Section>
  );
};

export default ReviewsSection;