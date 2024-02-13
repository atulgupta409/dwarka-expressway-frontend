import React, { useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ImageGallery = () => {
  const [imgData, setImgdata] = useState({ img: "", i: "" });
  const navigate = useNavigate();

  const images = [
    {
      id: 1,
      image:
        "https://propularity-bucket.s3.ap-south-1.amazonaws.com/image-1705656524736.jpeg",
    },
    {
      id: 2,
      image:
        "https://propularity-bucket.s3.ap-south-1.amazonaws.com/image-1705656524741.jpg",
    },
    {
      id: 3,
      image:
        "https://propularity-bucket.s3.ap-south-1.amazonaws.com/image-1705656524746.jpg",
    },
    {
      id: 4,
      image:
        "https://propularity-bucket.s3.ap-south-1.amazonaws.com/image-1705656524753.jpg",
    },
  ];

  const viewImage = (img, i) => {
    setImgdata({ img: img.image, i });
  };

  const imgAction = (action) => {
    let i = imgData.i;
    if (action === "next-img") {
      setImgdata({
        img: images[i + 1]?.image,
        i: i + 1,
      });
    }
    if (action === "prev-img") {
      setImgdata({
        img: images[i - 1]?.image,
        i: i - 1,
      });
    }
    if (!action) {
      setImgdata({
        img: "",
        i: 0,
      });
    }
  };

  const goBack = () => {
    navigate("/property-details");
  };

  const handleEscapeKeyPress = (event) => {
    if (event.keyCode === 27) {
      navigate("/property-details");
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleEscapeKeyPress);
    return () => {
      window.removeEventListener("keydown", handleEscapeKeyPress);
    };
  }, []);

  return (
    <div className="top_container">
      {imgData?.img && (
        <div className="large_img_box">
          <button onClick={() => imgAction()} className="gallery_close_btn">
            <AiOutlineClose /> Close
          </button>
          <button
            onClick={() => imgAction("prev-img")}
            className="gallery_arrow_btn prev_btn"
          >
            <IoIosArrowBack />
          </button>
          <img
            src={imgData?.img}
            alt="largeImage"
            style={{
              width: "68%",
              height: "80%",
              maxWidth: "90%",
              maxHeight: "90%",
              objectFit: "cover",
            }}
          />
          <button
            onClick={() => imgAction("next-img")}
            className="gallery_arrow_btn next_btn"
          >
            <IoIosArrowForward />
          </button>
        </div>
      )}
      <div className="go_back_main">
        <button className="go_back_gallery" onClick={goBack}>
          <IoIosArrowBack />
        </button>
      </div>

      <div className="container img_gallery_container">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 2 }}>
          <Masonry gutter="10px">
            {images?.map((image, i) => {
              return (
                <img
                  src={image?.image}
                  alt="property-image"
                  style={{
                    width: "100%",
                    display: "block",
                    cursor: "pointer",
                    height: "255px",
                    objectFit: "cover",
                  }}
                  key={i}
                  onClick={() => viewImage(image, i)}
                />
              );
            })}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
};

export default ImageGallery;
