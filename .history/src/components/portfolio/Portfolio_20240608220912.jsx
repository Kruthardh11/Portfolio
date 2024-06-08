import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Anime Web-App",
    img: "https://private-user-images.githubusercontent.com/110627779/248319734-467968f3-86c8-4d9c-ac6e-df380610549d.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTc4NTg5ODcsIm5iZiI6MTcxNzg1ODY4NywicGF0aCI6Ii8xMTA2Mjc3NzkvMjQ4MzE5NzM0LTQ2Nzk2OGYzLTg2YzgtNGQ5Yy1hYzZlLWRmMzgwNjEwNTQ5ZC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNjA4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDYwOFQxNDU4MDdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03ZTY0NTRmOWUzNWI0ZjAyZjNiN2VhYzY0NmNiZDNmNmU0NTYzNGQyZWVlZTE2OTVlODlmMzkzYWM0ZGIwNGNkJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.kxrCbOERTQZrdpuHgB-UGgAOPCvuX0V-aCmlUH_Cqgg",
    desc: "A Web-App for viewing and bookmarking your favorite anime. Made using React Js, Tailwind CSS, Jikan API. The App is also responsive in design."
  },
  {
    id: 2,
    title: "Tic-Tac-Toe",
    img: "https://private-user-images.githubusercontent.com/110627779/337918850-de9b5a23-08ea-4e36-a8ec-d8a04bc79e40.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTc4NjUwMjgsIm5iZiI6MTcxNzg2NDcyOCwicGF0aCI6Ii8xMTA2Mjc3NzkvMzM3OTE4ODUwLWRlOWI1YTIzLTA4ZWEtNGUzNi1hOGVjLWQ4YTA0YmM3OWU0MC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNjA4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDYwOFQxNjM4NDhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT04MTk5MTNkOTI2YWZjZWIyZWIxMTNhNzk3ZmMzNzA3OGRmNDllNWEzOGVlMzRhM2VkOWFiMWY2ZTNkNmYxYjU0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.y4O1PVIXa_wHnALfrm_mJMYZl9I8PptY3KAaCBEydYM",
    desc: "A tic tac toe multiplayer game made using React Js, Node Js, and Socket.io. Socket.io creates a bidirectional communication channel helping seamless gaming experience. ",
  },
  {
    id: 3,
    title: "Virtual Painter",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "A virtual painting tool which helps paint without touching the keyboard. Made using Python and mediapipe library.",
  },
  // {
  //   id: 4,
  //   title: "Music App",
  //   img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  // },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
