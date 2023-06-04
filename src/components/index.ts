import dButton from './button/index'
import dInput from './input/index'
import dTable from './table/index'
const install = (app:any) => {
    app.use(dButton);
    app.use(dInput);
    app.use(dTable);
};
// 按需导入
const DUI={
    install,
};
export {dButton,dInput,dTable};
export default DUI;