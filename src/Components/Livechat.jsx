import React, { useEffect } from "react";
//import ChatMessage from "./ChatMessage";
import ChatMessage from "./ChatMessege";
import { useDispatch, useSelector } from "react-redux";
import { setMessage } from '../utils/ChatSlice';
import { generateRandomMessage, generateRandomName } from "../utils/Helper";

const Livechat = () => {
  const messages = useSelector((state) => state.chat.messages);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(
        setMessage({
          name: generateRandomName(),
          message: generateRandomMessage(16),
        })
      );
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [dispatch]);

  return (
    <div className="h-full overflow-y-auto p-4">
      <div className="space-y-2">
        {messages.map((item, idx) => (
          <ChatMessage key={idx} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Livechat;



// error import React, { useEffect } from "react";
// //import ChatMessage from "./ChatMessage";
// import { useDispatch, useSelector } from "react-redux";
// import { setMessage } from '../utils/ChatSlice';
// import { generateRandomMessage, generateRandomName } from "../utils/Helper";

// const Livechat = () => {
//   const messages = useSelector((state) => state.chat.messages);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const timer = setInterval(() => {
//       dispatch(
//         setMessage({
//           name: generateRandomName(),
//           message: generateRandomMessage(16),
//         })
//       );
//     }, 1000);

//     return () => {
//       clearInterval(timer);
//     };
//   }, [dispatch]);

//   return (
//     <div className="h-full overflow-y-auto p-4">
//       <div className="space-y-2">
//         {messages.map((item, idx) => (
//           <ChatMessage key={idx} item={item} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Livechat;



// 1import React, { useEffect } from "react";
// import ChatMessege from "./ChatMessege";
// import { useDispatch, useSelector } from "react-redux";
// import { setMessage } from '../utils/ChatSlice';
// import { generateRandomMessage, generateRandomName } from "../utils/Helper";

// const Livechat = () => {
//   const messages = useSelector((state) => state.chat.messages);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const timer = setInterval(() => {
//       dispatch(
//         setMessage({
//           name: generateRandomName(),
//           message: generateRandomMessage(16),
//         })
//       );
//     }, 1000);

//     return () => {
//       clearInterval(timer);
//     };
//   }, [dispatch]);

//   return (
//     <div>
//       <div className="px-4 py-1">
//         {messages.map((item, idx) => (
//           <ChatMessege key={idx} item={item} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Livechat;


// 22// Livechat.jsx
// import React, { useEffect } from "react";
// import ChatMessege from "./ChatMessege";
// import { useDispatch, useSelector } from "react-redux";
// import { setMessage } from '../utils/ChatSlice'
// import { generateRandomMessage, generateRandomName } from "../utils/Helper";

// const Livechat = () => {
//   const messages = useSelector((state) => state.chat.messages);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const timer = setInterval(() => {
//       dispatch(
//         setMessage({
//           name: generateRandomName(),
//           message: generateRandomMessage(16),
//         })
//       );
//     }, 1000);

//     return () => {
//       clearInterval(timer);
//     };
//   });

//   return (
//     <div>
//       <div className="px-4 py-1">
//         {messages.map((item, idx) => (
//           <ChatMessege key={idx} item={item} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Livechat;




// import React, { useEffect } from "react";
// import ChatMessege from "./ChatMessege";
// import { useDispatch, useSelector } from "react-redux";
// import store from "../utils/Store";
// import { generateRandomMessage, generateRandomName } from "../utils/Helper";

// const Livechat = () => {
//   const message = useSelector((store) => store.chat.message);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     setInterval(() => {
//         const timer = setInterval(() => {
//             dispatch(
//                 setMessage({
//                   name: generateRandomName(),
//                   message: generateRandomMessage(16),
//                 })
//             );
//         })
      
//     }, 1000);

//     return(()=> {
//         clearInterval(timer);
//     })
//   });
//   return (
//     <div>
//       <div className="px-4 py-1">
//         {message.map((item, idx) => {
//           return <ChatMessege key={idx} item={item} />;
//         })}
//       </div>
//     </div>
//   );
// };

// export default Livechat;
