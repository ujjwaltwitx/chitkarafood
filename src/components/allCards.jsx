import { async } from "@firebase/util";
import getData from "../Utilites/firbase";

async function AllCards(){
    var data = await getData();
    console.log(data);
}
 
export default AllCards;