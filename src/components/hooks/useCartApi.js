import { useDispatch } from "react-redux"
import { addCartG, getCardThunk } from "../../store/slices/cart.slice"
import getConfigToken from "../../utils/getConfigToken"

const useCartApi = () => {
 const baseUrl = "https://e-commerce-api-v2.academlo.tech/api/v1"

const dispatch = useDispatch()


//POST
const addProductInCart = (data) => {
    const url = `${baseUrl}/cart`
    axios.post(url, data, getConfigToken())
    .then(res => {
        console.log(res.data)
        dispatch(getCardThunk())
    })
    .catch(err => console.log(err))
}

//DELETE


return { addProductInCart }

}




export default useCartApi