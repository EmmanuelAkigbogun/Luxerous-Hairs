import { NavLink } from "react-router-dom";
import files from "../assets/files";
import { auth } from "../../config/firebase";
import { useMemo, useState } from "react";
function Profile({ c, sc }) {
  let [profileImg, setprofileImg] = useState(null);
  useMemo(() => {
    auth.onAuthStateChanged(async () => {
      return setprofileImg((profileImg = auth?.currentUser?.photoURL));
    });
  }, [profileImg]);
  return (
    <NavLink
      className="align_center"
      to={
        auth?.currentUser?.uid == null
          ? `/Account`
          : auth.currentUser.uid == import.meta.env.VITE_ADMIN_ID
          ? `/Admin`
          : `/Account/Account Details`
      }
      onClick={() => {
        window.scrollTo(0, 0);
        c == "" ? "" : sc((c = ""));
      }}
    >
      <img
        src={profileImg == null ? files.profile : profileImg}
        alt="profile icon"
        className="nav_icons rad50"
        width="24px"
        height="24px"
      />
      {console.log(auth)}
    </NavLink>
  );
}
export default Profile;
