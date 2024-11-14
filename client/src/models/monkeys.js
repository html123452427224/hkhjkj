export const getAllMonkeys = async () => {
    const req = await fetch("http://localhost:3000/monkeys", {
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
export const getMonkeyById = async (id) => {
    const req = await fetch(`http://localhost:3000/monkeys/${id}`, {
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
export const createMonkey = async (formData) => {
    const req = await fetch(`http://localhost:3000/monkeys/`, {
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
export const udpateMonkey = async (id, formData) => {
    const req = await fetch(`http://localhost:3000/monkeys/${id}`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        method: "PUT",
        
    });
    const data = await req.json();
    return {
        status:req.status,
        message: data.message,
        payload: data.payload,
    }
}
export const deleteMonkey = async (id) => {
    const req = await fetch(`http://localhost:3000/monkeys/`, {
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
