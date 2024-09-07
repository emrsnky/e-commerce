import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface SubChild {
  name: string;
}

interface Child {
  name: string;
  sub_children?: SubChild[];
}

interface Link {
  name: string;
  picture_src?: string;  // picture_src opsiyonel olabilir, çünkü her zaman olmayabilir
  children?: Child[];
}

export default function SidebarContent() {
  const [currentLevel, setCurrentLevel] = useState<Link[] | Child[] | SubChild[]>([]);
  const [previousLevel, setPreviousLevel] = useState<(Link[] | Child[] | SubChild[])[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const response = await fetch(
          "https://fe1111.projects.academy.onlyjs.com/api/v1/categories"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        const fetchedLinks = Array.isArray(jsonData.data.data)
          ? jsonData.data.data
          : [];

        setCurrentLevel(fetchedLinks as Link[]); // İlk seviyeye doğrudan set ediyoruz
      } catch (error) {
        setError("Veri alınamadı");
      } finally {
        setLoading(false);
      }
    };

    fetchLinks();
  }, []);

  const handleNextLevel = (nextLevel: Child[] | SubChild[]) => {
    setPreviousLevel((prev) => [...prev, currentLevel]);
    setCurrentLevel(nextLevel);
  };

  const handleBack = () => {
    const lastLevel = previousLevel[previousLevel.length - 1];
    setCurrentLevel(lastLevel);
    setPreviousLevel((prev) => prev.slice(0, -1));
  };

  if (loading) return <div>Yükleniyor...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      {previousLevel.length > 0 && (
        <button onClick={handleBack} className="btn btn-secondary rounded-pill mb-2 fw-bold">
          <FaChevronLeft className="me-1" /> Geri
        </button>
      )}
      <ul>
        {currentLevel.map((link) => (
          <li key={link.name} className="d-flex justify-content-between align-items-center">
            
            {"picture_src" in link && link.picture_src && (
              <img
                src={`https://fe1111.projects.academy.onlyjs.com/${(link as Link).picture_src}`}
                alt={link.name}
                className="w-25"
              />
            )}
            <span className="fw-bold mb-2">{link.name}</span>
            {("children" in link && link.children) || ("sub_children" in link && link.sub_children) ? (
              <button
                className="btn btn-link text-dark"
                onClick={() =>
                  handleNextLevel(
                    (link as Link).children || (link as Child).sub_children || []
                  )
                }
              >
               <FaChevronRight />
              </button>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
