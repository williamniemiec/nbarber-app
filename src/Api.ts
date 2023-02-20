import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_API = 'https://api.devbar.com';

export default {

    getBarbers: async (lat=null, lng=null, city=null) => {
        const token = await AsyncStorage.getItem('token');
        /*const req = await fetch(`${BASE_API}/barbers?token=${token}&lat=${lat}&lng=${lng}&city=${city}`);
        const json = await req.json();

        return json;*/
        console.log('lat: ' + lat);
        console.log('lg: ' + lng);
        console.log('city: ' + city);

        if (token)
            return {
                loc:city ? city : 'Porto Alegre',
                error:'',
                data:[
                    {
                        avatar:'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
                        id:5,
                        name:'Fulano',
                        stars:3.5
                    },
                    {
                        avatar:'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
                        id:6,
                        name:'Fulano2',
                        stars:2.0
                    },
                    {
                        avatar:'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
                        id:7,
                        name:'Fulano3',
                        stars:4.7
                    },
                    {
                        avatar:'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
                        id:8,
                        name:'Fulano4',
                        stars:5.0
                    },
                ]
            };
        
        return {token:null, error:'Unknown error', data:null};
    },

    

    getBarber: async (id: number) => {
        const token = await AsyncStorage.getItem('token');

        /*const req = await fetch(`${BASE_API}/barber/${id}token=${token}`);

        const json = await req.json();
        return json;*/

        if (token)
            return {
                error:'',
                data:{
                    available:[
                        {
                            date: '2021-06-23',
                            hours: ['09:00', '09:30', '10:30', '11:00', '11:30', '12:00', '16:00']
                        }, 
                        {
                            date: '2021-06-24',
                            hours: ['10:30', '11:00', '11:30', '12:00', '13:30', '16:00']
                        }, 
                        {
                            date: '2021-06-25',
                            hours: ['09:00', '11:00', '11:30', '15:00']
                        }
                    ],
                    avatar:'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
                    favorited:false,
                    id:13,
                    name:'Fulano',
                    photos:[
                        {
                            url: 'https://www.betterteam.com/images/barber-job-description-5184x3456-20201124.jpeg?crop=40:21,smart&width=1200&dpr=2'
                        }, 
                        {
                            url: 'https://i2-prod.manchestereveningnews.co.uk/incoming/article21411590.ece/ALTERNATES/s615/0_gettyimages-1207048163-170667a.jpg'
                        }
                    ],
                    services:[
                        {
                            name: 'Corte de cabelo + barba',
                            price: 20
                        }, 
                        {
                            name: 'Corte de cabelo',
                            price: 15
                        },
                        {
                            name: 'Barba',
                            price: 10
                        }
                    ],
                    stars:3.4,
                    testimonials:[
                        {
                            name:'Rápido e bom',
                            rate:5,
                            body:'Além de simpático, atendeu de forma bem rápida. Adorei'
                        }, 
                        {
                            name:'Bom',
                            rate:4,
                            body:'Recomendo'
                        }, 
                        {
                            name:'Cheio',
                            rate:3.5,
                            body:'Bom cabelereiro mas o lugar está sempre cheio :/'
                        }
                    ]
                }
            };
        
        return {token:null, error:'Unknown error', data:null};
    },

    schedule: async (userId: any, service: any, selectedYear: any, selectedMonth: any, selectedDay: any, selectedHour: any) => {
        const token = await AsyncStorage.getItem('token');

        const req = await fetch(`${BASE_API}/barber/${userId}/appointment`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                token, 
                service, 
                year: selectedYear, 
                month: selectedMonth, 
                day: selectedDay, 
                hour: selectedHour
            })
        });

        const json = await req.json();
        return json;
    },

    search: async (barberName: string) => {
        /*const token = await AsyncStorage.getItem('token');
        const req = await fetch(`${BASE_API}/search?q=${barberName}&token=${token}`);
        const json = await req.json();
        return json;*/

        const token = await AsyncStorage.getItem('token');

        if (token)
            return {
                error:'',
                data:[
                    {
                        avatar:'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
                        id:5,
                        name:'Fulano',
                        stars:3.5
                    },
                    {
                        avatar:'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
                        id:6,
                        name:'Fulano2',
                        stars:2.0
                    },
                    {
                        avatar:'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
                        id:7,
                        name:'Fulano3',
                        stars:4.7
                    },
                    {
                        avatar:'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
                        id:8,
                        name:'Fulano4',
                        stars:5.0
                    },
                ]
            };
        
        return {token:null, error:'Unknown error', data:null};
    },

    getFavorites: async () => {
        /*const token = await AsyncStorage.getItem('token');
        const req = await fetch(`${BASE_API}/user/favorites?token=${token}`);
        const json = await req.json();
        return json;*/

        const token = await AsyncStorage.getItem('token');

        if (token)
            return {
                error:'',
                data:[
                    {
                        avatar:'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
                        id:5,
                        name:'Fulano',
                        stars:3.5
                    },
                    {
                        avatar:'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
                        id:8,
                        name:'Fulano4',
                        stars:5.0
                    },
                ]
            };
        
        return {token:null, error:'Unknown error', data:null};
    },

    getAppointments: async () => {
        /*const token = await AsyncStorage.getItem('token');
        const req = await fetch(`${BASE_API}/user/appointments?token=${token}`);
        const json = await req.json();
        return json;*/

        const token = await AsyncStorage.getItem('token');

        if (token)
            return {
                error:'',
                data:[
                    {
                        barber:{
                            avatar:'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
                            id:5,
                            name:'Fulano',
                            stars:3.5,
                            latitude: -23.5530907,
                            longitude: -46.6682795
                        },
                        datetime: '2021-06-23 20:00:00',
                        service: {
                            id: 20,
                            idBarber: 5,
                            name: 'Enfeite de cabelo',
                            price: 82.54
                        }
                    },
                    {
                        barber:{
                            avatar:'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
                            id:7,
                            name:'Fulano4',
                            stars:3.5,
                            latitude: -23.5531000,
                            longitude: -46.6682795
                        },
                        datetime: '2021-06-22 19:36:20',
                        service: {
                            id: 20,
                            idBarber: 7,
                            name: 'Corte de cabelo',
                            price: 25.35
                        }
                    },
                ]
            };
        
        return {token:null, error:'Unknown error', data:null};
    },

    updateUser: async (body: any) => {
        const token = await AsyncStorage.getItem('token');
        body.token = token;

        const req = await fetch(`${BASE_API}/user`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        const json = await req.json();
        return json;
    }
};

/* 
    EXEMPLO DE USO 

    MANDAR APENAS O Q FOR ATUALIZAR

Api.updateUser({
    nome: 'novo nome',
    email: 'email',
    password: '123',
    password_confirm: ''
});
*/
