import React from 'react';



const Content = (props) => {
  return (
    <div className="down">
        <img src={props.image} alt="iphone-6" />
        <div>
          <h5>{props.date}</h5>
          <h2>{props.heading}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos aliquam aspernatur voluptatem totam, rem eum
            repellendus facilis perferendis cum deleniti dolorem sint
            ratione laudantium qui.
          </p>
        </div>
      </div>
  );
}

export default Content;
