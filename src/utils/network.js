export const getApiResourse = async (url) => {
    try {
        const res = await fetch(url)

        if(!res.ok) {
            console.log('Could not fetch. ', res.status)
            return false
        }

        return await res.json();
    } catch (error) {
        console.log('Could not fetch. ', error.message)
        return false
    }
}