import Image from "next/image";

import img from "../../../public/b-1.webp"
import img1 from "../../../public/b-2.webp"
import img2 from "../../../public/b-3.webp"
import img3 from "../../../public/b-4.webp"
import img4 from "../../../public/b-5.webp"
import img5 from "../../../public/b-6.webp"
import "./Browser_Category.css";

const Browser_Catrgory = () => {
    return (
        <div className="category-container">
            <h1 className="category-title">Browse by Category</h1>

            <div className="category-list">
                <div className="img-con">
                    <div className="icon-wrapper">
                        <Image src={img} alt="Laptop & PC" width={80} height={50} />
                    </div>
                    <p className="hover-text">Laptop & PC</p>
                </div>

                <div className="img-con">
                    <div className="icon-wrapper">
                        <Image src={img1} alt="Watches" width={80} height={50} />
                    </div>
                    <p className="hover-text" >Watches</p>
                </div>

                <div className="img-con">
                    <div className="icon-wrapper">
                        <Image src={img2} alt="Mobiles & Tablet" width={80} height={50} />
                    </div>
                    <p className="hover-text">Mobiles & Tablet</p>
                </div>

                <div className="img-con">
                    <div className="icon-wrapper">
                        <Image src={img3} alt="Health & Sport" width={80} height={50} />
                    </div>
                    <p className="hover-text">Health & Sport</p>
                </div>

                <div className="img-con">
                    <div className="icon-wrapper">
                        <Image src={img4} alt="Home Appliances" width={80} height={50} />
                    </div>
                    <p className="hover-text">Home Appliances</p>
                </div>

                <div className="img-con">
                    <div className="icon-wrapper">
                        <Image src={img5} alt="Games & Video" width={80} height={50} />
                    </div>
                    <p className="hover-text">Games & Video</p>
                </div>
            </div>
        </div>
    );
};

export default Browser_Catrgory;
