
export const getServiceDetails = async (id) =>{
    const res = await fetch(`https://pc-repair-pros.vercel.app/services/api/${id}`)
    const service =await res.json()
    return service
}