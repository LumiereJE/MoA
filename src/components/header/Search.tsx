import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [open, setOpen] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    console.log(searchKeyword);
    if (searchKeyword) {
      navigate(`/search/${searchKeyword}`);
      setSearchKeyword("");
    }
  };

  return (
    <div className="search-popup">
      <button
        className="search-btn"
        onClick={() => setOpen(true)}
        aria-label="검색창 열기"
      ></button>
      {/* 팝업 영역 */}
      <div
        className={`popup-overlay ${open ? "open" : ""}`}
        onClick={() => setOpen(false)}
      >
        <div
          className={`popup-content ${open ? "open" : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* 닫기 버튼 */}
          <button
            onClick={() => setOpen(false)}
            className="close-btn"
            aria-label="검색창 닫기"
          >
            <p className="bar"></p>
            <p className="bar"></p>
          </button>

          <h2 className="popup-title">전시, 공연 검색</h2>

          <input
            type="search"
            name="searchInput"
            id="searchInput"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
            placeholder="검색어를 입력하세요"
            className="popup-input"
          />

          <button onClick={() => handleSearch()} className="submit-btn">
            검색하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
