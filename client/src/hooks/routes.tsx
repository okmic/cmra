import { useSelector } from "react-redux"
import { Route, Routes } from "react-router-dom"
import { urlRoute } from "../config"
import { AuthPage } from "../pages/AuthPage"
import MainPage from "../pages/MainPage"
import { RootState } from "../redux/store"


export const useRoutes = () => {

    const auth = useSelector((state: RootState) => state.auth.auth)

    if (auth) {
        return <Routes>
            <Route path={urlRoute + "/*"} element={<MainPage />} />
        </Routes>
    } 
    return <Routes>
        <Route path={urlRoute + "/*"}  element={<AuthPage />} />
    </Routes>
}