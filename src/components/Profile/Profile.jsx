import profileCss from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo";

const Profile = () => {
    return (
        <div className={profileCss.content}>
            <ProfileInfo />

            <MyPosts />
        </div>
    );
};

export default Profile;