import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuth } from "../components/AuthContext";
import SideNav from "../components/nav/SideNav";

export default function Index({ user, projects, events, loggedIn }) {
  const auth = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      router.push("/login");
  }, [router]);

  return (
    <div>
      <SideNav />
    </div>
  );
}

export async function getServerSideProps({ req, res }) {
  return {
    props: {
    }
  };
}
