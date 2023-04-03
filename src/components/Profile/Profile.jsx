import profileCss from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo";

const Profile = (props) => {
    return (
        <div className={profileCss.content}>
            <ProfileInfo />

            <MyPosts posts={props.posts} />
        </div>
    );
};

export default Profile;