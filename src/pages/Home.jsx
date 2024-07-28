// import React, {useEffect, useState} from 'react'
// import appwriteService from "../appwrite/config";
// import {Container, PostCard} from '../components'
// import authService from '../appwrite/auth';

// function Home() {
//     const [posts, setPosts] = useState([])
//     const currentUser = authService.getCurrentUser();



//     useEffect(() => {

//         console.log('Current User:', currentUser);

//         appwriteService.getPosts().then((posts) => {

//             console.log('Fetched Posts:', posts); 

//             if (posts) {
//                 // setPosts(posts.documents)
//                 const userPosts = posts.documents.filter(post => post.userId === currentUser.userId);
//                 setPosts(userPosts);
//             }
//         })
//     }, [currentUser])
    
//     if (!currentUser) {
//         return (
//             <div className="w-full py-8 mt-4 text-center">
//                 <Container>
//                     <div className="flex flex-wrap">
//                         <div className="p-2 w-full">
//                             <h1 className="text-2xl font-bold hover:text-gray-500">
//                                 Login to read posts
//                             </h1>
//                         </div>
//                     </div>
//                 </Container>
//             </div>
//         )
//     }
//     else{
//     return (
//         <div className='w-full py-8'>
//             <Container>
//                 <div className="flex justify-center flex-wrap  gap-x-4 gap-y-4  ">
//           {posts.map((post) => (
//             <div key={post.$id} className="flex   md:w-[30%] ">
//               <PostCard {...post} />
//             </div>
//           ))}
//         </div>
//             </Container>
//         </div>
//     )
// }
// }

// export default Home


import React, { useEffect, useState } from 'react';
import appwriteService from '../appwrite/config';
import { Container, PostCard } from '../components';
import authService from '../appwrite/auth';

function Home() {
    const [posts, setPosts] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        authService.getCurrentUser().then((user) => {
            console.log('Fetched Current User:', user);
            setCurrentUser(user);
        }).catch(error => {
            console.error('Error fetching current user:', error);
        });
    }, []);

    useEffect(() => {
        if (currentUser) {
            console.log('Current User is set:', currentUser);
            appwriteService.getPosts().then((posts) => {
                console.log('Fetched Posts:', posts);
                if (posts && posts.documents) {
                    const userPosts = posts.documents.filter(post => post.userId === currentUser.$id);
                    console.log('Filtered User Posts:', userPosts);
                    setPosts(userPosts);
                }
            }).catch(error => {
                console.error('Error fetching posts:', error);
            });
        } else {
            console.log('Current User not set yet.');
        }
    }, [currentUser]);

    // if (!currentUser) {
    //     return (
    //         <div className="w-full py-8 mt-4 text-center">
    //             <Container>
    //                 <div className="flex flex-wrap">
    //                     <div className="p-2 w-full">
    //                         <h1 className="text-2xl font-bold hover:text-gray-500">
    //                             Login to read posts
    //                         </h1>
    //                     </div>
    //                 </div>
    //             </Container>
    //         </div>
    //     );
    // } else {
    //     return (
    //         <div className="w-full py-8">
    //             <Container>
    //                 <div className="flex justify-center flex-wrap gap-x-4 gap-y-4">
    //                     {posts.map((post) => (
    //                         <div key={post.$id} className="flex md:w-[30%]">
    //                             <PostCard {...post} />
    //                         </div>
    //                     ))}
    //                 </div>
    //             </Container>
    //         </div>
    //     );
    // }
    if (!currentUser) {
        return (
          <div className="w-full py-8 mt-4 text-center">
            <Container>
              <div className="flex flex-wrap">
                <div className="p-2 w-full">
                  <h1 className="text-2xl font-bold hover:text-gray-500">
                    Login to read posts
                  </h1>
                </div>
              </div>
            </Container>
          </div>
        );
      } else {
        return (
          <div className="w-full py-8">
            <Container>
              <div className="flex justify-center flex-wrap gap-x-4 gap-y-4">
                {posts.map((post) => (
                  <div key={post.$id} className="flex w-full sm:w-[48%] md:w-[30%]">
                    <PostCard {...post} />
                  </div>
                ))}
              </div>
            </Container>
          </div>
        );
      }
}

export default Home;

