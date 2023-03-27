const request = window.indexedDB.open('photodb', 1);

request.onerror = function() {
    console.log("database error", request.error);
};

request.onsuccess = function() {
    console.log('database opened');
};

request.onupgradeneeded = function() {
    const db = request.result;
    db.createObjectStore('photos', { keyPath: 'id' });
    console.log('database setup');
};

async function storePhotos(photoData) {
    const db = request.result;
    const transaction = db.transaction("photos", "readwrite"); 
    const photoStore = transaction.objectStore("photos");
    let photoblob;
    for (const photo of photoData) {
        try {
            photoblob = await fetch(photo.url).then((response) => response.blob());
        } catch (error) {
            console.log("fetching error", error);
            continue;
        }
        const record = {
            photo: photoblob
        };
        const request = photoStore.add(record);

        request.onsuccess = function() { 
            console.log("photo added to the store");
        };
    }
}

export { storePhotos };