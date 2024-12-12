import { Avatar } from "@ark-ui/react/avatar";
import { css } from "../../../styled-system/css";

interface AuthAvatarProps {
  onClick: () => void;
}

const AuthAvatar: React.FC<AuthAvatarProps> = ({ onClick }) => {
  return (
    <Avatar.Root
      className={css({
        height: "2rem",
        width: "2rem",
        borderRadius: "full",
        overflow: "hidden",
        bgColor: "stone.700",
        color: "stone.50",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      })}
      onClick={onClick}
    >
      <Avatar.Fallback>PA</Avatar.Fallback>
      <Avatar.Image src="https://i.pravatar.cc/300" alt="avatar" />
    </Avatar.Root>
  );
};

export default AuthAvatar;
