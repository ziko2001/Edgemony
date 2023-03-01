import "./index.css"

const Gallery = ({ imageUrls }) => {
  return (
    <div className="gallery">
      {imageUrls.map((imageUrl) => (
        <img key={imageUrl} src={imageUrl} alt="" />
      ))}
    </div>
  );
};

const Galleria = () => {
  const imageUrls = [
    "https://source.unsplash.com/random/300x200",
    "https://source.unsplash.com/random/300x201",
    "https://source.unsplash.com/random/300x202",
    "https://source.unsplash.com/random/300x203",
  ];

  return (
    <div className="card">
      <div className="card-header">My Gallery</div>
      <div className="card-body">
        <Gallery imageUrls={imageUrls} />
      </div>
    </div>
  );
};

export default Galleria;