import './index.scss'

const Blog = () => {

const BlogData = [
    {img: "blog1-placeholder.png", title: "More productive with an atmosphere of greenery", content: "An atmosphere of greenery can increase productivity in the workplace. Studies show that plants improve air quality and decrease stress..."},
    {img: "blog2-placeholder.png", title: "The benefits of plants in your room", content: "Plants in your room can bring numerous benefits, such as improved air quality, reduced stress, and increased feelings of well-being...."},
    {img: "blog3-placeholder.png", title: "Hobbyist plants in the house", content: "Having hobbyist plants in the house is a great way to bring nature indoors. Not only do they purify the air, but they...."},
];
  return (
    <div className="blog-content">
            {BlogData.map((blog, index) => (
                <div className="blog-card" key={index}>
                    <img src={blog.img} alt="blog" />
                    <div className="blog-title">
                        <h1>{blog.title}</h1>
                        <p>{blog.content}</p>
                    </div>
                    <div className="blog-extra">
                        <p>January 20, 2023</p>
                        <button>Read More</button>
                    </div>
                </div>
            ))}
    </div>
  )
}

export default Blog