import React from "react";
import { useAuth } from "../context/AuthProvider";

function About() {
  const { profile } = useAuth();
  console.log(profile);
  return (
    <div className="container mx-auto my-12 p-4 space-y-9">
     <h1 className="text-2xl font-bold mb-6 text-center" style={{ color: '#3B82C6' }}>About</h1>
      <p>
        This is{" "}
        <strong className="text-blue-800 font-semibold hover:scale-105 duration-500">
          {profile?.user?.name}
        </strong>{" "}
        What Makes Us Different?
We don’t just talk about fashion – we live it! Here’s why StyleCue stands out in the crowded world of fashion blogs:
Passionate About Style: Our team is made up of fashion enthusiasts who live and breathe style. We are always on the lookout for new trends, classic pieces, and the latest fashion innovations.
Practical Fashion Advice: We go beyond runway reports and haute couture. At styleCue, you’ll find real-world fashion tips, styling advice, and guides on how to wear the trends with confidence – no matter your size, shape, or budget.
A Community of Fashion Lovers: We believe fashion is for everyone. We foster a community where all kinds of fashion lovers can connect, share ideas, and inspire each other.
      </p>
      <h2 className="font-semibold text-blue-800 text-xl">
        Technical Expertise:
      </h2>
      <p>
      Powered by the MERN Stack
Our website is built using the MERN stack, which ensures that you get a fast, reliable, and interactive experience every time you visit us.
MongoDB: Our database is powered by MongoDB, providing a flexible and scalable solution that ensures your favorite content, blog posts, and fashion inspiration is always up-to-date.
Express.js: On the backend, we use Express.js to create a smooth, efficient, and fast server that powers all the requests, from browsing the latest blog posts to exploring new collections.
React.js: The heart of our frontend is React.js, providing an interactive, dynamic, and smooth user experience. Our blog looks and feels modern, while offering you the ability to interact with content in a seamless way.
Node.js: Node.js powers our backend with its asynchronous, event-driven architecture, ensuring that your experience is fast, responsive, and user-friendly.
      </p>
      <h2 className="font-semibold text-blue-800 text-xl">
        Professional Highlights:
      </h2>
      <p>
        Successfully developed and deployed numerous full-stack applications,
        demonstrating strong problem-solving skills and a keen eye for detail.
        Collaborated with cross-functional teams to deliver high-quality
        software solutions within tight deadlines. Continuously learning and
        adapting to emerging technologies and industry trends to stay ahead in
        the fast-evolving tech landscape.
      </p>
      <br />
      <span>
        we are dedicated to leveraging his expertise to contribute to
        innovative projects and drive technological advancements. Whether
        working on front-end interfaces or back-end logic, he is passionate
        about delivering exceptional digital solutions that meet user needs and
        exceed client expectations.
      </span>
      <h2 className="font-semibold text-blue-800 text-xl">
      Our Vision
      </h2>
      <p>
      Our Vision
At styleCue, we envision a world where everyone can embrace their personal style with confidence. We want to be your trusted source for fashion inspiration, practical style advice, and the latest fashion updates. No matter where you are on your fashion journey, we’re here to support you and help you express yourself through the art of fashion.
We’re more than just a blog – we’re a community, a space where you can explore, discover, and share your love for all things stylish.

Meet the Team
      </p>
    </div>
  );
}

export default About;
