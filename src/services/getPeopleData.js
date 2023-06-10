import { 
    SWAPI_PEOPLE, HTTPS, SWAPI_ROOT, 
    GUIDE_ROOT_EXTENSIONS, URL_IMAGE_PERSON 
} from "@constants/api";

const getId = (url, category) => {
    const id = url.replace(HTTPS+SWAPI_ROOT+category, '').replace(/[^0-9]/gi, '')
    return id
}

export const getPeopleId = url => getId(url, SWAPI_PEOPLE)

export const getPeopleImage = id => `${URL_IMAGE_PERSON}/${id+GUIDE_ROOT_EXTENSIONS}` 