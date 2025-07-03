import UserProfile from "../components/UserProfile";
import { useParams } from "react-router-dom";

// home component
const ProfilePage: React.FC = () => {
  const { userId } = useParams();

  return (
    <div className="home">
      <UserProfile userId={userId} />
    </div>
  );
};

export default ProfilePage;
