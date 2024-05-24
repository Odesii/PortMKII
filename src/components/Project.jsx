

const Project = ({ title, image, appLink, repoLink }) => (
  <div className="project">
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <a href={appLink}>Deployed App</a>
    <a href={repoLink}>GitHub Repo</a>
  </div>
);

export default Project;