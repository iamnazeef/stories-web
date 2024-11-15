'use client'

import { useEffect, useState } from "react";
import { getStories } from "./api/home";

export default function Home() {
  const [stories, setStories] = useState<Array<any>>([]);

  useEffect(() => {
    const stories = async () => {
      const { data } = await getStories();
      setStories(data)
    }

    stories()
  }, [])

  return (
    <>
      {stories.map(story => (
        <img
          src={story.image}
          key={story.id}
          width={500}
          height={500}
          alt="TEST"
        />
      ))}
    </>
  );
}
