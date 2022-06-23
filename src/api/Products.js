import axios from 'axios';
class ProductsAPI{
    async getAll(){
        return await axios.get("https://my-json-server.typicode.com/typicode/demo/posts");
    }

    getAllStatic(){
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
    }
}
export default ProductsAPI;