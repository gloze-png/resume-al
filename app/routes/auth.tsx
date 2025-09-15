export const meta = () => {[
  {title: "Resume1 | Auth"},
  {name: "Al that help you land your dream Job", content: "It helps to get your dream Job!"},
]}

const Auth = () => {
  return (
    <main className="bg-[url('/images/bg-auth.svg')] bg-cover min-h-screen flex items-center justify-center">
      <div className="gradient-border shadow-lg">
        <section className="flex flex-col gap-8 bg-white rounded-2xl p-10">
          <div className="flex flex-col items-center gap-2 text-center">
            <h1>Welcome</h1>
            <h2>Log in to continue</h2>
          </div>
        </section>
      </div>


    </main>
  )
}

export default Auth
