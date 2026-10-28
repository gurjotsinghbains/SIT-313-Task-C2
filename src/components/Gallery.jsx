const photos = [
  "/Snapchat-1048210937.jpeg",
  "/20260615_101431.jpeg",
  "/20260615_072558.jpeg",
  "/20260614_160538.jpeg"
]

function Gallery() {
  return (
    <div className="gallery">

      <hr className="divider" />

      <h2>My Photos</h2>

      <div className="gallery-grid">

        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Gallery photo ${index + 1}`}
          />
        ))}

      </div>

    </div>
  )
}

export default Gallery