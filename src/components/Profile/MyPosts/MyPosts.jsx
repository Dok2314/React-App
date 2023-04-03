import myPostsCss from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    let posts = [
        {id: 1, post: 'It\'s my first post!', likes: 5},
        {id: 2, post: 'My name is Daniil!', likes: 15},
        {id: 3, post: 'How are you dude?', likes: 23},
        {id: 4, post: 'Do you like an apple?', likes: 4},
        {id: 5, post: 'Weather is good!', likes: 11},
        {id: 6, post: 'Today i\'ll tell about ReactJS!', likes: 53},
    ];

    let postElements = posts
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