import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";

export default function Login({ loginError, token, resetError, reset }) {
  const [revealPassword, setRevealPassword] = useState(false);
  const router = useRouter();
  const toggleReveal = () => {
    setRevealPassword(r => !r);
    const id = document.getElementById("password");
    id.type = id.type === "password" ? "text" : "password";
  };
  return (
    <div className="dark:bg-[#000000] dark:text-white relative">
        some thing
    </div>
  );
}
export async function getServerSideProps({ req, res, query }) {
  return { props: {} };
}
