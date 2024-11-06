import './VolunCadastro.css';

function VolunCadastro() {

    const handleSubmit = (e) => {
        e.preventDefault();

    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h3>Cadastro</h3>
                <input type="text" placeholder="Seu nome" className="box" />
                <input type="email" placeholder="Seu email" className="box" />
                <input type="text" placeholder="Função" className="box" />
                <input type="number" placeholder="Digite seu numero" className="box" />
                <textarea placeholder="Por que você quer ser voluntario?" className="box" cols="15" rows="5"></textarea>
                <input type="submit" value="Enviar" className="btn" />
            </form>
        </>
    );
}

export default VolunCadastro;
