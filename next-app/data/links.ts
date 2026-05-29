export interface LinkItem {
  id: string;
  title: string;
  url: string;
  icon: string; // PRD 3.1.3: 추후 Google Favicon API를 통해 자동 연동 예정
  isActive: boolean; // PRD 3.1.3: 링크 활성화/비활성화 토글 옵션
}

export const DUMMY_LINKS: LinkItem[] = [
  {
    id: "1",
    title: "인스타그램",
    url: "https://www.instagram.com/wjd_wlgns_/",
    icon: "instagram",
    isActive: true,
  },
  {
    id: "3",
    title: "블로그",
    url: "https://blog.naver.com/jihun9310",
    icon: "book",
    isActive: true,
  },
  {
    id: "4",
    title: "GitHub",
    url: "https://github.com/jihun1101jung-sketch/",
    icon: "github",
    isActive: true,
  },
  {
    id: "5",
    title: "포트폴리오",
    url: "https://example.com/",
    icon: "briefcase",
    isActive: false, // 예시로 비활성화 상태 추가
  },
];
