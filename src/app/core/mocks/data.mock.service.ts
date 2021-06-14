
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root'
})
export class MockDataService implements InMemoryDbService {
  constructor() { }
  createDb() {
    return {
      schedules: [
        {
          "id": 10,
          "initialHour": "08:00",
          "endHour": "17:00"
        },
        {
          "id": 11,
          "initialHour": "07:00",
          "endHour": "16:00"
        },
        {
          "id": 12,
          "initialHour": "06:00",
          "endHour": "15:00"
        }
      ],
      dealers: [
        {
          "id": 4,
          "name": "Distribuidora 3",
          "notificationEmail": "d3@gmail.com",
          "alertEmail": "d3@gmail.com",
          "schedule": {
            "id": 12,
            "initialHour": "06:00",
            "endHour": "15:00"
          }
        },
        {
          "id": 5,
          "name": "Distribuidora 3",
          "notificationEmail": "d3@gmail.com",
          "alertEmail": "d3@gmail.com",
          "schedule": {
            "id": 12,
            "initialHour": "06:00",
            "endHour": "15:00"
          }
        },
        {
          "id": 6,
          "name": "Distribuidora 1",
          "notificationEmail": "d1@gmail.com",
          "alertEmail": "d1@gmail.com",
          "schedule": {
            "id": 12,
            "initialHour": "06:00",
            "endHour": "15:00"
          }
        }
      ],
      products: [
        {
          "id": 23,
          "name": "Libro 1",
          "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          "amount": 25
        },
        {
          "id": 24,
          "name": "Libro 2",
          "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          "amount": 60
        },
        {
          "id": 25,
          "name": "libro 4",
          "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          "amount": 333
        },
      ],
      users: [
        {
          "id": 18,
          "name": "John doe",
          "email": "john@gmail.com",
          "phone": "+50212345678"
        },
        {
          "id": 19,
          "name": "Steve doe",
          "email": "steve@gmail.com",
          "phone": "+50212345678"
        },
        {
          "id": 26,
          "name": "Jane doe",
          "email": "jane@gmail.com",
          "phone": "+5021234567890"
        },
      ],
      'authorized-channels': [
        {
          "id": 15,
          "name": "Canal 1"
        },
        {
          "id": 16,
          "name": "Canal 2"
        },
        {
          "id": 29,
          "name": "Canal 5"
        },
        {
          "id": 30,
          "name": "Canal 10"
        }
      ]
    }
  }
}
