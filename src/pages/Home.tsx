import Main from "../components/section/Main";
import SwiperCard from "../components/contents/SwiperCard";

import React from "react";

const Home = () => {
  return (
    <Main>
      <SwiperCard dtype="연극" />
      <SwiperCard dtype="뮤지컬" />
      <SwiperCard dtype="오페라" />
      <SwiperCard dtype="음악" />
      <SwiperCard dtype="콘서트" />
      <SwiperCard dtype="국악" />
      <SwiperCard dtype="무용" />
      <SwiperCard dtype="전시" />
      <SwiperCard dtype="기타" />
    </Main>
  );
};

export default Home;
