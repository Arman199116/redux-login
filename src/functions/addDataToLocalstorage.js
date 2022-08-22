export const addDataToLocalstorage = ( {data}) => {
    if(data?.email) {
        localStorage.setItem(data.email, JSON.stringify(data)) ;
    }
}