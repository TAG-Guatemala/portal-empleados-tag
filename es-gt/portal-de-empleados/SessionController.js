
const verifySession = () =>{
    let sesion = window.sessionStorage.getItem("login")

    if (!sesion){
        window.location.href = "https://tagairlines.com/"
    }
}

const closeSession = () =>{
    window.sessionStorage.setItem("login", false)
    window.sessionStorage.setItem("empleado", "")
    window.location.href = "https://tagairlines.com/"
}

verifySession()