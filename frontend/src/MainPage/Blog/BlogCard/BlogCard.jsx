
import "./BlogCard.css";

const BlogCard = ({imgSrc,header,text,index})=>{
    return <div className={`blog--cards  blog--cards--${index}`}>
        <img src={imgSrc} alt="blog"/>
        <h3>{header.slice(0,32) +"..."}</h3>
        <p>{text}</p>
    </div>
};

export default BlogCard