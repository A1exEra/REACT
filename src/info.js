function random() {
  return Math.floor(Math.random() * 100 + 1);
}
// console.log(random());
const Data = [
  {
    id: `1`,
    title: "this is the title 1",
    content: "this is the content ofthe card number 1...",
    src: `https://picsum.photos/seed/${random()}/200/200`,
  },
  {
    id: `2`,
    title: "this is the title 2",
    content: "this is the content ofthe card number 2...",
    src: `https://picsum.photos/seed/${random()}/200/200`,
  },
  {
    id: `3`,
    title: "this is the title 3",
    content: "this is the content ofthe card number 3...",
    src: `https://picsum.photos/seed/${random()}/200/200`,
  },
];

export default Data;
