import { useAuth } from '../../context/AuthContext';

function ProfileInfo() {
  const { userInfo } = useAuth();
  const { id, username, password, email, firstName, lastName } = userInfo;
  return (
    <div className="border rounded-sm text-wrap p-4 flex justify-center">
      <div>
        <div>{username}</div>
        <div className="break-all">{password}</div>
        <div>{firstName}</div>
        <div>{lastName}</div>
        <div>{email}</div>
      </div>
    </div>
  );
}

export default ProfileInfo;
