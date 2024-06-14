// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Avatar from 'react-avatar';
// import { API_KEY } from '../Constant/Youtube';

// const VideoCards = ({ item }) => {
//   const [ytIcon, setIcon] = useState("");

//   const getYoutubeChannelname = async () => {
//     try {
//       const res = await axios.get('https://youtube.googleapis.com/youtube/v3/channels', {
//         params: {
//           part: 'snippet',
//           id: item.snippet.channelId,
//           key: API_KEY
//         }
//       });
//       setIcon(res.data.items[0].snippet.thumbnails.high.url);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getYoutubeChannelname();
//   }, [item.snippet.channelId]);

//   return (
//     <div className='w-full md:w-1/2 lg:w-1/4 p-2'>
//       <div className='w-full bg-white rounded-xl overflow-hidden shadow-md'>
//         <img className='w-full h-40 object-cover object-center rounded-t-xl' src={item.snippet.thumbnails.medium.url} alt='ytvideo' />
//         <div className="p-4">
//           <div className="flex items-center mb-2">
//             <Avatar className='cursor-pointer' src={ytIcon} size={35} round={true} />
//             <div className="ml-2">
//               <h1 className='font-bold text-sm md:text-base'>{item.snippet.title}</h1>
//               <p className='text-xs md:text-sm text-gray-500'>{item.snippet.channelTitle}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoCards;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Avatar from 'react-avatar';
import { API_KEY } from '../Constant/Youtube';

const VideoCards = ({ item }) => {
  const [ytIcon, setIcon] = useState("");

  const getYoutubeChannelname = async () => {
    try {
      const res = await axios.get('https://youtube.googleapis.com/youtube/v3/channels', {
        params: {
          part: 'snippet',
          id: item.snippet.channelId,
          key: API_KEY
        }
      });
      setIcon(res.data.items[0].snippet.thumbnails.high.url);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getYoutubeChannelname();
  }, [item.snippet.channelId]);

  return (
    <div className='w-full cursor-pointer my-2'>
      <img className='w-full rounded-xl' src={item.snippet.thumbnails.medium.url} alt='ytvideo' />
      <div className="flex mt-2">
        <Avatar className='cursor-pointer' src={ytIcon} size={35} round={true} />
        <div className="ml-2">
          <h1 className='font-bold text-sm md:text-base'>{item.snippet.title}</h1>
          <p className='text-xs md:text-sm text-gray-500'>{item.snippet.channelTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCards;



// 2 import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Avatar from 'react-avatar';
// import { API_KEY } from '../Constant/Youtube'; // Ensure the path is correct

// const VideoCards = ({ item }) => {
//   const [ytIcon, setIcon] = useState("");

//   const getYoutubeChannelname = async () => {
//     try {
//       const res = await axios.get('https://youtube.googleapis.com/youtube/v3/channels', {
//         params: {
//           part: 'snippet',
//           id: item.snippet.channelId,
//           key: API_KEY
//         }
//       });
//       setIcon(res.data.items[0].snippet.thumbnails.high.url);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getYoutubeChannelname();
//   }, [item.snippet.channelId]);

//   return (
//     <div className='w-full cursor-pointer my-2'>
//       <img className='w-full rounded-xl' src={item.snippet.thumbnails.medium.url} alt='ytvideo' />
//       <div className="flex mt-2">
//         <Avatar className='cursor-pointer' src={ytIcon} size={35} round={true} />
//         <div className="ml-2">
//           <h1 className='font-bold text-sm md:text-base'>{item.snippet.title}</h1>
//           <p className='text-xs md:text-sm text-gray-500'>{item.snippet.channelTitle}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoCards;



// 1 import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Avatar from 'react-avatar';
// import { API_KEY } from '../Constant/Youtube'; // Ensure the path is correct

// const VideoCards = ({ item }) => {
//   const [ytIcon, setIcon] = useState("");

//   const getYoutubeChannelname = async () => {
//     try {
//       const res = await axios.get('https://youtube.googleapis.com/youtube/v3/channels', {
//         params: {
//           part: 'snippet',
//           id: item.snippet.channelId,
//           key: API_KEY
//         }
//       });
//       setIcon(res.data.items[0].snippet.thumbnails.high.url);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getYoutubeChannelname();
//   }, [item.snippet.channelId]);

//   return (
//     <div className='w-94 cursor-pointer my-2'>
//       <img className='w-full rounded-xl' src={item.snippet.thumbnails.medium.url} alt='ytvideo' />
//       <div className="flex mt-2">
//         <Avatar className='cursor-pointer' src={ytIcon} size={35} round={true} />
//         <div className="ml-2">
//           <h1 className='font-bold'>{item.snippet.title}</h1>
//           <p className='text-sm text-gray-500'>{item.snippet.channelTitle}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoCards;







// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Avatar from 'react-avatar';
// import { API_KEY } from '../Constant/Youtube'; // Ensure the path is correct

// const VideoCards = ({ item }) => {
//   const [ytIcon, setIcon] = useState("");

//   const getYoutubeChannelname = async () => {
//     try {
//       const res = await axios.get('https://youtube.googleapis.com/youtube/v3/channels', {
//         params: {
//           part: 'snippet',
//           id: item.snippet.channelId,
//           key: API_KEY
//         }
//       });
//       setIcon(res.data.items[0].snippet.thumbnails.high.url);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getYoutubeChannelname();
//   }, [item.snippet.channelId]);

//   return (
//     <div className='w-94 cursor-pointer my-2'>
//       <img className='w-full rounded-xl' src={item.snippet.thumbnails.medium.url} alt='ytvideo' />
//       <div className="flex mt-2">
//         <Avatar className='cursor-pointer' src={ytIcon} size={35} round={true} />
//         <div className="ml-2">
//           <h1 className='font-bold'>{item.snippet.title}</h1>
//           <p className='text-sm text-gray-500'>{item.snippet.channelTitle}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoCards;






// import React, { useEffect, useState } from 'react';
// import Avatar from 'react-avatar';
// import API_KEY from '../Constant/Youtube';

// const VideoCards = ({item}) => {
//     const [ytIcon, setIcon] = useState("");
//    const getYoutubeChannelname = async () => {
//         try {
//             const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${item.snippet.channelId}&key=${API_KEY}`);
//             setIcon(res.data.items[0].snippet.thumbnails.high.url);
//         } catch (error) {
//             console.log(error);
//         }
//     }
//     useEffect(() => {
//         getYoutubeChannelname();     
//     },[])
//   return (
//     <div className='w-94 cursor-pointer my-2'>
//       <img className='w-full rounded-xl' src={item.snippet.thumbnails.medium.url} alt='ytvideo' />
//       <div className="flex mt-2">
//         <Avatar className='cursor-pointer' src={setIcon} size={35} round={true} />
//         <div className="ml-2">
//           <h1 className='font-bold'>{item.snippet.title}</h1>
//           <p className='text-sm text-gray-500'>{item.snippet.channelTitle}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoCards;





// import React from 'react';
// import Avatar from 'react-avatar';

// function VideoCards({ item })  {
//   return (
//     <div   className='w-94 cursor-pointer my-2'>
//         <img className='w-full rounded-xl' src='https://imgs.search.brave.com/R3jwusf6nWO5PqNY8UZkLrtj_N3AkFBLLFcjcWRTvk0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9kMWNz/YXJrejhvYmU5dS5j/bG91ZGZyb250Lm5l/dC9wb3N0ZXJwcmV2/aWV3cy9tYW4tZmly/ZS1tYXhpbWFsaXN0/LWNyZWF0aXZlLXlv/dXR1YmUtdGh1bWJu/YWktZGVzaWduLXRl/bXBsYXRlLWFiN2I0/NmU1YWVjMWM5ZDdm/YmI2YWVkMGVlZjg2/MDQ1LmpwZz90cz0x/NzE3MzU4NDIw' alt='ytvideo' />
        
//         <div className="flex mt-2">
//           <Avatar  className=' cursor-pointer' src='https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=600'  size={35} round={true}/>
//            <div className="ml-2">
//              <h1 className='font-bold'>how to make video by naved</h1>
//              <p className='text-sm text-gray-500'>Abdul Naved</p>
//            </div>
            
//         </div>

//     </div>
//   )
// }

// export default VideoCards