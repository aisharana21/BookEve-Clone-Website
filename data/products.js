export function getProductId(productId) {
    let matchingId;

    products.forEach(product => {
        if (product.id === productId) {
            matchingId = product
        }

    })
    return matchingId;

}




export const products = [
    {
        id: "20250730-9f3a72c4b8e54d7a91c1f65d4e8b3a2f",
        image: "images/powerless.jpg",
        name: "Powerless by Lauren Roberts",
        price: 1000
    },
    {
        id: "20250731-9f3a72c4b8e54d7a91c1f65d4e8b3a2f",
        image: "images/fearless.jpg",
        name: "Fearless by Lauren Roberts",
        price: 1000
    },
    {
        id: "20250732-9f3a72c4b8e54d7a91c1f65d4e8b3a2f",
        image: "images/caraal.jpg",
        name: "Caraval by Stephanie Garber",
        price: 900
    },
    {
        id: "20250733-9f3a72c4b8e54d7a91c1f65d4e8b3a2f",
        image: "images/pride and prejudice.jpg",
        name: "Pride and Prejudice by Jane Austin",
        price: 2000
    },
    {
        id: "20250734-9f3a72c4b8e54d7a91c1f65d4e8b3a2f",
        image: "images/legandary.jpg",
        name: "Legandary by Stephanie Garber",
        price: 1200
    },
    {
        id: "20250735-9f3a72c4b8e54d7a91c1f65d4e8b3a2f",
        image: "images/the thousand splendid sun.jpg",
        name: "The Thousand Splendid Sun by Khaleed Hossenie",
        price: 700
    },
    {
        id: "20250736-9f3a72c4b8e54d7a91c1f65d4e8b3a2f",
        image: "images/A muslim women diary.jpg",
        name: "A Muslim Women Diary by Sumaya Amiri",
        price: 800
    },
    {
        id: "20250737-9f3a72c4b8e54d7a91c1f65d4e8b3a2f",
        image: "images/the secretes of divine love.jpg",
        name: "The Secretes of Divine Love by A.E Helwa",
        price: 1200
    },
    {
        id: "20250738-9f3a72c4b8e54d7a91c1f65d4e8b3a2f",
        image: "images/silent patient.jpg",
        name: "The Silent Patient by Alex Michaelides",
        price: 800
    },
    {
        id: "20250739-9f3a72c4b8e54d7a91c1f65d4e8b3a2f",
        image: "images/battleofthebookstore.jpg",
        name: "The Battle Of The Bookstore by Ali Brady",
        price: 800
    },
    {
        id: "20250740-9f3a72c4b8e54d7a91c1f65d4e8b3a2f",
        image: "images/shatterme.jpg",
        name: "Shatter Me by Tehreh Mafi",
        price: 1500
    },
    {
        id: "20250741-9f3a72c4b8e54d7a91c1f65d4e8b3a2f",
        image: "images/unravelme.jpg",
        name: "Unravel Me by Tehreh Mafi",
        price: 1500
    },
    {
        id: "20250742-9f3a72c4b8e54d7a91c1f65d4e8b3a2f",
        image: "images/agoodgirlguide.jpg",
        name: "A Good Girl Guide To Murder by Holly Jackson",
        price: 1500
    }


]