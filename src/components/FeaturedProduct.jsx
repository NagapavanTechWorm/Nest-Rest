import SectionTitle from './SectionTitle'
import ProductsGrid from './ProductsGrid'

const FeaturedProduct = () => {
  return (
    <div className='pt-24'>
        <SectionTitle text='featured Products' />
        <ProductsGrid/>
    </div>
  )
}

export default FeaturedProduct