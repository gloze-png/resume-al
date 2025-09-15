import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "../../constants"
import ResumeCard from "~/components/ResumeCard";
import { usePuterStore } from "lib/puter";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

// const resumes = [
//   { jobTitle: "Frontend Engineer" },
//   { jobTitle: "Product Designer" },
//   { jobTitle: "Backend Engineer" },
// ];



export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resume1" },
    { name: "Al that help you land your dream Job", content: "It helps to get your dream Job!" },
  ];
}

export default function Home() {
  const {auth } = usePuterStore();
  const navigate =useNavigate();

// it is use for redirection

  useEffect(() => {
    if (!auth.isAuthenticated) navigate( 'auth?/next/');

  }, [auth.isAuthenticated])

 return <main className="bg-[url('/images/bg-main.svg')] bg-cover min-h-screen">
    <Navbar />
  <section className="main-section">
   <div className="page-heading py-16">
      <h1>Track Your Application and Resume Ratings</h1>
      <h2>Get Notified When Your Resume is Viewed</h2>
    </div>
{resumes.length> 0 && (
  <div className="resumes-section">
    {resumes.map((resume) => (
      <ResumeCard key={resume.id} resume={resume} />
    ))}
    </div>
    )}
    </section>
 </main>
}
