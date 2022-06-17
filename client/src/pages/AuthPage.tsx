import { useContext, useState } from "react"
import { DataContext } from "../context/dataContext"

export const AuthPage = () => {

    const {setLogin} = useContext(DataContext)
    
    const [form, setForm] = useState({login: "", password: ""})

        return <div className="WrapperInputs" style={{color: 'white'}} >
            <h1>Авторизация</h1>
            <input
            className="textField" 
            type="text" 
            value={form.login} 
            onChange={(e) => setForm({...form, login: e.target.value})} 
            placeholder="Логин"
            />
            <input
            className="textField" 
            type="password" 
            value={form.password} 
            onChange={(e) => setForm({...form, password: e.target.value})} 
            placeholder="Пароль"
            />
            <button 
            className="textField"
             onClick={() => setLogin(form)}>Войти</button>
        </div>
}