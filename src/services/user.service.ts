import AsyncStorage from "@react-native-async-storage/async-storage";
import Service from "./service";

/**
 * Responsible for providing user services.
 */
class UserService extends Service {
  async favorite(id: any) {
    return null;
  }

  async getFavorites() {
    /*const token = await AsyncStorage.getItem('token');
    const req = await fetch(`${BASE_API}/user/favorites?token=${token}`);
    const json = await req.json();
    return json;*/

    const token = await AsyncStorage.getItem('token');

    if (token)
      return {
        error: '',
        data: [
          {
            avatar: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
            id: 5,
            name: 'Fulano',
            stars: 3.5
          },
          {
            avatar: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
            id: 8,
            name: 'Fulano4',
            stars: 5.0
          },
        ]
      };

    return { token: null, error: 'Unknown error', data: null };
  }

  async getAppointments() {
    /*const token = await AsyncStorage.getItem('token');
    const req = await fetch(`${BASE_API}/user/appointments?token=${token}`);
    const json = await req.json();
    return json;*/

    const token = await AsyncStorage.getItem('token');

    if (token)
      return {
        error: '',
        data: [
          {
            barber: {
              avatar: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
              id: 5,
              name: 'Fulano',
              stars: 3.5,
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
            barber: {
              avatar: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
              id: 7,
              name: 'Fulano4',
              stars: 3.5,
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

    return { token: null, error: 'Unknown error', data: null };
  }

  async updateUser(body: any) {
    const token = await AsyncStorage.getItem('token');
    body.token = token;
    return null;
    // const req = await fetch(`${BASE_API}/user`, {
    //   method: 'PUT',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(body)
    // });

    // const json = await req.json();
    // return json;
  }
}

export default UserService;
