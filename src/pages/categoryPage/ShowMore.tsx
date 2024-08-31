// import { useEffect, useRef, useState } from "react";
// import { Button } from "react-bootstrap";

// const initialParagraphStyles: React.CSSProperties = {
//   WebkitLineClamp: 2,
//   WebkitBoxOrient: 'vertical',
//   overflow: 'hidden',
//   textOverflow: 'ellipsis',
//   display: '-webkit-box',
//   lineHeight: 1.5,
//   transition: 'height 0.5s ease, max-height 0.5s ease',
//   fontSize: '1rem',
// };

// export default function ShowMore() {
//   const [showMore, setShowMore] = useState(false);
//   const [showButton, setShowButton] = useState(false);
//   const [height, setHeight] = useState<string | undefined>(undefined);
//   const ref = useRef<HTMLParagraphElement>(null);

//   useEffect(() => {
//     if (ref.current) {
//       setHeight(`${ref.current.scrollHeight}px`);
//       setShowButton(ref.current.scrollHeight !== ref.current.clientHeight);
//     }
//   }, []);

//   const toggleShowMore = () => {
//     setShowMore(!showMore);
//     if (ref.current) {
//       if (!showMore) {
//         ref.current.style.height = `${ref.current.scrollHeight}px`;
//       } else {
//         ref.current.style.height = '';
//       }
//     }
//   };

//   return (
//     <div className="mt-5">
//       <p
//         ref={ref}
//         style={{
//           ...initialParagraphStyles,
//           height: showMore ? height : '3em', 
//           maxHeight: showMore ? height : '3em' 
//         }}
//       >
//        Vücudun tüm fonksiyonlarını sağlıklı bir şekilde yerine getirmesini sağlayan temel yapı taşlarından 
//        biri proteindir. <em>Protein</em>  kısaca, bir veya daha fazla amino asit artık  Vücudun tüm fonksiyonlarını sağlıklı bir şekilde yerine getirmesini sağlayan temel yapı taşlarından 
//        biri proteindir. Protein kısaca, bir veya daha fazla amino asit artık  Vücudun tüm fonksiyonlarını sağlıklı bir şekilde yerine getirmesini sağlayan temel yapı taşlarından 
//        biri proteindir. Protein kısaca, bir veya daha fazla amino asit artık  Vücudun tüm fonksiyonlarını sağlıklı bir şekilde yerine getirmesini sağlayan temel yapı taşlarından 
//        biri proteindir. Protein kısaca, bir veya daha fazla amino asit artık
       
//       </p>
//       {showButton && (
//         <Button className="d-inline"  variant="link" onClick={toggleShowMore}>
//           {showMore ? "Daha az göster..." : "Daha Fazla Göster..."}
//         </Button>
//       )}
//     </div>
//   );
// }

import { Component } from 'react';
import ReactShowMoreText from 'react-show-more-text';
import './categoryPage.css';
class Foo extends Component {
  executeOnClick(isExpanded: boolean) {
    console.log(isExpanded);
  }

  render() {
    return (
      <div className='text-center'>
        <ReactShowMoreText
          lines={1}
          more="Daha fazla göster..."
          less="Daha az göster..."
          className="content-css"
          anchorClass="show-more-less-clickable"
          onClick={this.executeOnClick.bind(this)} // Bind the context of `this`
          expanded={false}
          width={1200}
          truncatedEndingComponent={"... "}
          
        >
          Lorem ipsum dolor sit amet, consectetur{" "}
          <a
            href="https://www.yahoo.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            yahoo.com
          </a>
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation.
        </ReactShowMoreText>
      </div>
    );
  }
}

export default Foo;

