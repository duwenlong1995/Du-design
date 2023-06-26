
import dTable from '../table/index.vue'

dTable.install= (app:any) =>{
    app.component(dTable.name,dTable)
}
export default dTable