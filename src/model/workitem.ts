export default interface WorkItemModel {
  id: string;
  img: string;
  title: string;
  contribution: number;
  duration: number;
}

export const WorkItemData = [
  {
    id: "jamong",
    img: "/images/jamong.png",
    title: "자몽",
    contribution: 100,
    duration: 30,
  },
  {
    id: "gongzzang",
    img: "/images/gongzzang.png",
    title: "공짱",
    contribution: 100,
    duration: 30,
  },
  {
    id: "meple",
    img: "/images/meple.png",
    title: "미플",
    contribution: 100,
    duration: 30,
  },
  {
    id: "cedulearn",
    img: "/images/cedulearn.png",
    title: "쎄듀런",
    contribution: 100,
    duration: 30,
  },
  {
    id: "ev",
    img: "/images/ev.png",
    title: "EV 충전 운영시스템",
    contribution: 100,
    duration: 30,
  },
  {
    id: "vodaplay",
    img: "/images/vodaplay.png",
    title: "보다플레이",
    contribution: 100,
    duration: 30,
  },
];
