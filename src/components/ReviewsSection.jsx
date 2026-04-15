
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Section from "./Section";
import { Link } from "react-router-dom";

const REVIEWS_URL = "/reviews.json";


export default function ReviewsSection() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const arsFisioGoogle = "https://www.google.com/maps/place/Ars+Fisio+Grottarossa/@41.9731397,12.4421594,1591m/data=!3m1!1e3!4m18!1m9!3m8!1s0x132f67619971b349:0x825a842c657fbf57!2sArs+Fisio+Grottarossa!8m2!3d41.9727977!4d12.4441128!9m1!1b1!16s%2Fg%2F11hc_w1zds!3m7!1s0x132f67619971b349:0x825a842c657fbf57!8m2!3d41.9727977!4d12.4441128!9m1!1b1!16s%2Fg%2F11hc_w1zds?entry=ttu&g_ep=EgoyMDI2MDQxMi4wIKXMDSoASAFQAw%3D%3D";

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
      <div className="swiper-container">
        {/* Prev button */}
        <div className="prev-btn">
          <button style={{aspectRatio: "1/1", height: "100%"}}>
            &#10094;
          </button>
        </div>

        {loading ? (
        <div className="text-center">
            Caricamento recensioni...
        </div>
        ) : (
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={40}
          slidesPerView={1}
          navigation={{
            prevEl: ".prev-btn",
            nextEl: ".next-btn"
          }}
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {reviews.map((review, index) => {
            const rating = review.rating || 5;
            return (
              <SwiperSlide key={index}>
                <Link to={arsFisioGoogle}>
                  <div className="swiper-slide-custom">
                    {/* Pillola con info recensione */}
                    <div className="google-review-pill">
                      <div>
                        <img className="google-logo" src="/search.png" alt="" />
                      </div>
                      <div className="flex flex-col">
                        {/* Autore recensione */}
                        <span className="review-author-name">
                          {review.author_name || review.name}
                        </span>
                        {/* Stelline */}
                        <div className="review-stars">
                          {Array.from({ length: 5 }).map((_, i) => (
                          <svg
                          key={i}
                          className={`review-star ${i < rating ? 'full-star' : 'empty-star'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
                          </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                    {/* Testo della recensione */}
                    <p className="review-text">
                      {review.text || review.review_text}
                    </p>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
        )}

        {/* Next button */}
        <div className="next-btn">
          <button style={{aspectRatio: "1/1", height: "100%"}}>
            &#10095;
          </button>
        </div>
      </div>
      <div className="all-reviews">
        <a 
        href={arsFisioGoogle}
        target="_blank"
        rel="noopener noreferrer"
        >
          <button>
            Vedi tutte le nostre recensioni
          </button>
        </a>
      </div>
    </Section>
  );
};