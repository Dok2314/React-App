import postsCss from './Post.module.css';

const Post = () => {
    return (
        <div className={postsCss.item}>
            <img src="https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png" alt=""/>
            post 1
            <div>
                <span>Like</span>
            </div>
        </div>
    );
};

export default Post;