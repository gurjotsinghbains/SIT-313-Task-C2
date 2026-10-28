const articles = [
  {
    id: 1,
    title: "Splashkit",
    description: "Learn how to build 2D games and graphics using the SplashKit SDK.",
    author: "Gurjot Singh Bains",
    rating: 5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs0hV5w4hsvGHLSzIDVb1lAjgelzFGFjtqyhs0_7dtkQ&s=10"
  },
  {
    id: 2,
    title: "C# Basics",
    description: "Getting started with C# — variables, loops, functions and OOP concepts.",
    author: "Gurjot Singh Bains",
    rating: 5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-XsFA7s65W_DJrGxYRXkZisfmMbYZUiiNrm1hjL71lA&s=10"
  },
  {
    id: 3,
    title: "NodeJS Basics",
    description: "Getting started with server-side JavaScript using NodeJS and Express.",
    author: "Gurjot Singh Bains",
    rating: 5,
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg"
  }
]

function ArticleCard({ article }) {
  return (
    <div className="card">

      <img src={article.image} alt={article.title} />

      <h3>{article.title}</h3>

      <p>{article.description}</p>

      <span>
        ⭐ {article.rating} &nbsp; {article.author}
      </span>

    </div>
  )
}

function Articles() {
  return (
    <div className="section">

      <h2>Featured Articles</h2>

      <div className="card-grid">

        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            article={article}
          />
        ))}

      </div>

      <button className="see-all">
        See all articles
      </button>

    </div>
  )
}

export default Articles