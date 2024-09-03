// "use client";
// import { useEffect, useState, useRef } from "react";

// const useIsHorizontallyInMiddle = () => {
//   const [isInMiddle, setIsInMiddle] = useState(false);
//   const ref = useRef<HTMLDivElement | null>(null); // Explicitly type the ref

//   const checkIfInMiddle = () => {
//     if (ref.current) {
//       const { left, right } = ref.current.getBoundingClientRect();
//       const viewportWidth = window.innerWidth;
//       const middle = viewportWidth / 2;
//       const isMiddle = left <= middle && right >= middle;
//       setIsInMiddle(isMiddle);
//     }
//   };

//   useEffect(() => {
//     checkIfInMiddle(); // Initial check
//     window.addEventListener("scroll", checkIfInMiddle);
//     window.addEventListener("resize", checkIfInMiddle);

//     return () => {
//       window.removeEventListener("scroll", checkIfInMiddle);
//       window.removeEventListener("resize", checkIfInMiddle);
//     };
//   }, []);

//   return [ref, isInMiddle] as const;
// };

// const MyComponent = () => {
//   const [ref, isInMiddle] = useIsHorizontallyInMiddle();

//   return (
//     <div
//       className=""
//       ref={ref}
//       style={{
//         width: 'full',
//         height: "300px",

//       }}
//     >
//       <div className="w-[100px] h-[100px] bg-red-400">
//         {isInMiddle ? "In the Middle!" : "Not in the Middle!"}
//       </div>

//     </div>
//   );
// };

// export default MyComponent;
