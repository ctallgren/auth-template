"use client";

import { logout } from "@/actions/logout";
import { useCurrentUser } from "@/hooks/user-current-user";

const SettingsPage = () => {
  const user = useCurrentUser();

  const onClick = () => {
    logout();
  };

  return (
    <div className="bg-white p-10 rounded-xl">
      <button type="submit" onClick={onClick}>
        Sign out
      </button>
    </div>
  );
};

export default SettingsPage;
