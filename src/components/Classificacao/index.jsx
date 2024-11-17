const Classificacao = ({imc}) => {
    if (!imc) return null // não exibe nada se não houver IMC calculado

    if (imc < 18.50) {
        return(
            <p>Seu índice de massa corporal se encontra <b style={{color: "#C4E538"}}>ABAIXO DO PESO</b></p>
        )
    } else if (imc < 25) {
        return(
            <p>Seu índice de massa corporal se encontra <b style={{color: "#A3CB38"}}>EUTRÓFICO</b></p>
        )
    } else if (imc < 30) {
        return(
            <p>Seu índice de massa corporal se encontra em <b style={{color: "#FFC312"}}>SOBREPESO</b></p>
        )
    } else if (imc < 35) {
        return(
            <p>Seu índice de massa corporal se encontra em <b style={{color: "#F79F1F"}}>OBSEIDADE GRAU I</b></p>
        )
    } else if (imc < 40) {
        return(
            <p>Seu índice de massa corporal se encontra em <b style={{color: "#EE5A24"}}>OBSEIDADE GRAU II</b></p>
        )
    } else {
        return(
            <p>Seu índice de massa corporal se encontra em <b style={{color: "#EA2027"}}>OBSEIDADE GRAU III</b></p>
        )
    }
}

export default Classificacao