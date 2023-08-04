import { useParams } from "react-router-dom"
import useFetch from "../components/hooks/useFetch"
import { useEffect } from "react"
import ProductInfo from "../components/ProductIdPage/ProductInfo"
import SimilarProducts from "../components/ProductIdPage/SimilarProducts"


const ProductIdPage = () => {

    const { id } = useParams()

    const [ product, getSingleProduct ] = useFetch()

    useEffect(() => {
        getSingleProduct(`/products/${id}`)
    }, [id])

    console.log(product)

  return (
    <div>
        <ProductInfo 
        product={product}
        />
        <SimilarProducts
        product={product}
        />
        </div>
  )
}

export default ProductIdPage