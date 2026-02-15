// import './Gallery.css';

// const Gallery = () => {
//   return (
//     <section className="section__container portfolio__container" id="gallery">
//       <h2 className="section__header">Gallery</h2>
//       <div className="portfolio__grid">
//         <div>
//           <img src="/assets/portfolio-1.png" alt="gallery image 1" />
//           <img src="/assets/portfolio-2.png" alt="gallery image 2" />
//           <img src="/assets/portfolio-3.png" alt="gallery image 3" />
//         </div>
//         <div>
//           <img src="/assets/portfolio-4.png" alt="gallery image 4" />
//           <img src="/assets/portfolio-5.png" alt="gallery image 5" />
//         </div>
//         <div>
//           <img src="/assets/portfolio-6.png" alt="gallery image 6" />
//           <img src="/assets/portfolio-7.png" alt="gallery image 7" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Gallery;

import { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleView = () => {
    setShowAll(!showAll);
  };

  // All portfolio images
  const allImages = [
    '/assets/portfolio-1.png',
    '/assets/portfolio-2.png',
    '/assets/portfolio-3.png',
    '/assets/portfolio-4.png',
    '/assets/portfolio-5.png',
    '/assets/portfolio-6.png',
    '/assets/portfolio-7.png'
  ];

  // Show first 7 images initially, or all if showAll is true
  const displayedImages = showAll ? allImages : allImages.slice(0, 7);

  return (
    <section className="section__container portfolio__container" id="portfolio">
      <h2 className="section__header">Gallery</h2>
      <div className={`portfolio__grid ${showAll ? 'expanded' : ''}`}>
        <div>
          {displayedImages.slice(0, 3).map((img, index) => (
            <img key={index} src={img} alt="portfolio" />
          ))}
        </div>
        <div>
          {displayedImages.slice(3, 5).map((img, index) => (
            <img key={index + 3} src={img} alt="portfolio" />
          ))}
        </div>
        <div>
          {displayedImages.slice(5, 7).map((img, index) => (
            <img key={index + 5} src={img} alt="portfolio" />
          ))}
        </div>
      </div>
      
      <div className="portfolio__btn__container">
        <button className="btn portfolio__toggle__btn" onClick={toggleView}>
          {showAll ? 'SHOW LESS' : 'VIEW MORE'}
        </button>
      </div>
    </section>
  );
};

export default Gallery;

