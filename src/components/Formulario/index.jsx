const Formulario = (setPeso, setAltura) => {
    return (
        <form className="inputForms">
            <input type="number" placeholder="Digite seu peso (kg): " onChange={({target}) => setPeso(parseInt(target.value))}/>
            <input type="number" placeholder="Digite sua altura (m): " onChange={({target}) => setAltura(parseInt(target.value))}/>
        </form>
    )
}

export default Formulario