import myPostsCss from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postElements = props.posts
        .map(p => <Post message={p.post} likes={p.likes} key={p.id} />);

    return (
        <div className={myPostsCss.postsBlock}>
            My posts
            <div>
                <div>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <button>Add post</button>
            </div>
            <div className={myPostsCss.posts}>
                { postElements }
            </div>
        </div>
    );
};

export default MyPosts;