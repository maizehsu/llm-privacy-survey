import React from "react";
import Toplayout from "../../components/toplayout";

const BlogNavigation = () => {
  // Dummy data for blogs (replace it with your actual data)
  const blogs = [
    {
      id: 1,
      title: "Blog 1",
      date: "May 10, 2023",
      image: "/images/blog/blog1.jpg",
    },
    {
      id: 2,
      title: "Blog 2",
      date: "May 12, 2023",
      image: "/images/blog/blog2.jpg",
    },
    {
      id: 3,
      title: "Blog 3",
      date: "May 15, 2023",
      image: "/images/blog/blog3.jpg",
    },
  ];

  return (
    <Toplayout>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
        <div className="container mx-auto bg-white">
          <h2 className="text-2xl font-bold mb-4 flex items-center justify-center w-full px-4 mx-auto max-w-7xl sm:px-6">
            Latest Blogs
          </h2>
          <div className="grid gap-4">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="border border-gray-200 rounded p-4 hover:shadow-md transition duration-300"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-40 object-cover rounded mb-2"
                />
                <h3 className="text-lg font-bold mb-1">{blog.title}</h3>
                <p className="text-gray-500 text-sm">{blog.date}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </Toplayout>
  );
};

export default BlogNavigation;
