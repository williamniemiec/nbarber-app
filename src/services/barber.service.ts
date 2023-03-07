/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import AsyncStorage from "@react-native-async-storage/async-storage";
import Service from "./service";


/**
 * Responsible for providing barber serices.
 */
class BarberService extends Service {

  async getBarbers(lat = null, lng = null, city = null) {
    const token = await AsyncStorage.getItem('token');
    /*const req = await fetch(`${BASE_API}/barbers?token=${token}&lat=${lat}&lng=${lng}&city=${city}`);
    const json = await req.json();

    return json;*/
    console.log('lat: ' + lat);
    console.log('lg: ' + lng);
    console.log('city: ' + city);

    if (token)
      return {
        loc: city ? city : 'Porto Alegre',
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
            id: 6,
            name: 'Fulano2',
            stars: 2.0
          },
          {
            avatar: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
            id: 7,
            name: 'Fulano3',
            stars: 4.7
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



  async getBarber(id: number) {
    const token = await AsyncStorage.getItem('token');

    /*const req = await fetch(`${BASE_API}/barber/${id}token=${token}`);

    const json = await req.json();
    return json;*/

    if (token)
      return {
        error: '',
        data: {
          available: [
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
          avatar: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
          favorited: false,
          id: 13,
          name: 'Fulano',
          photos: [
            {
              url: 'https://www.betterteam.com/images/barber-job-description-5184x3456-20201124.jpeg?crop=40:21,smart&width=1200&dpr=2'
            },
            {
              url: 'https://i2-prod.manchestereveningnews.co.uk/incoming/article21411590.ece/ALTERNATES/s615/0_gettyimages-1207048163-170667a.jpg'
            }
          ],
          services: [
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
          stars: 3.4,
          testimonials: [
            {
              name: 'Rápido e bom',
              rate: 5,
              body: 'Além de simpático, atendeu de forma bem rápida. Adorei'
            },
            {
              name: 'Bom',
              rate: 4,
              body: 'Recomendo'
            },
            {
              name: 'Cheio',
              rate: 3.5,
              body: 'Bom cabelereiro mas o lugar está sempre cheio :/'
            }
          ]
        }
      };

    return { token: null, error: 'Unknown error', data: null };
  }

  async schedule(userId: any, service: any, selectedYear: any, selectedMonth: any, selectedDay: any, selectedHour: any) {
    const token = await AsyncStorage.getItem('token');
    return null;
    // const req = await fetch(`${BASE_API}/barber/${userId}/appointment`, {
    //     method: 'POST',
    //     headers: {
    //         Accept: 'application/json',
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //         token, 
    //         service, 
    //         year: selectedYear, 
    //         month: selectedMonth, 
    //         day: selectedDay, 
    //         hour: selectedHour
    //     })
    // });

    // const json = await req.json();
    // return json;
  }

  async search(barberName: string) {
    /*const token = await AsyncStorage.getItem('token');
    const req = await fetch(`${BASE_API}/search?q=${barberName}&token=${token}`);
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
            id: 6,
            name: 'Fulano2',
            stars: 2.0
          },
          {
            avatar: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
            id: 7,
            name: 'Fulano3',
            stars: 4.7
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
}

export default BarberService;
