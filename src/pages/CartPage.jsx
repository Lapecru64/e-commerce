import { useDispatch, useSelector } from "react-redux"
import { getCardThunk } from "../store/slices/cart.slice"
import { useEffect } from "react"

const CartPage = () => {

const cart = useSelector(reducer => reducer.cart)

const dispatch = useDispatch()

useEffect(() => {
  dispatch(getCardThunk())
}, [])

  return (
    <div>CartPage</div>
  )
}

export default CartPage
