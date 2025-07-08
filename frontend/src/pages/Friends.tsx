import Friends from "../components/Lists/Followers";
import { useParams } from "react-router-dom";

const FriendsPage: React.FC = () => {
  const { userId } = useParams<{ userId: string }>(); // ← This reads from the route

  return (
    <>
      <div className="d-flex vh-100 justify-content-center align-items-center">
        {userId && <Friends userId={userId} />}
      </div>
    </>
  );
};

export default FriendsPage;
