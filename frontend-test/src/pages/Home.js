import { useEffect, useState } from 'react'

import PostDetails from '../components/PostDetails'
import ReportForm from '../components/ReportForm'

const Home = () => {
  const [posts, setPosts] = useState(null)

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/v1/posts')
      const json = await response.json()

      if (response.ok) {
        setPosts(json)
      }
    }

    fetchPosts()
  }, [])

  return (
    <div className="home">
      <div className="posts">
        {posts && posts.map((post) => (
          <PostDetails key={post._id} post={post}/>
        ))}
      </div>
      <ReportForm />
    </div>
  )
}

export default Home