import React from 'react';
import PropTypes from 'prop-types';

import { withErrorApi } from '@hoc-helpers/withErrorApi';
import PeopleList from '@components/PeoplePage/PeopleList';

import { getPeopleImage, getPeopleId} from '@services/getPeopleData'; 
import { getApiResourse } from '@utils/network';
import { API_PEOPLE } from '@constants/api'

const PeoplePage = ({ setErrorApi }) => {
    const [people, setPeople] = React.useState(null);

    const getResource = async (url) => {
        const res = await getApiResourse(url);

        if (res) {
            const peopleList = res.results.map(({name, url}) => {
                const id = getPeopleId(url);
                const img = getPeopleImage(id);
    
                return {
                    id: id,
                    name: name,
                    img: img,
                }
            });
    
            setPeople(peopleList);
        } else {
            setErrorApi(true)
        }
    };

    React.useEffect(() => {
        getResource(API_PEOPLE);
    }, []);

    return (
        <>
            <h2 className='header__text'>Navigation</h2>
            {people && <PeopleList people={people} />}
        </>
    )
}

PeoplePage.propTypes = {
	setErrorApi: PropTypes.func,
}

export default withErrorApi(PeoplePage);