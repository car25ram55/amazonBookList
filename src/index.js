import React from "react";
import { createRoot } from "react-dom/client";

const Booklist = () => {
  return <section>
  <Book />
  <Book />
  <Book />
  <Book />
</section>;
};

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
<img 
src="https://images-na.ssl-images-amazon.com/images/I/819bD-wfwoL._AC_UL300_SR300,200_.jpg"
alt="Killers of the Flower Moon"
/>
);
const Title = () => <h2>Killers of the Flower Moon</h2>;
const Author = () => {return <h4>David Grann </h4>;}

const root = createRoot(document.getElementById("root"));

root.render(<Booklist />);
