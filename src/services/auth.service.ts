import AsyncStorage from "@react-native-async-storage/async-storage";
import Service from "./service";

/**
 * Responsible for managing authentication.
 */
class AuthService extends Service {

    async signIn(email: string, password: string) {
        /*const req = await fetch(`${BASE_API}/auth/login`, {
            method:'POST',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({email, password})
        });

        const json = await req.json();
        return json;*/
        if (email === 'fulano@gmail.com' && password == '12345')
            return {
                error:'',
                token:'abcd',
                data:{
                    id:4,
                    name:'Fulano',
                    avatar:'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
                }
            };
        
        return {token:null};
    }

    async signUp(name: string, email: string, password: string) {
        /*const req = await fetch(`${BASE_API}/auth/signup`, {
            method:'POST',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({name, email, password})
        });

        const json = await req.json();
        return json;*/

        if (name && email && password)
            return {
                token:'abcd',
                error:'',
                data:{
                    id:4,
                    name:'Fulano',
                    avatar:'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
                }
            };
        
        return {token:null, error:'Unknown error'};
    }

    async signOut() {
        const token = await AsyncStorage.getItem('token');
        /*const req = await fetch(`${BASE_API}/auth/logout`, {
            method:'POST',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({token})
        });

        const json = await req.json();
        return json;*/

        if (token)
            return {
                error:''
            };
        
        return {error:'Unknown error'};
    }

    // manda token atual e recebe um novo token
    async refreshToken(token: string) {
        /*const req = await fetch(`${BASE_API}/auth/refresh`, {
            method:'POST',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({token})
        });

        const json = await req.json();
        return json;*/

        if (token)
            return {
                token:'abcdef',
                error:'',
                data:{
                    id:4,
                    name:'Fulano',
                    avatar:'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
                }
            };
        
        return {token:null, error:'Unknown error', data:null};
    }
}

export default AuthService;
