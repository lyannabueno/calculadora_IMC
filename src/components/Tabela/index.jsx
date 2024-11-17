const Tabela = () => {
    const linhaColorida = (min, max) => {
        if (imc === 0) return {}

        if (imc >= min && (max === null || imc < max)) {
            return { backgroundColor: "#A3CB38", color: "white" }
        }

        return {}
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Classificação</th>
                    <th>IMC</th>
                </tr>
            </thead>

            <tbody>
                <tr style={linhaColorida(0, 18.5)}>
                    <td>Abaixo do Peso</td>
                    <td>Abaixo de 18,50</td>
                </tr>
                <tr style={linhaColorida(18.5, 25)}>
                    <td>Eutrófico</td>
                    <td>18,50 - 24,99</td>
                </tr>
                <tr style={linhaColorida(25, 30)}>
                    <td>Sobrepeso</td>
                    <td>25 - 29,99</td>
                </tr>
                <tr style={linhaColorida(30, 35)}>
                    <td>Obesidade Grau I</td>
                    <td>30 - 34,99</td>
                </tr>
                <tr style={linhaColorida(35, 40)}>
                    <td>Obesidade Grau II</td>
                    <td>35 - 39,99</td>
                </tr>
                <tr style={linhaColorida(40, null)}>
                    <td>Obesidade Grau III</td>
                    <td>Maior ou igual a 40</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Tabela