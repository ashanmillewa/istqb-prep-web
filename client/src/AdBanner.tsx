// import { useEffect } from "react";

// declare global {
//   interface Window {
//     adsbygoogle: unknown[];
//   }
// }

// const AdBanner = () => {
//   useEffect(() => {
//     try {
//       (window.adsbygoogle = window.adsbygoogle || []).push({});
//     } catch (err) {
//       console.error("AdSense error:", err);
//     }
//   }, []);

//   return (
//     <div className="w-full max-w-screen-lg mx-auto px-2 sm:px-4 my-6">
//       <ins
//         className="adsbygoogle"
//         style={{
//           display: "block",
//           width: "100%",
//           minHeight: "90px", // good mobile banner height
//         }}
//         data-ad-client="ca-pub-1408474758104461"
//         data-ad-slot="1234567890" // replace with your real ad slot ID
//         data-ad-format="auto"
//         data-full-width-responsive="true"
//       />
//     </div>
//   );
// };

// export default AdBanner;
import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }

  namespace JSX {
    interface IntrinsicElements {
      ins: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        className?: string;
        style?: React.CSSProperties;
        "data-ad-client": string;
        "data-ad-slot": string;
        "data-ad-format"?: string;
        "data-full-width-responsive"?: string;
      };
    }
  }
}

const AdBanner = () => {
  useEffect(() => {
    try {
      if (window.adsbygoogle) {
        window.adsbygoogle.push({});
      }
    } catch (err) {
      console.error("AdSense error:", err);
    }
  }, []);

  return (
    <div className="w-full max-w-screen-lg mx-auto px-2 sm:px-4 my-6">
      <ins
        className="adsbygoogle block"
        style={{ display: "block" }}
        data-ad-client="ca-pub-1408474758104461"
        data-ad-slot="6402845136"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default AdBanner;