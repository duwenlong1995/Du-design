import dButton from './button/index'
import dInput from './input/index'
const install = (app:any) => {
    app.use(dButton);
    app.use(dInput);
};
// 按需导入
const DUI={
    install,
};
export {dButton,dInput};
export default DUI;