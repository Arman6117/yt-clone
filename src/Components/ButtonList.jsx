import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCategory } from '../utils/appSlice';

function ButtonList() {
    const buttonList = [
        "All", "Trending", "JavaScript", "Java", "Music", "Gaming", "Vlogs", "Coding", "Live", "Songs", "Comedy", "Cricket", "Shorts", "Computer Programming"
    ];
    const [active, setActive] = useState("All");
    const dispatch = useDispatch(); 

    const videoByTag = (tag) => {
        if (active !== tag) {
            dispatch(setCategory(tag));
            setActive(tag);
        }
    };

    return (
        <div className='flex py-3 overflow-x-scroll no-scrollbar mt-10'>
            {buttonList.map((buttonName, index) => (
                <button 
                    onClick={() => videoByTag(buttonName)}
                    key={index} 
                    className={` ${active === buttonName ? "bg-slate-800 text-white" : "bg-gray-200"} px-4 py-1 rounded-lg font-medium mx-2 cursor-pointer whitespace-nowrap`}
                >
                    {buttonName}
                </button>
            ))}
        </div>
    );
}

export default ButtonList;



// 1 import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { setCategory } from '../utils/appSlice';

// function ButtonList() {
//     const buttonList = [
//         "All", "Trending", "JavaScript", "Java", "Music", "Gaming", "Vlogs", "Coding", "Live", "Songs", "Comedy", "Cricket", "Shorts", "Computer Programming"
//     ];
//     const [active, setActive] = useState("All");
//     const dispatch = useDispatch(); 

//     const videoByTag = (tag) => {
//         if (active !== tag) {
//             dispatch(setCategory(tag));
//             setActive(tag); // Move setActive inside the if statement to only update when the tag changes
//         }
//     };

//     return (
//         <div className='flex py-3 overflow-x-scroll no-scrollbar mt-10'>
//             {buttonList.map((buttonName, index) => (
//                 <button 
//                     onClick={() => videoByTag(buttonName)}
//                     key={index} 
//                     className={` ${active === buttonName ? "bg-slate-800 text-white" : "bg-gray-200"} px-4 py-1 rounded-lg font-medium mx-2 cursor-pointer whitespace-nowrap`}
//                 >
//                     {buttonName}
//                 </button>
//             ))}
//         </div>
//     );
// }

// export default ButtonList;








// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { setCategory } from '../utils/appSlice';

// function ButtonList() {
//     const buttonList = [
//         "All", "Trending", "JavaScript", "Java", "Music", "Gaming", "Vlogs", "Coding", "Live", "Songs", "Comedy", "Cricket", "Shorts", "Computer Programming"
//     ];
//     const [active, setActive] = useState("All");
//     const dispatch = useDispatch(); 

//     const videoByTag = (tag) => {
//         if (active !== tag) {
//             dispatch(setCategory(tag));
//         }
//         setActive(tag);
//     };

//     return (
//         <div className='flex py-3 overflow-x-scroll no-scrollbar mt-10'>
//             {buttonList.map((buttonName, index) => (
//                 <button 
//                     onClick={() => { videoByTag(buttonName) }}
//                     key={index} 
//                     className={` ${active === buttonName ? "bg-slate-800 text-white" : "bg-gray-200"} px-4 py-1 rounded-lg font-medium mx-2 cursor-pointer whitespace-nowrap`}
//                 >
//                     {buttonName}
//                 </button>
//             ))}
//         </div>
//     );
// }

// export default ButtonList;


// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { setCategory } from '../utils/appSlice';

// function ButtonList() {
//     const buttonList = [
//         "All", "Trending", "JavaScript", "Java", "Music", "Gaming", "Vlogs", "Coding", "Live", "Songs" , "Comedy", "Cricket", "Shorts", "Computer Programming"
//     ];
//     const[active, setActive] = useState("All");
//     const dispatch = useDispatch(); 

//     const videoByTag = (tag) => {
//      if (active === tag){
//         dispatch(setCategory(tag));
//         setActive(tag);
//      }
        
//     }
//     return (
//         <div className=' flex py-3 overflow-x-scroll no-srollbar mt-10 '>
//             {buttonList.map((buttonName, index) => (
//                 <button 
//                     onClick={() => {videoByTag(buttonName)}}
//                     key={index} 
//                     className={` ${active === buttonName ? "bg-slate-800 text-white " :"bg-gray-200" } px-4 py-1 rounded-lg font-medium mx-2 cursor-pointer whitespace-nowrap`}
//                 >
//                     {buttonName}
//                 </button>
//             ))}
//         </div>
//     );
// }

// export default ButtonList;
