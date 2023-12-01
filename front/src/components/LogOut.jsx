import { useContext } from 'react'
import { SessionContext, useSession } from '../context/SessionContext'

const LogOut = () => {
    const { perfil, onLogOut } = useSession()

    const logoutStyle = {
        color: 'white',
        cursor: 'pointer',
        fontSize: '1.2em', 
        fontWeight: 'bold',
    };

    return (
        <li onClick={onLogOut} className="logout-link" style={logoutStyle}>
            Salir <span style={{ fontWeight: 'bold' }}>{perfil.name}</span>
        </li>
    )
}

export default LogOut;
