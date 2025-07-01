import type { UserProps } from "../types/User";
import UserProfile from "../components/UserProfile";

// home component
const ProfilePage: React.FC<UserProps> = ({ user }) => {
  return (
    <div className="home">
      <UserProfile user={user} />
    </div>
  );
};

export default ProfilePage;
