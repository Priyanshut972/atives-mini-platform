import React from "react";
import Card from "../components/Card";
import { posts } from "../data/mockData";

const Home: React.FC = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Home Feed</h2>
      {posts.map((post) => (
        <Card
          key={post.id}
          title={post.title}
          subtitle={`By ${post.author}`}
          image={post.image}
        />
      ))}
    </div>
  );
};

export default Home;
