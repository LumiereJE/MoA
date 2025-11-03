// src/api/fetchEvents.ts
// 단일 파일: 카테고리(dtype)만 바꿔서 호출하면 데이터 배열을 반환합니다.

import type { EventItem } from "./types";

// type Raw = Record<string, unknown>;

const BASE = "https://api.kcisa.kr/openapi/CNV_060/request";
const SERVICE_KEY = import.meta.env.VITE_SERVICE_KEY ?? "";

function buildUrl(dtype = "전시", pageNo = 1, numOfRows = 20, title = "") {
  const params = new URLSearchParams({
    serviceKey: SERVICE_KEY,
    dtype,
    pageNo: String(pageNo),
    numOfRows: String(numOfRows),
    title,
  });
  console.log("buildUrl 성공");
  return `${BASE}?${params.toString()}`;
}

/**
 * @param dtype - "전시" | "뮤지컬" | "연극" 등
 * @param signal - (선택) AbortSignal로 요청 취소 가능
 * @returns Promise<EventItem[]>
 */
export async function fetchEvents(
  dtype = "전시",
  signal?: AbortSignal
): Promise<EventItem[]> {
  const url = buildUrl(dtype);

  const res = await fetch(url, {
    headers: { Accept: "application/json" },
    signal,
  });
  console.log("apiFetch 완");
  if (!res.ok) {
    const txt = await res.text().catch(() => "");
    throw new Error(`HTTP ${res.status}: ${res.statusText} ${txt}`);
  }

  const json = await res.json().catch(() => ({}));
  const items =
    json?.response?.body?.items?.item ??
    json?.items ??
    json?.result?.items ??
    [];

  return items;
}
