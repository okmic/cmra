import { useState } from "react"
import { useDispatch } from "react-redux"
import { auth } from "../redux/reducer/authReducer"

export const AuthPage = () => {

    const dispatch = useDispatch()
    
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
             onClick={() => dispatch(auth(form))}>Войти</button>
        </div>
}