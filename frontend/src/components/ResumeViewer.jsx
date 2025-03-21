import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Template1 from "./templates/Template1";
import Template2 from "./templates/Template2";

function ResumeViewer() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const [resumeData, setResumeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const templateId = searchParams.get("templateId");

  useEffect(() => {
    fetch(`/api/aka_resume/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setResumeData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching resume:", error);
        setError("Failed to load resume.");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  // Render based on the templateId
  switch (templateId) {
    case "temp1":
      return <Template1 data={resumeData} />;
    case "temp2":
      return <Template2 data={resumeData} />;
    default:
      return <p>No valid template found</p>;
  }
}

export default ResumeViewer;
