import React from "react";

const Blog = () => {
  const post = [
    {
      img: "https://res.cloudinary.com/practicaldev/image/fetch/s--AuZFJnr6--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/a8okx5rxzuh5fojibsy3.png",
      title: "Bascis of MERN",
      url: "https://t.me/PROGRAMINGLANGUAGES1/737",
    },
    {
      img: "https://res.cloudinary.com/practicaldev/image/fetch/s--FsJZ6lhI--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gv7y2de8kalk9l0820ag.jpg",
      title: "Javascript: Frontend frameworks",
      url: "https://t.me/PROGRAMINGLANGUAGES1/844",
    },
  ];

  return (
    <section className="bg-primary text-white px-5 py-32" id="blog">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[100px] border-indigo-600 pb-2">
            Blogs
          </h2>

          <p className="pb-5">Some of my best blogs.</p>
        </div>

        <div></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-2 gap-10">
        {post.map((item) => {
          return (
            <div>
              <img src={item.img} alt={item.title} />
              <h3 className="py-5 text-2xl">{item.title}</h3>
              <a
                href={item.url}
                className=" btn bg-accent  border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent"
              >
                Read More
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Blog;