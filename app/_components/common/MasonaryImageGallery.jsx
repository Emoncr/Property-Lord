const MasonaryImageGallery = ({ images }) => {
    return (
        <div className="columns-1 gap-3 sm:columns-2 sm:gap-4 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-4">
            {images.length != 0 &&
                images.map((img, index) => (
                    <img key={index} src={img.src} alt="Gallery Image" />
                ))}
        </div>
    );
};

export default MasonaryImageGallery;
