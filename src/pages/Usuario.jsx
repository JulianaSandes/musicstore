import NavProjeto from "../components/NavProjeto";
import Cabecalho from "../components/Cabecalho";
import React from 'react'

const Usuario = () => {
    return (
        <div>
             <Cabecalho />
             <NavProjeto />
            <div className="container mb-5">
                
                <div className="row">
                    
                    <div className="col-12 text-center py-4 my-4">
                        
                        <h1 className="sobre">Faça Login</h1>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                    <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1">Endereço de email</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Seu email"></input>
                        <small id="emailHelp" class="form-text text-muted">Nunca vamos compartilhar seu email, com ninguém.</small>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1">Senha</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Senha"></input>
                    </div>
                    <div class="mb-3">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                        <label class="form-check-label" for="exampleCheck1">Lembrar senha</label>
                    </div>
                    <button type="submit" class="btn btn-outline-primary">Enviar</button>
                    </form>
                    </div>
                    
                    </div>
                </div>
                
            </div>
            
            )
}

            export default Usuario;