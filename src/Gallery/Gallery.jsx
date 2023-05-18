import Imgix from "react-imgix";

const Gallery = () => {
    return (    
           
        <div>
            <h2 className="text-secondary text-4xl text-center font-bold">Gallery</h2>
        
            <div className="m-8 grid md:grid-cols-6 gap-0  ">
             <Imgix
                src="https://i.ibb.co/2hCTxyJ/rapu.jpg"
                width={200} // This sets what resolution the component should load from the CDN and the size of the resulting image
                height={300}
            />
            <Imgix
                src="https://i.ibb.co/s2yX5DH/images-5.jpg"
                width={200} // This sets what resolution the component should load from the CDN and the size of the resulting image
                height={300}
            />
            <Imgix
                src="https://i.ibb.co/DLCkzRZ/images-6.jpg"
                width={200} // This sets what resolution the component should load from the CDN and the size of the resulting image
                height={300}
            />
            <Imgix
                src="https://i.ibb.co/C2Sf5Ny/download-2.jpg"
                width={200} // This sets what resolution the component should load from the CDN and the size of the resulting image
                height={300}
            />
            
            
            <Imgix
                src="https://i.ibb.co/pbpzZhL/images-2.jpg"
                width={200} // This sets what resolution the component should load from the CDN and the size of the resulting image
                height={300}
            />
            <Imgix
                src="https://i.ibb.co/HVHGQtF/images-3.jpg"
                width={200} // This sets what resolution the component should load from the CDN and the size of the resulting image
                height={300}
            />
            <Imgix
                src="https://i.ibb.co/vkFtGhV/moana.jpg"
                width={200} // This sets what resolution the component should load from the CDN and the size of the resulting image
                height={300}
            />
            <Imgix
                src="https://i.ibb.co/FDVgcP6/images-4.jpg"
                width={200} // This sets what resolution the component should load from the CDN and the size of the resulting image
                height={200}
            />
            
            <Imgix
                src="https://i.ibb.co/mGhm1QD/download-1.jpg"
                width={400} // This sets what resolution the component should load from the CDN and the size of the resulting image
                height={500}
            />
            
            

        </div>
        </div>
    );
};

export default Gallery;