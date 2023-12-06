import { ProductCategoryWithChildren } from "@lib/data"
import ParentCategoryTemplate from "./parent-category"
import ChildCategoryTemplate from "./child-category"


type CategoryTemplateProps = {
  categories: ProductCategoryWithChildren[]
}

const CategoryTemplate: React.FC<CategoryTemplateProps> = ({ categories }) => {


  const category = categories[categories.length - 1]
  const parents = categories.slice(0, categories.length - 1)


  if ((category.category_children).length > 0){
    var categorie = <ParentCategoryTemplate categories={categories}/>
  } else {
    var categorie = <ChildCategoryTemplate/>
  }


  return (
    <div className="bg-gray-50">
      {categorie}
    </div>
  )
}

export default CategoryTemplate
