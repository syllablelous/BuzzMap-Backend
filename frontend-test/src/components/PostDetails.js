const PostDetails = ({ post }) => {
  return (
    <div className="post-details">
      <h4>{post.report_id}</h4>
      <p><strong>District: </strong>{post.district}</p>
      <p><strong>Barangay: </strong>{post.barangay}</p>
      <p><strong>Specific Location: </strong>{post.specific_location}</p>
      <p><strong>Date: </strong>{post.date}</p>
      <p><strong>Time: </strong>{post.time}</p>
      <p><strong>Report Type: </strong>{post.report_type}</p>
      <p><strong>Description: </strong>{post.description}</p>
      <p><strong>Status: </strong>{post.status}</p>
    </div>
  )
}

export default PostDetails