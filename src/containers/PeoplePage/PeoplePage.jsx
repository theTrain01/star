import React from 'react'
import { getApiResourse } from '../../utils/network';
import { API_PEOPLE } from '../../constants/api';
import styles from './PeoplePage.module.css'
import { getPeopleId, getPeopleImage, } from '../../services/getPeopleData';
import PeopleList from '../../components/PeoplePage/PeopleList';

const PeoplePage = () => {
    const [people, setPeople] = React.useState(null)
    const [errorApi, setErrorApi] = React.useState(false)
    const getResourse = async (url)  => {
        if(url) {
            const res = await getApiResourse(url)
        
            const peopleList = res.results.map(({name, url}) => {
                const id = getPeopleId(url)
                const img = getPeopleImage(id)
                return {
                    id: id,
                    name: name, 
                    img: img
                }
            })

            setPeople(peopleList)
            setErrorApi(false)
        } else {
            setErrorApi(true)
        }
    }
    React.useEffect(() => {
        getResourse(API_PEOPLE)
    }, [])

    return (
        <>
            {errorApi
                ? <h2>ERROR!</h2>
                : people && <PeopleList people = {people}/>
            }
            
        </>
    )
}

export default PeoplePage;