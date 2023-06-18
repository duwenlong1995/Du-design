import dButton from './button/index'
import dInput from './input/index'
// import dTable from './table/index'
import dCard from './card/index'
const install = (app:any) => {
    app.use(dButton);
    app.use(dInput);
    // app.use(dTable);
    app.use(dCard);
};
// 按需导入
const DUI={
    install,
};
export {dButton,dInput,dCard};
export default DUI;