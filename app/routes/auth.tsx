import { usePuterStore } from "lib/puter"


export const meta = () => ([
  {title: "Resume1 | Auth"},
  {name: "Al that help you land your dream Job", content: "It helps to get your dream Job!"},
])


const Auth = () => {
  const { isLoading, auth } = usePuterStore();

  return (
    <main className="bg-[url('/images/bg-auth.svg')] bg-cover min-h-screen flex items-center justify-center">
      <div className="gradient-border shadow-lg">
        <section className="flex flex-col gap-8 bg-white rounded-2xl p-10">
          <div className="flex flex-col items-center gap-2 text-center">
            <h1>Welcome</h1>
            <h2> Sign in to continue</h2>
          </div>
          <div>
            {isLoading?(
              <button className="auth-button animate-pulse">
                <p>Signing You in ...</p>
              </button>
            ):(
              <>
              {!auth.isAuthenticated ?(
                <button className="auth-button" onClick={auth.signOut}>
                  <p>Sign Out</p>
                </button>
              ):(
                <button className="auth-button" onClick={auth.signIn}>
                  <p>Sign in</p>
                </button>
              )}
              </>
            )}
          </div>
        </section>
      </div>
    </main>
  )
}

export default Auth
