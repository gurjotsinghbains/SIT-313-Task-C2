const tutorials = [
  {
    id: 1,
    title: "C++ Basics",
    description: "Learn fundamentals of C++ including syntax, pointers and memory management.",
    username: "gurjot_dev",
    rating: 5,
    image: "https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg"
  },
  {
    id: 2,
    title: "Computer Systems",
    description: "Understand how computers work at the hardware and operating system level.",
    username: "gurjot_dev",
    rating: 5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkp_1-3ydNgtmBZGmMjQCLy50v99GMFecXy37wN1u8bw&s=10"
  },
  {
    id: 3,
    title: "Tailwind CSS",
    description: "Build beautiful responsive UIs fast using Tailwind CSS utility classes.",
    username: "gurjot_dev",
    rating: 4.9,
    image: "https://images.pexels.com/photos/1089440/pexels-photo-1089440.jpeg"
  }
]

function TutorialCard({ tutorial }) {
  return (
    <div className="card">

      <img src={tutorial.image} alt={tutorial.title} />

      <h3>{tutorial.title}</h3>

      <p>{tutorial.description}</p>

      <span>
        ⭐ {tutorial.rating} &nbsp; {tutorial.username}
      </span>

    </div>
  )
}

function Tutorials() {
  return (
    <div className="section">

      <h2>Featured Tutorials</h2>

      <div className="card-grid">

        {tutorials.map((tutorial) => (
          <TutorialCard
            key={tutorial.id}
            tutorial={tutorial}
          />
        ))}

      </div>

      <button className="see-all">
        See all tutorials
      </button>

    </div>
  )
}

export default Tutorials