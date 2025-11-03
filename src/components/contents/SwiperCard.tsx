import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchEvents } from "../../utils/cultureApi";
import type { EventItem } from "../../utils/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

interface SwiperCategoryProps {
  dtype: string;
}

const SwiperCard: React.FC<SwiperCategoryProps> = ({ dtype }) => {
  // detail page를 위한 고유 id가 필요해서 만듦
  const [items, setItems] = useState<(EventItem & { id: string })[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetchEvents(dtype)
      .then((data) => {
        console.log("📦 API 응답 데이터:", data);
        // 이미지 링크 정제 (이미지 로딩 오류 때문)
        const cleaned = data.map((item) => {
          let imageUrl = item.imageObject;

          if (
            typeof imageUrl === "string" &&
            imageUrl.includes("http://www.kopis.or.kr")
          ) {
            imageUrl = imageUrl.replace(
              "http://www.culture.go.kr/upload/rdf/",
              ""
            );
          }
          return {
            ...item,
            imageObject: imageUrl,
          };
        });
        const cleanedWithId = cleaned.map((item, idx) => ({
          ...item,
          id: item.url ? `${dtype}_${idx}` : `${dtype}_${idx}`,
        }));
        setItems(cleanedWithId);
      })
      .catch((err) => setError(String(err)))
      .finally(() => setLoading(false));
  }, [dtype]);

  if (loading) return <div>로딩중 ...</div>;
  if (error) return <div>에러발생_eventfetch: {error}</div>;
  if (items.length === 0) return <div>데이터 없음</div>;

  return (
    <section className="category_swiper">
      <div className="title_container">
        <h2 className="swiper_title">{dtype}</h2>
        <Link to={`/event/list/${dtype}`}>
          <span className="more">더보기</span>
        </Link>
      </div>
      <div className="swiper__inner">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={15}
          navigation={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1240: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1640: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
            2000: {
              slidesPerView: 6,
              spaceBetween: 10,
            },
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          {items.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="card">
                <Link to={`/event/detail/${item.id}`} id={item.id}>
                  <img
                    src={
                      item.imageObject ?? "https://via.placeholder.com/200x120"
                    }
                    alt={item.title ?? "이미지 없음"}
                  />
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SwiperCard;
