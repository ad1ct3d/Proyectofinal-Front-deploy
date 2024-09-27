import { Property } from "@/app/home/page";


export const mockData: Property[] = 
[
    {
        "id": 1,
        "name": "Hotel Paraíso",
        "location": "Playa del Carmen",
        "owner": { "uuid": "owner-uuid-1" }, 
        "type": "HOTEL",
        "propertyImages": ["https://res.cloudinary.com/dhrys2lqz/image/upload/v1726539006/hotel_1_jazez1.jpg", "hotel2.jpg"],
        "rooms": [
            {
                "room_number": 101,
                "capacity": 2,
                "price_per_day": 150,
                "disponibility": "avaiable",
                "roomImages": ["room1.jpg", "room2.jpg"],
                "services": ["WiFi", "Desayuno"],
                "category": "STANDARD"
            },
            {
                "room_number": 102,
                "capacity": 4,
                "price_per_day": 200,
                "disponibility": "avaiable",
                "roomImages": ["room3.jpg"],
                "services": ["WiFi", "Estacionamiento"],
                "category": "STANDARD"
            }
        ]
    },
    {   
        "id": 2,
        "name": "Cabaña en la Montaña",
        "location": "San Martín de los Andes",
        "owner": { "uuid": "owner-uuid-2" },
        "type": "CABANA",
        "propertyImages": ["https://res.cloudinary.com/dhrys2lqz/image/upload/v1726538999/Estandar_1_pivn2o.jpg"],
        "rooms": [
            {
                "room_number": 1,
                "capacity": 3,
                "price_per_day": 100,
                "disponibility": "avaiable",
                "roomImages": ["room4.jpg"],
                "services": ["WiFi", "Chimenea"],
                "category": "STANDARD"
            }
        ]
    },
    {
        "id": 3,
        "name": "Departamento Centro",
        "location": "Buenos Aires",
        "owner": { "uuid": "owner-uuid-3" },
        "type": "DEPARTAMENTO",
        "propertyImages": ["https://res.cloudinary.com/dhrys2lqz/image/upload/v1726539011/suite_5_qqnvmz.jpg"],
        "rooms": [
            {
                "room_number": 1,
                "capacity": 2,
                "price_per_day": 120,
                "disponibility": "avaiable",
                "roomImages": ["room5.jpg"],
                "services": ["WiFi"],
                "category": "STANDARD"
            }
        ]
    },
    {
        "id": 4,
        "name": "Hotel Playa",
        "location": "Cancún",
        "owner": { "uuid": "owner-uuid-4" },
        "type": "HOTEL",
        "propertyImages": ["https://res.cloudinary.com/dhrys2lqz/image/upload/v1726670522/RoyalSolaris_flrphe.jpg"],
        "rooms": [
            {
                "room_number": 201,
                "capacity": 2,
                "price_per_day": 180,
                "disponibility": "reserved",
                "roomImages": ["room6.jpg"],
                "services": ["WiFi", "Desayuno"],
                "category": "DELUXE"
            }
        ]
    },
    {
        "id": 5,
        "name": "Cabaña del Bosque",
        "location": "Bariloche",
        "owner": { "uuid": "owner-uuid-5" },
        "type": "CABANA",
        "propertyImages": ["https://res.cloudinary.com/dhrys2lqz/image/upload/v1726538999/estandar_3_kgamzy.jpg"],
        "rooms": [
            {
                "room_number": 1,
                "capacity": 4,
                "price_per_day": 150,
                "disponibility": "avaiable",
                "roomImages": ["room7.jpg"],
                "services": ["WiFi", "Chimenea", "Desayuno"],
                "category": "STANDARD"
            }
        ]
    },
    {
        "id": 6,
        "name": "Departamento Moderno",
        "location": "Santiago",
        "owner": { "uuid": "owner-uuid-6" },
        "type": "DEPARTAMENTO",
        "propertyImages": ["https://res.cloudinary.com/dhrys2lqz/image/upload/v1726539005/Habitacion_suite_uji2sn.jpg"],
        "rooms": [
            {
                "room_number": 1,
                "capacity": 2,
                "price_per_day": 130,
                "disponibility": "avaiable",
                "roomImages": ["room8.jpg"],
                "services": ["WiFi", "Estacionamiento"],
                "category": "STANDARD"
            }
        ]
    },
    {
        "id": 7,
        "name": "Hotel del Lago",
        "location": "Villa la Angostura",
        "owner": { "uuid": "owner-uuid-7" },
        "type": "HOTEL",
        "propertyImages": ["https://res.cloudinary.com/dhrys2lqz/image/upload/v1726539009/Suite_1_yim8fz.jpg"],
        "rooms": [
            {
                "room_number": 301,
                "capacity": 2,
                "price_per_day": 250,
                "disponibility": "avaiable",
                "roomImages": ["room9.jpg"],
                "services": ["WiFi", "Spa"],
                "category": "SUITE"
            }
        ]
    },
    {
        "id": 8,
        "name": "Cabaña Río",
        "location": "El Bolsón",
        "owner": { "uuid": "owner-uuid-8" },
        "type": "CABANA",
        "propertyImages": ["https://res.cloudinary.com/dhrys2lqz/image/upload/v1726538999/Est%C3%A1ndar_2_jodrbj.jpg"],
        "rooms": [
            {
                "room_number": 1,
                "capacity": 5,
                "price_per_day": 200,
                "disponibility": "avaiable",
                "roomImages": ["room10.jpg"],
                "services": ["WiFi"],
                "category": "STANDARD"
            }
        ]
    },
    {
        "id": 9,
        "name": "Departamento en la Playa",
        "location": "Mendoza",
        "owner": { "uuid": "owner-uuid-9" },
        "type": "DEPARTAMENTO",
        "propertyImages": ["https://res.cloudinary.com/dhrys2lqz/image/upload/v1726539008/multiple_2_qpfll7.jpg"],
        "rooms": [
            {
                "room_number": 1,
                "capacity": 3,
                "price_per_day": 140,
                "disponibility": "reserved",
                "roomImages": ["room11.jpg"],
                "services": ["WiFi", "Estacionamiento"],
                "category": "STANDARD"
            }
        ]
    },
    {
        "id": 10,
        "name": "Hotel Boutique",
        "location": "Salta",
        "owner": { "uuid": "owner-uuid-10" },
        "type": "HOTEL",
        "propertyImages": ["https://res.cloudinary.com/dhrys2lqz/image/upload/v1726670878/ClaridgeHotel_qet4cq.jpg"],
        "rooms": [
            {
                "room_number": 401,
                "capacity": 2,
                "price_per_day": 220,
                "disponibility": "avaiable",
                "roomImages": ["room12.jpg"],
                "services": ["WiFi", "Desayuno", "Spa"],
                "category": "STANDARD"
            }
        ]
    }
]
