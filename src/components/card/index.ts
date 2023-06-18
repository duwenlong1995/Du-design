import dCard from '../card/index.vue'

dCard.install= (app:any) =>{
    app.component(dCard.name,dCard)
}
export default dCard