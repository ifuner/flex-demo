<script>
    export default {
      data() {
        return {}
      },
      mounted() {

      },
      methods: {}
    }
</script>

<template>
    <div class="container">
        <!-- 双飞翼布局 -->
        <div class="box">
            <div class="title">
                双飞翼布局（absolute）
            </div>
            <div class="des">
                描述：父盒子相对定位，子盒子left，right绝对定位。center不设置宽，但是要设置margin：0 left/right(盒子的宽度)
            </div>
            <div class="box-inner demo1">
                <div class="main-bgc left">left</div>
                <div class="bgc-1 center">center</div>
                <div class="main-bgc right">right</div>
            </div>

            <div class="code">
                <pre v-highlightjs><code class="css">
.demo1 {
    & > div {
      height: 150px;
      line-height: 150px;
    }
    .left, .right {
      width: 150px;
      position: absolute;
      top: 0;
    }
    .center {
      margin: 0 150px;
    }
    .left {
      left: 0;
    }
    .right {
      right: 0;
    }
  }
                </code></pre>
            </div>
        </div>

        <div class="box">
            <div class="title">
                flex 实现同样效果
            </div>
            <div class="des">
                描述：父盒子设置
                display: flex;
                justify-content: center;
                align-items: flex-start;
                <br/>
                left和right子盒子设置  flex-basis: 150px; (flex-basis 属性用于设置或检索弹性盒伸缩基准值)
                <br/>center 设置 flex-grow: 1; （flex-grow 属性用于设置或检索弹性盒子的扩展比率）
            </div>
            <div class="box-inner demo2">
                <div class="main-bgc left">left</div>
                <div class="bgc-1 center">
                    center
                </div>
                <div class="main-bgc right">right</div>
            </div>
            <div class="code">
                <pre v-highlightjs>
                    <code class="css">
.demo2 {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  // flex-direction: column;
  & > div {
    height: 150px;
    line-height: 150px;
  }

  .left, .right {
    flex-basis: 150px;
  }

  .center {
    flex-grow: 1;
  }
}
                    </code>
                </pre>
            </div>
        </div>
        <div class="box">
            <div class="title">
                垂直水平居中常用手段（1）
            </div>
            <div class="des">
                描述：.demo3{
                display: flex;
                justify-content: center;
                align-items: center;
                height: 150px;
                .left{
                width: 100px;
                height: 100px;
                }
                }
            </div>
            <div class="box-inner demo3">
                <div class="main-bgc left"></div>
            </div>
            <div class="code">
                <pre v-highlightjs>
                    <code class="css">
.demo3 {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  // flex-direction: column;
  .left {
    width: 100px;
    height: 100px;
  }
}
                    </code>
                </pre>
            </div>
        </div>

        <div class="box">
            <div class="title">
                垂直水平居中常用手段（2）
            </div>
            <div class="des">
                描述：.demo4{
                position: relative;
                height: 150px;
                .left{
                width: 100px;
                height: 100px;
                position: absolute;
                right: 0;
                top: 0;
                bottom: 0;
                left: 0;
                margin:auto;
                }
                }

            </div>
            <div class="box-inner demo4">
                <div class="main-bgc left"></div>
            </div>
            <div class="code">
                <pre v-highlightjs>
                    <code class="css">
.demo4 {
  position: relative;
  height: 150px;
  .left {
    width: 100px;
    height: 100px;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }
}
                    </code>
                </pre>
            </div>
        </div>
        <div class="box">
            <div class="title">
                垂直水平居中常用手段（3）
            </div>
            <div class="des">
                描述：.demo5{
                position: relative;
                height: 150px;
                .left{
                width: 100px;
                height: 100px;
                position: absolute;
                left: 50%;
                top: 50%;
                margin:-50px 0 0 -50px;
                }
                }
            </div>
            <div class="box-inner demo5">
                <div class="main-bgc left"></div>
            </div>
            <div class="code">
                <pre v-highlightjs>
                    <code class="css">
.demo5 {
  position: relative;
  height: 150px;
  .left {
    width: 100px;
    height: 100px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -50px 0 0 -50px;
  }
}
                    </code>
                </pre>
            </div>
        </div>

        <div class="box">
            <div class="title">
                垂直水平居中常用手段（4）
            </div>
            <div class="des">
                描述：.demo6{
                position: relative;
                height: 150px;
                .left{
                width: 100px;
                height: 100px;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%,-50%);
                }
                }
            </div>
            <div class="box-inner demo6">
                <div class="main-bgc left"></div>
            </div>
            <div class="code">
                <pre v-highlightjs>
                    <code class="css">
.demo6 {
  position: relative;
  height: 150px;
  .left {
    width: 100px;
    height: 100px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
                    </code>
                </pre>
            </div>
        </div>

        <!--flex 常用属性-->
        <div class="box">
            <div class="title">
                flex 常用（order盒子排序）
            </div>
            <div class="des">
                描述：order(css调整盒子顺序)
            </div>
            <div class="box-inner demo7">
                <div class="main-bgc left">left</div>
                <div class="bgc-1 center">center</div>
                <div class="main-bgc right">right</div>
            </div>
            <div class="code">
                <pre v-highlightjs>
                    <code class="css">
.demo7 {
  display: flex;
  & > div {
    width: 150px;
    height: 150px;
    line-height: 150px;
  }
  .right{
     order:1;
   }
  .center{
    order:3;
  }
  .left{
    order:3;
  }
}
                    </code>
                </pre>
            </div>
        </div>


        <div class="box">
            <div class="title">
                flex 常用（左对齐）
            </div>
            <div class="des">
                描述：
                display: flex;
                justify-content: flex-start;
            </div>
            <div class="box-inner demo8">
                <div class="main-bgc left">left</div>
                <div class="bgc-1 center">center</div>
                <div class="main-bgc right">right</div>
            </div>
            <div class="code">
                <pre v-highlightjs>
                    <code class="css">
.demo8 {
  display: flex;
  justify-content: flex-start;
  height: 200px;
  & > div {
    width: 150px;
    height: 150px;
    line-height: 150px;
  }
}
                    </code>
                </pre>
            </div>
        </div>

        <div class="box">
            <div class="title">
                flex 常用（右对齐）
            </div>
            <div class="des">
                描述： display: flex;
                justify-content: flex-start;
            </div>
            <div class="box-inner demo9">
                <div class="main-bgc left">left</div>
                <div class="bgc-1 center">center</div>
                <div class="main-bgc right">right</div>
            </div>
            <div class="code">
                <pre v-highlightjs>
                    <code class="css">
.demo9 {
  display: flex;
  justify-content: flex-end;
  height: 200px;
  & > div {
    width: 150px;
    height: 150px;
    line-height: 150px;
  }
}
                    </code>
                </pre>
            </div>
        </div>

        <div class="box">
            <div class="title">
                flex 常用（居中不分散）
            </div>
            <div class="des">
                描述：  display: flex;
                justify-content: center;
            </div>
            <div class="box-inner demo10">
                <div class="main-bgc left">left</div>
                <div class="bgc-1 center">center</div>
                <div class="main-bgc right">right</div>
            </div>
            <div class="code">
                <pre v-highlightjs>
                    <code class="css">
.demo10 {
  display: flex;
  justify-content: center;
  height: 200px;
  & > div {
    width: 150px;
    height: 150px;
    line-height: 150px;
  }
}
                    </code>
                </pre>
            </div>
        </div>

        <div class="box">
            <div class="title">
                flex 常用（两端分散对齐）
            </div>
            <div class="des">
                描述：  display: flex;
                justify-content: center;
            </div>
            <div class="box-inner demo11">
                <div class="main-bgc left">left</div>
                <div class="bgc-1 center">center</div>
                <div class="main-bgc right">right</div>
            </div>
            <div class="code">
                <pre v-highlightjs>
                    <code class="css">
.demo11 {
  display: flex;
  justify-content: space-between;
  height: 200px;
  & > div {
    width: 150px;
    height: 150px;
    line-height: 150px;
  }
}
                    </code>
                </pre>
            </div>
        </div>

        <div class="box">
            <div class="title">
                flex 常用（环绕居中）
            </div>
            <div class="des">
                描述：  display: flex;
                justify-content: space-around;
            </div>
            <div class="box-inner demo12">
                <div class="main-bgc left">left</div>
                <div class="bgc-1 center">center</div>
                <div class="main-bgc right">right</div>
            </div>
            <div class="code">
                <pre v-highlightjs>
                    <code class="css">
.demo12 {
  display: flex;
  justify-content: space-around;
  height: 200px;
  & > div {
    width: 150px;
    height: 150px;
    line-height: 150px;
  }
}
                    </code>
                </pre>
            </div>
        </div>


        <div class="box">
            <div class="title">
                flex 常用（ flex-direction:column）
            </div>
            <div class="des">
                描述：  display: flex;
                flex-direction: column;(规定盒子的方向。  )
            </div>
            <div class="box-inner demo13">
                <div class="main-bgc left">left</div>
                <div class="bgc-1 center">center</div>
                <div class="main-bgc right">right</div>
            </div>
            <div class="code">
                <pre v-highlightjs>
                    <code class="css">
.demo13 {
  display: flex;
  flex-direction: column;
  & > div {
    width: 150px;
    height: 150px;
    line-height: 150px;
  }
}

                    </code>
                </pre>
            </div>
        </div>

        <div class="box">
            <div class="title">
                flex 常用（ flex-direction:column-reverse）
            </div>
            <div class="des">
                描述：  display: flex;
                flex-direction: column-reverse;(规定盒子的方向。  )
            </div>
            <div class="box-inner demo14">
                <div class="main-bgc left">left</div>
                <div class="bgc-1 center">center</div>
                <div class="main-bgc right">right</div>
            </div>
            <div class="code">
                <pre v-highlightjs>
                    <code class="css">
.demo14 {
   display: flex;
   flex-direction: column-reverse;
   & > div {
     width: 150px;
     height: 150px;
     line-height: 150px;
   }
 }

                    </code>
                </pre>
            </div>
        </div>

        <div class="box">
            <div class="title">
                demo1常用布局
            </div>
            <div class="des">
                描述：(浮动解决，保证兼容)
            </div>
            <div class="box-inner demo15">
                <div class="left">
                    <div class="img"></div>
                </div>
                <div class="right">
                    <div class="right-inner">
                        <div class="right-box"></div>
                        <div class="right-box"></div>
                        <div class="right-box"></div>
                    </div>
                </div>
            </div>
            <div class="code">
                <pre v-highlightjs>
                    <code class="css">
.demo15 {
  & > div {
    height: 150px;
    line-height: 150px;
  }
  .left{
    width: 150px;
    float: left;
    position: relative;
  }
  .right{
    overflow: hidden;
  }

  .img{
    width: 100px;
    height: 100px;
    background-color: #ccc;
    border-radius: 50%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;

  }

  .right-inner{
    width: 100%;
    height: 100%;
    padding:10px 30px;
    box-sizing: border-box;
    .right-box{
      width: 100%;
      height: 30px;
      background-color: #ccc;
      margin-bottom: 20px;
      &:last-child{
        margin-bottom: 0;
      }
    }
  }
}

                    </code>
                </pre>
            </div>
        </div>

        <div class="box">
            <div class="title">
                demo2常用布局
            </div>
            <div class="des">
                描述：详情看css
            </div>
            <div class="box-inner demo16">
                <div class="left">
                    <div class="img"></div>
                    <div class="ab-one"></div>
                    <div class="ab-two"></div>
                </div>
                <div class="right">
                    <div class="right-inner">
                        <div class="right-box"></div>
                        <div class="right-box"></div>
                        <div class="right-box"></div>
                    </div>
                </div>
            </div>
            <div class="code">
                <pre v-highlightjs>
                    <code class="css">
.demo16 {
  & > div {
    height: 150px;
    line-height: 150px;
  }
  .left{
    width: 100%;
    text-align: center;
    position: relative;
  }
  .ab-one,
  .ab-two{
    width: 100px;
    height: 30px;
    background-color: #ccc;
    position: absolute;
    top: 20px;
  }
  .ab-one{
    left: 20px;
  }
  .ab-two{
    right: 20px;
  }

  .right{
    overflow: hidden;
  }
  .img{
    width: 100px;
    height: 100px;
    background-color: #ccc;
    border-radius: 50%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;

  }

  .right-inner{
    width: 100%;
    height: 100%;
    padding:10px 30px;
    box-sizing: border-box;
    .right-box{
      width: 100%;
      height: 30px;
      background-color: #ccc;
      margin-bottom: 20px;
      &:last-child{
        margin-bottom: 0;
      }
    }
  }
}

                    </code>
                </pre>
            </div>
        </div>

        <footer>
            待补充...
        </footer>
    </div>
</template>

<style rel="stylesheet/scss" lang="scss">
    @import "~_common/style/flexible.scss";
    @import "./demo.scss";
</style>
