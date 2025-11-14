const req = new Promise((resolve, reject) => {
    setTimeout(() => {
        const obj = [1, 2, 3];
        // {
        //     abc: "123",
        //     def: "456",
        // }
        console.log("here was created obj", obj);
        resolve(obj);
    }, 1000);
});

const req2 = req.then((data) => {
    console.log("here was responsed", data);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Array.isArray(data)) {
                reject("this is not a object");
                return;
            }
            data.xyz = "000";
            console.log("here was checked, changed and requested", data);
            resolve(data);
        }, 2000);
    });
});

req2.then(async (data) => {
    console.log("finish", data);
}).catch((error) => {
    console.log(error);
});
