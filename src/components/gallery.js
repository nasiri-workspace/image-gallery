import React, { useState, useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { GalleryContext } from "./app";

export function Gallery() {
  const { selectedImages, setSelectedImages, images } =
    useContext(GalleryContext);
  const [filteredImages, setFilteredImages] = useState(images);

  const onImageClick = (image) => {
    const imageId = image.id;
    const updated = selectedImages.includes(imageId)
      ? selectedImages.filter((id) => id !== imageId)
      : [...selectedImages, imageId];
    setSelectedImages(updated);
  };

  const onImageSearch = ({ value }) => {
    const filteredImages = images.filter((img) =>
      img.author.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredImages(filteredImages);
  };

  useEffect(() => {
    setFilteredImages(images);
  }, [images]);

  return (
    <>
      <p className="selected-images">
        Selected images: {selectedImages.length}
      </p>
      <div className="search">
        <label className="hidden" htmlFor="searchBox">
          Search:
        </label>
        <input
          type="text"
          name="search-box"
          id="searchBox"
          placeholder="Author name "
          className="form-control col-4"
          onChange={({ target }) => onImageSearch(target)}
        />
      </div>
      <ul className="gallery">
        {filteredImages.map((img) => (
          <li className="nav-item" key={img.id}>
            <img
              src={`https://picsum.photos/id/${img.id}/250/250`}
              alt={img.author}
              id={img.id}
              className={
                selectedImages.includes(img.id) ? "selected-image" : "image"
              }
              onClick={({ target }) => onImageClick(target)}
            />
            <NavLink to={`/item/${img.id}`} className="nav-link">
              {img.author}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}
