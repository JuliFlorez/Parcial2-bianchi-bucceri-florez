import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPerfil, logout } from "../services/auth.service";


const SessionContext = createContext();

function useSession(){
    const context = useContext(SessionContext);
    if(!context){
        throw new Error('useSession debe estar dentro del proveedor SessionContext');
    }
    return context;

}
function usePerfil(){
    const {perfil} = useSession();
    return perfil;
}

function SessionProvider({children}){
    const [perfil, setPerfil] = useState({});
    const navigate = useNavigate();

    const onLogOut = useCallback(() => {
      logout();
      localStorage.removeItem("token");
      navigate("/login", { replace: true });
    }, [navigate]);
  
    useEffect(() => {
      getPerfil().then((perfil) => setPerfil(perfil));
    }, []);

    const value = useMemo(() => {
        return {perfil, onLogOut}
    }, [perfil, onLogOut])

    return (
        <SessionContext.Provider value={ value }>
            {children}
        </SessionContext.Provider>
    )
}
export {SessionContext, useSession, usePerfil, SessionProvider};