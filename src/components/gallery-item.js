import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { GalleryContext } from "./app";

export function GalleryItem() {
  const { id } = useParams();
  const { images } = useContext(GalleryContext);
  const [placeholder, setPlaceholder] = useState(false);

  const image = images.filter((image) => image.id === id);
  const { author, width, height, url, download_url } = image.length && image[0];

  const _width = Math.floor(width / 10);
  const _height = Math.floor(height / 10);

  return (
    <>
      {_width && _height && (
        <div>
          <div className="image-container">
            <figure>
              <img
                alt="img"
                style={placeholder ? { display: "block" } : { display: "none" }}
                id="placeholder"
                onMouseEnter={() => setPlaceholder(true)}
                onMouseLeave={() => setPlaceholder(false)}
                srcSet={`https://placebear.com/${_width}/${_height}`}
              />
              <img
                alt="img"
                style={placeholder ? { display: "none" } : { display: "block" }}
                onMouseEnter={() => setPlaceholder(true)}
                onMouseLeave={() => setPlaceholder(false)}
                srcSet={`https://picsum.photos/id/${id}/${_width}/${_height}`}
              />
              <figcaption className="author">Author: {author}</figcaption>
            </figure>
          </div>
          <h3 className="table-caption">Image information</h3>

          <table className="table table-bordered col-6">
            <tbody>
              <tr>
                <th scope="row">Original Resolution</th>
                <td>
                  {width} X {height}
                </td>
              </tr>
              <tr>
                <th scope="row">Download-url</th>
                <td>
                  <a className="no-underline" href={download_url}>
                    {download_url}
                  </a>
                </td>
              </tr>
              <tr>
                <th scope="row">Url</th>
                <td>
                  <a className="no-underline" href={url}>
                    {url}
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
