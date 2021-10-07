import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getById} from "../ApiService";

export default function DetailsPage(){

    const {id} = useParams()

    const [item, setItem] = useState([])

    useEffect(() => {
        getById(id).then(data => setItem(data))
            .catch(error => console.log(error))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <>
            <h4>{item.description}</h4>
            <p>{item.id}</p>
            <p>{item.status}</p>
        </>
    )

}