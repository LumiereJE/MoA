export interface EventItem {
  id: string;
  title: string; // 제목
  type: string; // 분야
  period: string; // 기간
  eventPeriod: string; // 시간
  eventSite: string; // 장소
  charge: string; // 금액
  contactPoint: string; // 문의안내
  url: string; // URL
  imageObject: string; // 이미지(썸네일)
  description: string; // 설명
  viewCount: string; // 조회수
  [key: string]: unknown;
}
