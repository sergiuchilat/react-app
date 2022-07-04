import axios from 'axios';
class ProductsAPI{
    getAll(){
        return [
            {
              "id": 1,
              "title": "Post 14535"
            },
            {
              "id": 2,
              "title": "Post 2"
            },
            {
              "id": 3,
              "title": "Post 3"
            }
          ];
        //return await axios.get("https://my-json-server.typicode.com/typicode/demo/posts");
    }
}
export default ProductsAPI;