import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "../../constants"

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
 return <main className="bg-[url('/images/bg-main.svg')] bg-cover min-h-screen">
    <Navbar />
  <section className="main-section">
   <div className="page-heading">
      <h1>Track Your Application and Resume Ratings</h1>
      <h2>Get Notified When Your Resume is Viewed</h2>
    </div>
  </section>
 {resumes.map((resume) => (
    <div>
      <h1>{resume.jobTitle}</h1>
    </div>
  ))}
 </main>
}
