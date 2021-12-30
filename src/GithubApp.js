import Repos from "./components/repos/Repos";
import NoUser from "./components/noUser/NoUser";
import Header from "./components/header/Header";
import Profile from "./components/profile/Profile";
import useGithub from "./hooks/github-hooks";
import WrapperLayout from "./styles";

const GithubApp = () => {
  const { githubState } = useGithub()


  return (
    <WrapperLayout>
      <Header />
      {githubState.hasUser ? (
        <>
          {githubState.loading ? (
            <p>Loading</p>
          ) : (
            <>
              <Profile />
              <Repos />
            </>
          )}
        </>
      ) : (
        <NoUser />
      )}
    </WrapperLayout>
  )
}

export default GithubApp
