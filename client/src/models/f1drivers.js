export const getAllDrivers = async () => {
    const req = await fetch("http://localhost:3000/f1drivers", {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        metho: "GET"
    });
    const data = await req.json();
    return {
        status:req.status,
        message: data.message,
        payload: data.payload,
    }
}


export const getF1driverById = async (id) => {
    const req = await fetch(`http://localhost:3000/f1drivers/${id}`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        metho: "GET"
    });
    const data = await req.json();
    return {
        status:req.status,
        message: data.message,
        payload: data.payload,
    }
}



export const CreateF1driver = async (formData) => {
    const req = await fetch(`http://localhost:3000/f1drivers/`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        method: "POST",
        body:JSON.stringify(formData)
    });
    const data = await req.json();
    return {
        status:req.status,
        message: data.message,
        payload: data.payload,
    }
}


export const updateF1driver = async (id, formData) => {
    const req = await fetch(`http://localhost:3000/f1drivers/${id}`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        method: "PUT",
        body:JSON.stringify(formData)
    });
    const data = await req.json();
    return {
        status:req.status,
        message: data.message,
        payload: data.payload,
    }
}


export const deleteF1driver = async (id) => {
    const req = await fetch(`http://localhost:3000/f1drivers/${id}`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        method: "DELETE",
    });
    const data = await req.json();
    return {
        status:req.status,
        message: data.message,
        payload: data.payload,
    }
}

