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
    contribution: 70,
    duration: 2,
  },
  {
    id: "gongzzang",
    img: "/images/gongzzang.png",
    title: "공짱",
    contribution: 100,
    duration: 3,
  },
  {
    id: "meple",
    img: "/images/meple.png",
    title: "미플",
    contribution: 100,
    duration: 3,
  },
  {
    id: "cedulearn",
    img: "/images/cedulearn.png",
    title: "쎄듀런",
    contribution: 70,
    duration: 3,
  },
  {
    id: "ev",
    img: "/images/ev.png",
    title: "EV 충전 운영시스템",
    contribution: 100,
    duration: 3,
  },
  {
    id: "vodaplay",
    img: "/images/vodaplay.png",
    title: "보다플레이",
    contribution: 70,
    duration: 3,
  },
];
