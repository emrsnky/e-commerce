import { useEffect, useState } from "react";

interface Link {
    title: string;
    sublinks?: Link[];
  }
export default function SidebarContent() {

    const [links, setLinks] = useState<Link[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const response = await fetch(
          "https://fe1111.projects.academy.onlyjs.com/api/v1/categories"
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        console.log(jsonData.data);
        setLinks(jsonData.data as Link[]);
      } catch (error) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchLinks();
   
  }, []);
  

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  
  return (
    <>
   {links?.map((link, index) => (
      <div key={index} className="sidebar-item">
        <div className="sidebar-item-title">{link.title}</div>
        <div className="sidebar-item-sublinks">
          {link.sublinks?.map((sublink, index) => (
            <div key={index} className="sidebar-item-sublink">
              {sublink.title}
            </div>
          ))}
        </div>
      </div>
    ))}
    </>
  )
}
