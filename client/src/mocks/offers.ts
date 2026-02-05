import type { FullOffer } from "../types/offers";

const offers: FullOffer[] = [
    {
        id: 'bbb8dec3-3f92-4d64-9a8e-c6db5d38c2b',
        title: 'Wood and stone place',
        description: 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families',
        type: 'apartment',
        price: 370,
        images: [
            '20.jpg',
            '16.jpg',
            '15.jpg',
            '2.jpg',
            '7.jpg'
        ],
        city: {
            name: 'Amsterdam',
            location: {
                latitude: 48.85561,
                longitude: 2.334499,
                zoom: 13
            }
        },
        location: {
            latitude: 48.868618000000004,
            longitude: 2.342499,
            zoom: 18
        },
        goods: [
            'Heating',
            'Wi-Fi',
            'Fridge',
            'Laptop friendly workspace',
            'Baby seat',
            'Air conditioning',
            'Washer',
            'Towels',
            'Dishwasher',
            'Kitchen',
            'Washing machine',
            'Breakfast',
            'Coffee machine'
        ],
        host: {
            isPro: true,
            name: 'Angelina',
            avatarUrl: '../../public/img/Angelina.jpg'
        },
        isPremium: false,
        isFavorite: true,
        rating: 4.9,
        bedrooms: 2,
        maxAdults: 3
    },
    {
        id: 'a1b2c3d4-5e6f-7g8h-9i0j-k1l2m3n4o5p6',
        title: 'Modern Loft in City Center',
        description: 'Stylish loft apartment with panoramic city views. Perfect for business travelers and couples',
        type: 'room',
        price: 120,
        images: [
            'loft-1.jpg',
            'loft-2.jpg',
            'loft-3.jpg',
            'loft-4.jpg',
            'loft-5.jpg'
        ],
        city: {
            name: 'Amsterdam',
            location: {
                latitude: 52.370216,
                longitude: 4.895168,
                zoom: 13
            }
        },
        location: {
            latitude: 52.37454,
            longitude: 4.897976,
            zoom: 16
        },
        goods: [
            'Wi-Fi',
            'Air conditioning',
            'Coffee machine',
            'Heating',
            'TV',
            'Kitchen',
            'Towels',
            'Laptop friendly workspace'
        ],
        host: {
            isPro: true,
            name: 'Max',
            avatarUrl: '../../public/img/avatar-max.jpg'
        },
        isPremium: true,
        isFavorite: false,
        rating: 4.7,
        bedrooms: 1,
        maxAdults: 2
    },
    {
        id: 'c3d4e5f6-7g8h-9i0j-k1l2-m3n4o5p6q7r8',
        title: 'Cozy Cottage by the Lake',
        description: 'Quiet lakeside retreat with fireplace and private dock. Ideal for nature lovers',
        type: 'house',
        price: 280,
        images: [
            'cottage-1.jpg',
            'cottage-2.jpg',
            'cottage-3.jpg',
            'cottage-4.jpg',
            'cottage-5.jpg'
        ],
        city: {
            name: 'Amsterdam',
            location: {
                latitude: 50.938361,
                longitude: 6.959974,
                zoom: 13
            }
        },
        location: {
            latitude: 50.941346,
            longitude: 6.958186,
            zoom: 14
        },
        goods: [
            'Wi-Fi',
            'Kitchen',
            'Towels',
            'Heating',
            'Fireplace',
            'Barbecue',
            'Fridge',
            'Washing machine',
            'Parking',
            'Garden'
        ],
        host: {
            isPro: false,
            name: 'Sarah',
            avatarUrl: '../../public/img/Sarah.jpg'
        },
        isPremium: true,
        isFavorite: true,
        rating: 4.9,
        bedrooms: 3,
        maxAdults: 5
    },
    {
        id: 'd5e6f7g8-9h0i-1j2k-3l4m-5n6o7p8q9r0s',
        title: 'Luxury Penthouse with Pool',
        description: 'Exclusive penthouse with private pool and rooftop terrace. Breathtaking city skyline views',
        type: 'apartment',
        price: 650,
        images: [
            'penthouse-1.jpg',
            'penthouse-2.jpg',
            'penthouse-3.jpg',
            'penthouse-4.jpg',
            'penthouse-5.jpg'
        ],
        city: {
            name: 'Amsterdam',
            location: {
                latitude: 48.85561,
                longitude: 2.334499,
                zoom: 13
            }
        },
        location: {
            latitude: 48.860611,
            longitude: 2.337249,
            zoom: 17
        },
        goods: [
            'Air conditioning',
            'Wi-Fi',
            'Private Pool',
            'Jacuzzi',
            'Sauna',
            'Heating',
            'Kitchen',
            'Towels',
            'Coffee machine',
            'Washing machine',
            'Dryer',
            'TV',
            'Gym',
            'Concierge'
        ],
        host: {
            isPro: true,
            name: 'Pierre',
            avatarUrl: '../../public/img/Pierre.jpg'
        },
        isPremium: true,
        isFavorite: false,
        rating: 5.0,
        bedrooms: 4,
        maxAdults: 6
    },
    {
        id: 'f9g0h1i2-3j4k-5l6m-7n8o-9p0q1r2s3t4u',
        title: 'Studio Near Central Station',
        description: 'Compact and modern studio perfect for solo travelers. Walking distance to all major attractions',
        type: 'hotel',
        price: 85,
        images: [
            'studio-1.jpg',
            'studio-2.jpg',
            'studio-3.jpg',
            'studio-4.jpg',
            'studio-5.jpg'
        ],
        city: {
            name: 'Amsterdam',
            location: {
                latitude: 50.85045,
                longitude: 4.34878,
                zoom: 13
            }
        },
        location: {
            latitude: 50.846557,
            longitude: 4.351697,
            zoom: 15
        },
        goods: [
            'Wi-Fi',
            'Heating',
            'Kitchenette',
            'TV',
            'Towels',
            'Coffee machine',
            'Fridge',
            'Microwave',
            'Iron',
            'Hair dryer'
        ],
        host: {
            isPro: false,
            name: 'Thomas',
            avatarUrl: '../../public/img/Thomas.jpg'
        },
        isPremium: false,
        isFavorite: true,
        rating: 4.2,
        bedrooms: 1,
        maxAdults: 1
    }
];

export { offers };