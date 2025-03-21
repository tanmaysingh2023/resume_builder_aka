import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Template1Image from '../components/images/Template1.png';
import Template2Image from '../components/images/Template2.png';
import Template3Image from '../components/images/Template3.png';
import Template4Image from '../components/images/Template4.png';
import Template5Image from '../components/images/Template5.png';
import Template6Image from '../components/images/Template6.png';
import ImageModal from '../components/ImageModel'; // Ensure the path is correct

const templates = [
  { id: 'temp1', name: 'Template 1 - Minimal', image: Template1Image },
  { id: 'temp2', name: 'Template 2 - Two Column', image: Template2Image },
  { id: 'temp3', name: 'Template 3 - Timeline', image: Template3Image },
  { id: 'temp4', name: 'Template 4 - Bold & Modern', image: Template4Image },
  { id: 'temp5', name: 'Template 5 - With Image', image: Template5Image },
  { id: 'temp6', name: 'Template 6 - Horizontal Lines', image: Template6Image },
];

const TemplatePage = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSelect = (templateId) => {
    // Check if a token is present in localStorage
    const token = localStorage.getItem('token');
    if (!token) {
      // Redirect to login if not authenticated
      navigate('/login');
    } else {
      // Otherwise, navigate to the create resume page with the selected template
      navigate(`/${templateId}`);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 py-10 pt-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-10 text-white">
          Choose Your Resume Template
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {templates.map((template) => (
            <div
              key={template.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all"
            >
              <div 
                className="h-48 bg-gray-200 flex items-center justify-center cursor-pointer"
                onClick={() => setSelectedImage(template.image)}
              >
                <img
                  src={template.image}
                  alt={template.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-3">{template.name}</h2>
                <button
                  onClick={() => handleSelect(template.id)}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded transition-colors"
                >
                  Use Template
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedImage && (
        <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </div>
  );
};

export default TemplatePage;
