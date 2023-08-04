import { useEffect } from "react"
import useFetch from "../hooks/useFetch"

const SimilarProducts = ({ product }) => {

const [ productByCategory, getProductByCategory ] = useFetch()

useEffect(() => {
    if(product) {
    getProductByCategory(`/products?categoryId=${product.categoryId}`)
    }
}, [product])


  return (
    <div>SimilarProducts</div>
  )
}

export default SimilarProducts