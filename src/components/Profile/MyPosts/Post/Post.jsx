import postsCss from './Post.module.css';

const Post = (props) => {
    return (
        <div className={postsCss.item}>
            <img src="https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png" alt=""/>
            {props.message}
            <div>
                <span>Like ({props.likes})</span>
            </div>
        </div>
    );
};

export default Post;