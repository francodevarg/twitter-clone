import { SparklesIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import Input from "./Input";
import {db} from '../firebase'
import { onSnapshot, collection, query, orderBy } from "@firebase/firestore";
import Post from "./Post";
//import { useSession } from "next-auth/react";

function Feed() {
  //const { data: session } = useSession();
  const [posts, setPosts] = useState<any>([]);

  // MESSY
  // useEffect(() => {
  //   const unsubscribe = onSnapshot(
  //     query(collection(db, "posts"), orderBy("timestamp", "desc")),
  //     (snapshot) => {
  //       setPosts(snapshot.docs);
  //     }
  //   );

  //   return () => {
  //     unsubscribe();
  //   };
  // }, [db]);

  //CLEAN
  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          const result : any[] = snapshot.docs;
          setPosts(result);
        }
      ),
    [db]
  );

  return (
    <div className="flex-grow border-l border-r border-gray-200 max-w-2xl sm:ml-[73px] xl:ml-[370px]">
      <div className="text-[#d9d9d9] flex items-center sm:justify-between py-2 px-3 sticky top-0 z-50 border-b border-gray-200 bg-white">
        <h2 className="text-lg sm:text-xl font-bold text-gray-700">Home</h2>
        <div className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0 ml-auto">
          <SparklesIcon className="h-5 text-gray-700" />
        </div>
      </div>

      <Input />
      <div className="pb-[1300px]">
        {posts.map((post: any) => (
          <Post key={post.id} id={post.id} post={post.data()} />
        ))}
      </div>
    </div>
  );
}

export default Feed;