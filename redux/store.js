import{createStore} from  "redux"
import rootRenders from "./action/reducer"

const store = createStore(rootRenders)

export default store