
import dTableColumn from '../column/index.vue'

dTableColumn.install= (app:any) =>{
    app.component(dTableColumn.name,dTableColumn)
}
export default dTableColumn