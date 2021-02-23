import { useHistory } from "react-router-dom"

export const Logout = () => {
    const logout = () => { sessionStorage.clear() }
    const history = useHistory()
    const handleLogout = (e) => {
        e.preventDefault()
        logout()
        history.push("/")
    }
    return handleLogout
}