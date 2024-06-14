import React, { useEffect } from 'react';
import axios from 'axios';
import { YOUTUBE_VIDEO_API, API_KEY } from '../Constant/Youtube';
import VideoCards from './VideoCards';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setHomeVideo } from '../utils/appSlice';

function VideoContainer() {
  const { video, category } = useSelector((store) => store.app);
  const dispatch = useDispatch();

  const fetchingYoutubeVideo = async () => {
    try {
      const res = await axios.get(YOUTUBE_VIDEO_API, {
        params: {
          part: 'snippet',
          chart: 'mostPopular',
          key: API_KEY,
          maxResults: 50
        }
      });
      dispatch(setHomeVideo(res.data.items || []));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchVideoByCategory = async () => {
    try {
      const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${category}&type=video&key=${API_KEY}`);
      dispatch(setHomeVideo(res.data.items || []));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (category === "All") {
      fetchingYoutubeVideo();
    } else {
      fetchVideoByCategory();
    }
  }, [category]);

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 p-4'>
      {video.length > 0 ? (
        video.map(item => (
          <Link to={`/watch?v=${typeof item.id === 'object' ? item.id.videoId : item.id}`} key={typeof item.id === 'object' ? item.id.videoId : item.id}>
            <VideoCards item={item} />
          </Link>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default VideoContainer;



// best one import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { YOUTUBE_VIDEO_API, API_KEY } from '../Constant/Youtube'; // Ensure these are correctly defined in a config file
// import VideoCards from './VideoCards';
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { setHomeVideo } from '../utils/appSlice';

// function VideoContainer() {
//   const { video, category } = useSelector((store) => store.app);
//   const dispatch = useDispatch();

//   const fetchingYoutubeVideo = async () => {
//     try {
//       const res = await axios.get(YOUTUBE_VIDEO_API, {
//         params: {
//           part: 'snippet',
//           chart: 'mostPopular',
//           key: API_KEY,
//           maxResults: 50
//         }
//       });
//       dispatch(setHomeVideo(res.data.items || []));
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const fetchVideoByCategory = async () => {
//     try {
//       const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${category}&type=video&key=${API_KEY}`);
//       dispatch(setHomeVideo(res.data.items || []));
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     if (category === "All") {
//       fetchingYoutubeVideo();
//     } else {
//       fetchVideoByCategory();
//     }
//   }, [category]); // Ensure the correct dependency is used

//   return (
//     <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4'>
//       {video.length > 0 ? (
//         video.map(item => (
//           <Link to={`/watch?v=${typeof item.id === 'object' ? item.id.videoId : item.id}`} key={typeof item.id === 'object' ? item.id.videoId : item.id}>
//             <VideoCards item={item} />
//           </Link>
//         ))
//       ) : (
//         <p>Loading...</p> // You can customize this as needed
//       )}
//     </div>
//   );
// }

// export default VideoContainer;


// 1 import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { YOUTUBE_VIDEO_API, API_KEY } from '../Constant/Youtube'; // Ensure these are correctly defined in a config file
// import VideoCards from './VideoCards';
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { setHomeVideo } from '../utils/appSlice';

// function VideoContainer() {
//   const { video, category } = useSelector((store) => store.app);
//   const dispatch = useDispatch();

//   const fetchingYoutubeVideo = async () => {
//     try {
//       const res = await axios.get(YOUTUBE_VIDEO_API, {
//         params: {
//           part: 'snippet',
//           chart: 'mostPopular',
//           key: API_KEY,
//           maxResults: 50
//         }
//       });
//       dispatch(setHomeVideo(res.data.items || []));
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const fetchVideoByCategory = async () => {
//     try {
//       const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${category}&type=video&key=${API_KEY}`);
//       dispatch(setHomeVideo(res.data.items || []));
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     if (category === "All") {
//       fetchingYoutubeVideo();
//     } else {
//       fetchVideoByCategory();
//     }
//   }, [category]); // Ensure the correct dependency is used

//   return (
//     <div className='grid grid-cols-4 gap-4'>
//       {video.length > 0 ? (
//         video.map(item => (
//           <Link to={`/watch?v=${typeof item.id === 'object' ? item.id.videoId : item.id}`} key={typeof item.id === 'object' ? item.id.videoId : item.id}>
//             <VideoCards item={item} />
//           </Link>
//         ))
//       ) : (
//         <p>Loading...</p> // You can customize this as needed
//       )}
//     </div>
//   );
// }

// export default VideoContainer;




// import React, { useEffect, useState } from 'react';
// import axios, { Axios } from 'axios';
// import { YOUTUBE_VIDEO_API, API_KEY } from '../Constant/Youtube'; // Ensure these are correctly defined in a config file
// import VideoCards from './VideoCards';
// import { Link } from "react-router-dom";
// import {useDispatch,  useSelector} from "react-redux"
// import { setHomeVideo } from '../utils/appSlice';

// function VideoContainer() {
//  const {video, category }= useSelector((store) => store.app.video);
//   const useDispatch = useDispatch();

//   const fetchingYoutubeVideo = async () => {
//     try {
//       const res = await axios.get(YOUTUBE_VIDEO_API, {
//         params: {
//           part: 'snippet',
//           chart: 'mostPopular',
//           key: API_KEY,
//           maxResults: 50
//         }
//       });
//      // setVideos(res.data.items || []); // Ensure it defaults to an empty array if items is undefined
//      dispatch(setHomeVideo(res.data.items || []))
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const fetchvideoByCategory = async () => {
//     try {
//       const res = await Axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${category}&type=video&key=${API_KEY}`);
//       //setHomeVideo(res.data.items);
//       dispatch(setHomeVideo(res.data.items || []))
//     } catch (error) {
//        console.log(error);
      
//     }
//   }

//   useEffect(() => {
//     if(category == "All"){
//       fetchvideoByCategory();
//     }else{
      
//       fetchingYoutubeVideo();
//     }
//   },[Category);

//   return (
//     <div className='grid grid-cols-4 gap-4'>
//       {video.length > 0 ? (
//         video.map(item => (
//           <Link to={`/watch?v=${typeof item.id === 'object' ? item.id.videoId : item.id}`} key={typeof item.id === 'object' ? item.id.videoId : item.id} >
//             <VideoCards item={item} />
//           </Link>
        
//         ))
//       ) : (
//         <p>Loading...</p> // You can customize this as needed
//       )}
//     </div>
//   );
// }

// export default VideoContainer;









