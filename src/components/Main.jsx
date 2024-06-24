import React, { useState } from 'react';
import Content from './Content';
import iphone from './images/1.jpg';
import laptop from './images/2.jpg';
import camera from './images/4.jpg';

const Main = () => {
  const [reviews] = useState([
    { image: iphone, date: "January 23, 2018", heading: 'Iphone X Review' },
    { image: laptop, date: "January 22, 2018", heading: 'The Best Laptops 2018' },
    { image: camera, date: "January 18, 2018", heading: 'Honest Camera Review' }
  ]);

  return (
    <article>
      <h2>Last Product Reviews</h2>
      <p id="art-p">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
        veritatis sunt consequuntur, eum facilis aspernatur dolor eligendi
        numquam.
      </p>
      {reviews.map((review, index) => (
        <Content
          key={index}
          image={review.image}
          date={review.date}
          heading={review.heading}
        />
      ))}
    </article>
  );
}

export default Main;
