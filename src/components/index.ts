import dButton from './button/index'
import dInput from './input/index'
import dTable from './table/index'
import dCard from './card/index'
import dTableColumn from './table/column/index'
const install = (app:any) => {
    app.use(dButton);
    app.use(dInput);
    app.use(dTable);
    app.use(dCard);
    app.use(dTableColumn);
};
// 按需导入
const DUI={
    install,
};
export {dButton,dInput,dCard,dTable,dTableColumn};
export default DUI;