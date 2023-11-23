
// import './App.css';

// import React, { useState } from 'react';

// const App = () => {
//   // Step 1: Declare an array of objects with id and image URL
//   const images = [
//     { id: 1, url: 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg' },
//     { id: 2, url: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D' },
//     { id: 3, url: 'https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=' },
//     // Add more images as needed
//   ];

//   // Step 2: Use React state to store the index of the active image
//   const [activeIndex, setActiveIndex] = useState(0);

//   // Step 3: Functions for next/previous functionality and updating active image index
//   const goToNext = () => {
//     setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const goToPrevious = () => {
//     setActiveIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   const goToImage = (index) => {
//     setActiveIndex(index);
//   };

//   return (
//     <div>
//       {/* Display the current image */}
//       <img
//         src={images[activeIndex].url}
//         alt={`${images[activeIndex].id}`}
//         style={{ maxWidth: '200px' }}
//       />

//       {/* Navigation buttons */}
//       <button onClick={goToPrevious}>Previous</button>
//       <button onClick={goToNext}>Next</button>

//       {/* Option circles */}
//       <div style={{ marginTop: '10px' }}>
//         {images.map((image, index) => (
//           <span
//             key={index}
//             onClick={() => goToImage(index)}
//             style={{
//               display: 'inline-block',
//               width: '10px',
//               height: '10px',
//               borderRadius: '50%',
//               backgroundColor: index === activeIndex ? 'blue' : 'gray',
//               margin: '0 5px',
//               cursor: 'pointer',
//             }}
//           ></span>
//         ))}
//       </div>
//     </div>
//   );
// };

import React ,{ useState} from 'react' 
const App =()=>{
  const images = [
    { id: 1, url: 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg' },
    { id: 2, url: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D' },
    { id: 3, url: 'https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=' },
    // Add more images as needed
  ];

  const [activeimage, imageindex] = useState (0)

  const perviousbutton =()=>{
    imageindex ((index)=>
      index===0? images.length-1:index-1
        )
  }



  const nextbutton =(()=>{
    imageindex((index)=>
      (index+1)% images.length
      
    )
  })

    const goToImage = (index) => {
      imageindex(index);
  };


  return <>\
  <div>
<img src={images[activeimage].url} alt={`${images[activeimage].id}`} style={{maxWidth:"400px"}} />
<button onClick={perviousbutton}>pervious</button>
<button onClick={nextbutton}>next</button>

  </div>

  <div>

  <div style={{ marginTop: '10px' }}>
        {images.map((image, index) => (
           <span
             key={index}
             onClick={() => goToImage(index)}
             style={{
               display: 'inline-block',
               width: '30px',
               height: '30px',
               borderRadius: '50%',
               backgroundColor: index === activeimage ? 'blue' : 'gray',
               margin: '0 5px',
               cursor: 'pointer',
             }}
           ></span>
         ))}
       </div>
  </div>
  </>

}


export default App;
