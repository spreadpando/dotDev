const biographs = [
  {
    content: 'I am a developer, and experimental electronic artist based in Colorado who employs modern Javascript toolsets, open source CAD, visual programming interfaces and analogue hardware to produce immersive webapps, extended reality experiences and spontaneous audiovisual performances.'
  },
  {
    content: 'I develop in-browser, immersive WebVR-driven user interfaces using React, Aframe and Threejs.'
  },
  {
    content: 'I build APIs and implement custom Object Relational Mapping solutions using Nodejs frameworks like Next and Express.'
  },
  {
    content: 'I strategize targeted marketing campaigns and develop interactive funnels to optimize ROI and engage users via a variety of platforms.'
  }
]

const Bio = () => {
  return (
    <div className='Bio'>
      <article>

        <h1>
        DEV
        </h1>

        {biographs.map((graph, i) => (
          <p className='Biograph' key={`graph-${i}`}> {graph.content}</p>
        ))}

      </article>

      <style jsx global>
        {`
        .Bio {
            position: relative;
            display: block;
            width: 50%;
            margin: 5% 25% 0 25%;
        }
        .Biograph{
            background-color:rgba(0, 0, 0, 0)
        }
        .Biograph:hover{
            background-color:rgba(255, 0, 0, .1)
        }
        `}
      </style>

    </div>

  )
}
export default Bio
