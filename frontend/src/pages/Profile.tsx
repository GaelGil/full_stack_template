// import type { UserProps } from "../types/User";
import UserProfile from "../components/UserProfile";
import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";

// home component
const ProfilePage: React.FC = () => {
  const { userId } = useParams();
  // const [profile, setProfile] = useState(null);

  return (
    <div className="home">
      <UserProfile userId={userId} />
    </div>
  );
};

export default ProfilePage;
