import React, { useState } from "react"
import useGithub from "../../hooks/github-hooks"
import Wrapper from "./styles"


const Header = () => {
    const { getUser } = useGithub()
    const [usernameForSearch, setUsernameForSearch] = useState()

    const submitGetUser = () => {
        if (!usernameForSearch) return
        return getUser(usernameForSearch)
    }

    return (
        <header>
            <Wrapper>
                <input
                    type="text"
                    placeholder="Digite o username para pesquisa..."
                    onChange={(event) => setUsernameForSearch(event.target.value)}
                />
                <button type="submit" onClick={submitGetUser}>
                    <span>Buscar</span>
                </button>
            </Wrapper>
        </header>
    )
}

export default Header