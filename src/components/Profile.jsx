import profileCss from './Profile.module.css';

const Profile = () => {
    return (
        <div className={profileCss.content}>
            <div>
                <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt=""/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div className={profileCss.item}>
                    <div className={profileCss.item}>
                        post 1
                    </div>
                    <div className={profileCss.item}>
                        post 2
                    </div>
                    <div className={profileCss.item}>
                        post 3
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;