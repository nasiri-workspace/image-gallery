import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { GalleryContext } from "./app";

export function GalleryItem() {
  const { id } = useParams();
  const { images } = useContext(GalleryContext);

  const image = images.filter((image) => image.id == id);
  const { author, width, height, url, download_url } = image.length && image[0];
 

  return (
    <div>
      <figure>
        <img
          alt="img"
          srcSet={`
              https://picsum.photos/id/${id}/985 985w,
              https://picsum.photos/id/${id}/1285 1285w,
              https://picsum.photos/id/${id}/1585 1585w,
              https://picsum.photos/id/${id}/1885 1885w,
              https://picsum.photos/id/${id}/1970 1970w,
              https://picsum.photos/id/${id}/2048 2048w
            `}
        />
        <figcaption className="author">Author: {author}</figcaption>
      </figure>
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
  );
}
