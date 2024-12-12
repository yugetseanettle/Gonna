"use client";
import React, { useState } from "react";
import useAuth from "../hooks/useAuth";
import Modal from "./ui/Modal";
import AuthAvatar from "./ui/AuthAvatar";
import { css } from "../../styled-system/css";

interface AuthenticationProps {
  closeModal: () => void;
}

const buttonStyle = css({
  backgroundColor: "blue.500",
  "&:hover": {
    backgroundColor: "blue.700",
  },
  color: "white",
  fontWeight: "bold",
  paddingY: "2",
  paddingX: "4",
  borderRadius: "md",
  boxShadow: "md",
});

const Authentication: React.FC<AuthenticationProps> = ({ closeModal }) => {
  const {
    user,
    signInWithGoogle,
    signOutWithGoogle,
    signInWithEmail,
    signUpWithEmail,
  } = useAuth(closeModal);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <AuthAvatar
        onClick={() => {
          setIsModalOpen(true);
        }}
      />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div
          className={css({
            padding: "2rem",
            bgColor: "background",
            border: "1px solid",
            borderColor: "primary/25",
            borderRadius: "md",
          })}
        >
          {user ? (
            <div>
              <button onClick={signOutWithGoogle} className={buttonStyle}>
                ログアウト
              </button>
            </div>
          ) : (
            <>
              <button onClick={signInWithGoogle} className={buttonStyle}>
                Googleログインして開始する
              </button>
              <div>
                <input
                  type="email"
                  placeholder="メールアドレス"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="パスワード"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  onClick={() => signInWithEmail(email, password)}
                  className={buttonStyle}
                >
                  メールでログイン
                </button>
                <button
                  onClick={() => signUpWithEmail(email, password)}
                  className={buttonStyle}
                >
                  メールでサインアップ
                </button>
              </div>
            </>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default Authentication;
