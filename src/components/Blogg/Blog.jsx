import { useEffect } from 'react';
import './Blog.css';

const Blog = () => {
  useEffect(() => {
    // ScrollReveal animations
    if (window.ScrollReveal) {
      const scrollRevealOption = {
        distance: "50px",
        origin: "bottom",
        duration: 1000,
      };

      window.ScrollReveal().reveal(".blog__card", {
        duration: 1000,
        interval: 500,
      });

      window.ScrollReveal().reveal(".blog__btn", {
        ...scrollRevealOption,
        delay: 2000,
      });
    }
  }, []);

  return (
    <section className="section__container blog__container" id="blog">
      <h2 className="section__header">Blog</h2>
      <div className="blog__grid">
        <div className="blog__card">
          <h5>3.11.2026</h5>
          <h4>5 Tips for Capturing Stunning Portraits</h4>
          <p>
            Discover simple yet powerful techniques to enhance your portrait
            photography, from mastering lighting to connecting with your subject
            for authentic shots.
          </p>
        </div>
        <div className="blog__card">
          <h5>10.01.2025</h5>
          <h4>The Art of Visual Storytelling in Filmmaking</h4>
          <p>
            Explore how to craft compelling narratives through cinematography,
            sound design, and editing that leave a lasting impact on your
            audience.
          </p>
        </div>
        <div className="blog__card">
          <h5>15.04.2025</h5>
          <h4>Essential Gear Every Photographer Needs</h4>
          <p>
            A comprehensive guide to must-have equipment, from cameras to lenses
            and accessories, for both beginners and seasoned photographers.
          </p>
        </div>
        <div className="blog__card">
          <h5>25.06.2024</h5>
          <h4>Create Cinematic Videos with Minimal Gear</h4>
          <p>
            Practical advice for achieving the professional-quality videos
            without breaking your bank, perfect for new and aspiring filmmakers
            on a budget.
          </p>
        </div>
      </div>
      <div className="blog__btn">
        <button className="btn">VIEW ALL BLOGS</button>
      </div>
    </section>
  );
};

export default Blog;
