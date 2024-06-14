import React from 'react';
import Avatar from 'react-avatar';

function ChatMessage({ item }) {
  return (
    <div className='flex items-start space-x-2 py-2'>
      <Avatar
        src="https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=600"
        className="cursor-pointer"
        size={25}
        round={true}
      />
      <div>
        <h1 className='font-bold text-sm'>{item.name}</h1>
        <p className='text-sm'>{item.message}</p>
      </div>
    </div>
  );
}

export default ChatMessage;



// er import React from 'react';
// import Avatar from 'react-avatar';

// function ChatMessage({ item }) {
//   return (
//     <div className='flex items-start space-x-2 py-2'>
//       <Avatar
//         src="https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=600"
//         className="cursor-pointer"
//         size={25}
//         round={true}
//       />
//       <div>
//         <h1 className='font-bold text-sm'>{item.name}</h1>
//         <p className='text-sm'>{item.message}</p>
//       </div>
//     </div>
//   );
// }

// export default ChatMessage;

// 1import React from 'react';
// import Avatar from 'react-avatar';

// function ChatMessege({ item }) {
//   return (
//     <div className='flex items-center'>
//       <div>
//         <Avatar
//           src="https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=600"
//           className="cursor-pointer"
//           size={25}
//           round={true}
//         />
//       </div>
//       <div className="flex items-center">
//         <h1 className='ml-2 font-bold text-sm'>{item.name}</h1>
//         <p className='ml-2 py-2 text-sm'>{item.message}</p>
//       </div>
//     </div>
//   );
// }

// export default ChatMessege;



// 22import React from 'react';
// import Avatar from 'react-avatar';

// function ChatMessege({ item }) {
//   return (
//     <div className='flex items-center'>
//       <div>
//         <Avatar
//           src="https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=600"
//           className="cursor-pointer"
//           size={25}
//           round={true}
//         />
//       </div>
//       <div className="flex items-center">
//         <h1 className='ml-2 font-bold text-sm'>{item.name}</h1>
//         <p className='ml-2 py-2 text-sm'>{item.message}</p>
//       </div>
//     </div>
//   );
// }

// export default ChatMessege;











// // ChatMessege.jsx
// import React from 'react';
// import Avatar from 'react-avatar';

// function ChatMessege({ item }) {
//   return (
//     <div className='flex items-center'>
//       <div>
//         <Avatar
//           src="https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=600"
//           className="cursor-pointer"
//           size={25}
//           round={true}
//         />
//       </div>
//       <div className="flex items-center">
//         <h1 className='ml-2 font-bold text-sm'>{item.name}</h1>
//         <p className='ml-2 py-2 text-sm'>{item.message}</p>
//       </div>
//     </div>
//   );
// }

// export default ChatMessege;


// import React from 'react'
// import Avatar from 'react-avatar'

// function ChatMessege({item}) {
//   return (
//     <div className='flex items-center'>
//         <div className="">
//           <Avatar
//               src="https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=600"
//               className="cursor-pointer"
//               size={25}
//               round={true}
//             />
//         </div>
//         <div className="flex items-center">
//             <h1 className='ml-2 font-bold  text-sm'>{item.name}</h1>
//             <p className='ml-2 py-2 text-sm'>{item.messege}</p>
//         </div>
//     </div>
//   )
// }

// export default ChatMessege