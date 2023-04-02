import myPostsCss from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Add post</button>
            </div>
            <div className={myPostsCss.posts}>
                <Post message={'It\'s my first post!'} likes={5} />
                <Post message={'My name is Daniil!'} likes={15} />
                <Post message={'How are you dude?'} likes={23} />
                <Post message={'Do you like an apple?'} likes={4} />
                <Post message={'Weather is good!'} likes={11} />
                <Post message={'Today i\'ll tell about ReactJS!'} likes={53} />
            </div>
        </div>
    );
};

export default MyPosts;