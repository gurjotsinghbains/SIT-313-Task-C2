const projects = [
  {
    id: 1,
    title: "Project 1: Student Signup Form",
    description: "In this project, I made a student signup form using Tailwind CSS and HTML.",
    image: "/signup form.jpg"
  },
  {
    id: 2,
    title: "Project 2: BMI Calculator",
    description: "In this project, I made a responsive BMI calculator using Tailwind CSS and JavaScript which adjusts according to the screen size.",
    image: "/bmi.jpg"
  }
]

function Portfolio() {
  return (
    <div id="work" className="portfolio">

      {projects.map((project) => (
        <div key={project.id} className="project">

          <img src={project.image} alt={project.title} />

          <div>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>

        </div>
      ))}

    </div>
  )
}

export default Portfolio