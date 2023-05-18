import axios from "axios";

const baseurl = "https://rickandmortyapi.com/api"

export const getLocationById = async (locationId) => {
    try {
        const res = await axios.get(`${baseurl}/location/${locationId}`);

        return res.data;
    }   catch (error) {
        console.error(error);
    }
};