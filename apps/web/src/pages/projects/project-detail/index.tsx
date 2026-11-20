import { useParams } from "react-router";

export const ProjectsDetailPage = () => {
  const { slug } = useParams();

  return (
    <div>
      <div className="text-white">{slug}</div>
    </div>
  );
};
