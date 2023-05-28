<template>
    <div className="Index">
      <Container>
        <Aside>
          <h3>Aside</h3>
        </Aside>
        <Container>
        <Header>
          <h3>Header</h3>
        </Header>
        <Main>
          <h3>Main</h3>
        </Main>
        <Footer>
          <h3>Footer</h3>
        </Footer>
      </Container>
    </Container>
    </div>
  </template>
  <script>
  import './index.css'
  // 解构
  import { defineAsyncComponent } from "vue";
  const Container = defineAsyncComponent(() =>
    import("./Container.vue")
  );
  const Header = defineAsyncComponent(() =>
    import("./Header.vue")
  );
  const Footer = defineAsyncComponent(() =>
    import("./Footer.vue")
  );
  const Main = defineAsyncComponent(() =>
    import("./Main.vue")
  );
  const Aside = defineAsyncComponent(() =>
    import("./Aside.vue")
  );
  // 模块化
  export default {
    name: "Index", //组件名称
    props: {
      // 接收父组件数据
    },
    components: {
      // 定义子组件
      Container,
      Header,
      Footer,
      Main,
      Aside,
    },
    setup() {
      // 这里没有this,直接使用props里数据
      return {};
    },
  };
  </script>