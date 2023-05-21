import Imgix from "react-imgix";

const Gallery = () => {
    return (    
           
        <div>
            <h2 className=" text-secondary text-4xl text-center font-bold">Gallery</h2>
        
            <div className="m-8 grid md:grid-cols-5 gap-0  ">
             <Imgix
                src="https://i.ibb.co/Gk2zmK8/m5.jpg" 
                
            />
            <Imgix
                src="https://i.ibb.co/WzjJb2d/m4.jpg"
                
            />
            <Imgix
                src="https://i.ibb.co/T2M3KpK/m3.jpg"
                
            />
            <Imgix
                src="https://i.ibb.co/xHSd8XS/m2.jpg"
                
            />
            
            
            <Imgix
                src="https://i.ibb.co/nPS19Mc/m1.jpg"
                
            />
            <Imgix
                src="https://i.ibb.co/Fhdh0RL/im7.jpg"
                
            />
            <Imgix
                src="https://i.ibb.co/7kbKTwG/im1.jpg"
                
            />
            <Imgix
                src="https://i.ibb.co/h9RDB6T/im6.jpg"
                
            />
            
            <Imgix
                src="https://i.ibb.co/HTNvw7d/im2.jpg"
                width={200} // This sets what resolution the component should load from the CDN and the size of the resulting image
                height={300}
            />
            
            <Imgix
                src="https://i.ibb.co/sRSbbDB/im3.jpg"
                width={200} // This sets what resolution the component should load from the CDN and the size of the resulting image
                height={300}
            />

            
            

        </div>
        </div>
    );
};

export default Gallery;