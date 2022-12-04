import { useState } from "react"





const useFilter = () => {

    const [uloc, setLoc] = useState('');
    const [bedRooms, setBedRooms] = useState('');
    const [bathRooms, setBathRooms] = useState('');
    const [utype, setType] = useState('');
    const [ulower, setLower] = useState(1000000);
    const [uupper, setUpper] = useState(10000000);


    return { uloc,bedRooms,bathRooms,utype,ulower,uupper,setLoc,setBedRooms,setBathRooms,setType,setLower,setUpper };

}

export default useFilter;