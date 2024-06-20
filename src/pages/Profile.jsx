import { useAuth } from '../context/AuthContext';
import ProfileInfo from '../features/profile/ProfileInfo';
import Heading from '../ui/Heading';

function Profile() {
  const { userInfo } = useAuth();

  return (
    <>
      <div className="flex-grow mx-10 my-8 max-w-7xl md:px-20 lg:px-40">
        <Heading>
          {userInfo.firstName} {userInfo.lastName}&apos;s Profile
        </Heading>
        <ProfileInfo />
      </div>
    </>
  );
}

export default Profile;
