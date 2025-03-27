import React from 'react';
import styled from 'styled-components';

// --- 1. Sample Project Data ---
// Using placeholder images
const projectsData = [
  {
    id: 1,
    title: 'Project One',
    description: 'A brief description of the first project.',
    // Placeholder image URL (600x400)
    imageUrl: 'https://via.placeholder.com/600x400.png?text=Project+One',
    link: '#', // Link to project details or live site
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'Details about the second creative work.',
    // Placeholder image URL (600x400)
    imageUrl: 'https://via.placeholder.com/600x400.png?text=Project+Two',
    link: '#',
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'Showcasing the third piece in the portfolio.',
    // Placeholder image URL (600x400)
    imageUrl: 'https://via.placeholder.com/600x400.png?text=Project+Three',
    link: '#',
  },
  // Add more projects as needed, using similar placeholder URLs
  // Example for a fourth project:
  // {
  //   id: 4,
  //   title: 'Project Four',
  //   description: 'Another example project description.',
  //   imageUrl: 'https://via.placeholder.com/600x400.png?text=Project+Four',
  //   link: '#',
  // },
];

// --- 2. Styled Components ---
// ... existing styled components ...
const ProjectsContainer = styled.section`
  padding: 4rem 2rem; /* Add padding around the gallery */
  max-width: 1200px;
  margin: 0 auto; /* Center the gallery */
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: ${props => props.theme.colors.primary};
`;

const GalleryGrid = styled.div`
  display: grid;
  /* Create responsive columns: 1 column on small screens, 2 on medium, 3 on large */
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem; /* Space between grid items */
`;

const ProjectCard = styled.div`
  background: ${props => props.theme.colors.secondary}; /* Light background for card */
  border-radius: 8px;
  overflow: hidden; /* Ensures image corners are rounded */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px; /* Fixed height for images */
  object-fit: cover; /* Cover the area, cropping if necessary */
  display: block;
  background-color: #eee; /* Add a light background color while image loads */
`;

const ProjectInfo = styled.div`
  padding: 1.5rem;
  flex-grow: 1; /* Allows this section to grow and push footer down */
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.colors.primary};
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: ${props => props.theme.colors.primary}cc; /* Slightly transparent primary color */
  line-height: 1.6;
  flex-grow: 1; /* Allows description to take available space */
  margin-bottom: 1rem;
`;

const ProjectLink = styled.a`
  display: inline-block;
  margin-top: auto; /* Pushes the link to the bottom */
  padding: 0.5rem 1rem;
  background-color: ${props => props.theme.colors.accent};
  color: white;
  text-decoration: none;
  border-radius: 4px;
  text-align: center;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${props => props.theme.colors.primary};
  }
`;


// --- 3. Projects Component ---
// ... existing Projects component code ...
function Projects() {
  return (
    <ProjectsContainer>
      <PageTitle>My Work</PageTitle>
      <GalleryGrid>
        {projectsData.map((project) => (
          < ProjectCard key={project.id} >
            < ProjectImage src={project.imageUrl} alt={project.title} />
            <ProjectInfo>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              < ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </ProjectLink>
            </ProjectInfo>
          </ProjectCard>
        ))}
      </GalleryGrid>
    </ProjectsContainer>
  );
}

export default Projects;
