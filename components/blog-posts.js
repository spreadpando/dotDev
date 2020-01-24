const cards = [
  {
    content: 'Based in Colorado, I am a developer, and experimental electronic artist who experiments with Extended Reality, WebVR and Electronic Music in the context of modern as well as analog toolsets'
  },
  {
    content: 'I develop front-end, immersive user expereiences for web using React, Aframe and Threejs. I build APIs and implement custom ORM solutions with nodejs using frameworks like next and express'
  }
]

const BlogPosts = () => {
  return (
    <div>
      <article className='Bio'>

        <h1>
          about
        </h1>

        {biographs.map((graph, i) => (
          <p key={i.toString}> {graph.content}</p>
        ))}

      </article>

      <style jsx>
        {`
          .Bio {
          width: 66%;
          }
          `}
      </style>

    </div>

  )
}
export default BlogPosts
