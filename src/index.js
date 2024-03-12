import React from "react";
import { createRoot } from "react-dom/client";

function Greeting() {
  return <h2>My First Component</h2>;
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => <h2>image placeholder</h2>;
const Title = () => {
  return <h2>Book Title</h2>;
};
const Author = () => <h4>Author</h4>;

const root = createRoot(document.getElementById("root"));

root.render(<Greeting />);
