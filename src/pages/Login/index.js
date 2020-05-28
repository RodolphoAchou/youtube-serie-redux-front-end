import React, { useState } from 'react';

export default function Login(){

    const [form, setForm] = useState({ userName: '', password: ''})

    function changeForm(e){
        const {name, value} = e.target;

        setForm({... form, [name] : value })
    }

    function submitForm(e){
        e.preventDefault()
        console.log(form)
    }

    return (
        <form onSubmit={submitForm} style={{
            width: 350,
            margin: '40px auto'
        }}>
            <h2 className="text-center">SC-Login</h2>
            <div className="form-group">
                <input placeholder="Usuário" onChange={changeForm} name= "username" className="form-control" value={form.name}/>
            </div>
            <div className="form-group">
                <input placeholder="Senha" onChange={changeForm} name= "password" className="form-control" type="password" value={form.password}/>
            </div>
            <div className="form-group">
                <button className="btn btn-primary btn-block">Logar</button>
            </div>
        </form>
    )
}