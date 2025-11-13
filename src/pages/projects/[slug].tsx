import { GetStaticPaths, GetStaticProps } from "next";
import { getAllProjects, getProjectBySlug } from "../../lib/projects";
import { Project } from "../../types";
import Image from "next/image";

interface ProjectPageProps {
  project: Project | null;
}

const ProjectPage: React.FC<ProjectPageProps> = ({ project }) => {
  if (!project) return <div>Project not found</div>;

  // Provide safe fallbacks
  const images = Array.isArray(project.images) ? project.images : [];

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="text-sm mb-6">{project.excerpt}</p>

      {images.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.map((src, idx) => (
            <div key={idx} className="relative h-72 rounded overflow-hidden">
              <Image
                src={src}
                alt={project.title || "Project image"}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 italic">
          No images available for this project.
        </p>
      )}
    </div>
  );
};

export default ProjectPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = getAllProjects();

  return {
    paths: projects?.map((p) => ({ params: { slug: p.slug } })) ?? [],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const project = getProjectBySlug(slug) || null;

  if (!project) {
    console.warn(`⚠️ Project not found for slug: ${slug}`);
  } else if (!Array.isArray(project.images)) {
    console.warn(`⚠️ Project "${project.title}" has no images array`);
  }

  return {
    props: { project },
  };
};
