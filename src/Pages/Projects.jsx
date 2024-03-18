import { projects } from "../constants";
import { Link } from "react-router-dom";
import CTA from "../components/CTA";

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Projects
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim hic
          recusandae quis dolore, laboriosam obcaecati consectetur. Eos corporis
          at iure. Eaque vero aspernatur eum libero natus laborum consequatur
          beatae iusto saepe quam nobis atque eius autem hic cumque rem
          laboriosam tempore amet ipsum, tenetur accusantium, consequuntur
          quisquam obcaecati reprehenderit! Eos.
        </p>
      </div>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt="Project Icon"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500">{project.description}</p>
              <div className="mt-5 flex items-center gap-2 font-popppins">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                >
                  Live Link
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="boredr-slate-200" />

      <CTA />
    </section>
  );
};

export default Projects;
