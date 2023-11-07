import NavProjeto from "../components/NavProjeto";
import Cabecalho from "../components/Cabecalho";
import React from 'react'

const ProdutoMusica = () => {
    return (
        <div>
            <Cabecalho />
             <NavProjeto />
            <div className="container mb-5">
                
                <div className="row">
                    
                    <div className="col-12 text-center py-4 my-4">
                        
                        <h1 className="sobre">Cadastro Produto Música</h1>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    
                    <div className="col-md-6">
                    <form>
                    <div class>
                        <label for="id_produtomusica">Número de matricúla</label>
                        <input type="id_produtomusica" class="form-control" id="id_produtomusica"></input>
                    </div>

                    <div class>
                        <label for="descuicao_produtomusica">Descrição</label>
                        <input type="descricao_produtomusica" class="form-control" id="descricao_produtomusica" ></input>
                    </div>
                    <div class>
                        <label for="marca_produtomusica">Marca</label>
                        <input type="marca_produtomusica" class="form-control" id="marca_produtomusica"></input>
                    </div>
                    <div class>
                        <label for="data_produtomusica">Data fabricação</label>
                        <input type="data_produtomusica" class="form-control" id="data_produtomusica"></input>
                    </div>
                    <div class>
                        <label for="quantidade_produtomusica">Quantidade estoque</label>
                        <input type="quantidade_produtomusica" class="form-control" id="quantidade_produtomusica"></input>
                    </div>
                    <button type="submit" class="btn btn-outline-primary">Cadastrar</button>
                    </form>
                    </div>
                    
                    </div>
                </div>
                
            </div>
            
            )
}

     export default ProdutoMusica;