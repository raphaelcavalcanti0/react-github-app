import React from "react";
import GithubApp from "./GithubApp";
import { ResetCSS } from "./global/resetCSS";
import GithubProvider from "./providers/GithubProvider";

const Providers = () => {
    return (
        <>
            <GithubProvider>
                <ResetCSS />
                <GithubApp />
            </GithubProvider>
        </>
    );
};

export default Providers;