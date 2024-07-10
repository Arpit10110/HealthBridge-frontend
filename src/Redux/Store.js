import {configureStore} from "@reduxjs/toolkit"
import { healthbridgereducer } from "./Reducer"
const store= configureStore({
    reducer:{
        healtbrdigedeatil :healthbridgereducer
    }
})
export default store  