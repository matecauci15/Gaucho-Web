import React, { useEffect } from 'react';
import { TechBanner } from '../Components/TechBanner.tsx';
import { About } from './About.tsx';
// import { HomePage } from './HomePage.tsx';
// import { TechnologiesSection } from '../Components/TechnologiesSection.tsx';
import { ProjectsPage } from './Projects.tsx';
// import { BlogSection } from '../Components/Blog.tsx/BlogSection.tsx';
import { Contact } from './Contact.tsx';

export const MainPage: React.FC = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            window.history.replaceState(null, '', `/${id}`);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <section id="banner">
        <TechBanner />
      </section>
      <section id="about">
        <About />
      </section>
      {/* <section id="home">
        <HomePage />
      </section>
      <section id="technologies">
        <TechnologiesSection />
      </section> */}
      <section id="projects">
        <ProjectsPage />
      </section>
      {/* <section id="blog">
        <BlogSection />
      </section> */}
      <section id="contact">
        <Contact />
      </section>
    </>
  );
};
