if ("serviceWorker" in navigator) {
  const serviceWorker = navigator.serviceWorker;

  serviceWorker.getRegistrations
    ? serviceWorker.getRegistrations().then(function (sws) {
      sws.forEach(function (sw) {
        sw.unregister();
        console.log("sw unregister 1");
      });
    })
    : serviceWorker.getRegistration &&
    serviceWorker.getRegistration().then(function (sw) {
      sw && sw.unregister();
      console.log("sw unregister 2");
    });
}

let isSplice = location.href.includes("/splice-images");

if (isSplice) {
  location.href = "/webp2jpg-online/splicing.html";
}

let IS_zh_CN = location.href.includes("zh_CN");
if (location.href.includes("/webp2jpg-online")) {
  w2jFn();
} else {
  mainFn_y();
  fix_split();
  setDownloadToast()
  fix_watermark();
  addOtherUrl_all()
}
// window.asscdn = "https://imagestool.b-cdn.net";
// window.asscdn = "https://images-tool-com-site.vercel.app";
// window.asscdn = "https://imagestool.com";

// window.addEventListener("load", (event) => {

//   });
// if (!IS_zh_CN) adsHeader();
setTimeout(() => {
  let userViewCountValue = 'userViewCount'
  userViewCountFn(userViewCountValue)
  reward();
  if (IS_zh_CN) {

  }
}, 10000);
function addOtherUrl_all() {
  setTimeout(() => {
    addOtherUrl_ai()
    setTimeout(() => {
      addOtherUrl_ai()
    }, 3000);
  }, 1000);
}
function addOtherUrl_ai() {

  let tarDiv = document.querySelector('.n1 .PopupContentMini')
  let aDiv = document.getElementById('mnsks281Mns_sk')
  let pdfDiv = document.getElementById('mnskpdfs281Mns_sk')
  if (window.innerWidth > 1000 && tarDiv && !aDiv) {

    let div = document.createElement('div')
    let url = `https://ai.imagestool.com`
    let img = `rebg_en_icon`
    if (IS_zh_CN) {
      url += '/zh-CN/'
      img = `rebg_cn_icon`
    }
    div.id = 'mnsks281Mns_sk'
    div.innerHTML = `
  <a href="${url}" target="_blank">
      <img class="newSiteBut_9sj2" src='/images/ui/${img}.webp' height="40" / >
  </a>
  <style>
  .newSiteBut_9sj2{opacity:0.5;transition:0.3s;}
  .newSiteBut_9sj2:hover{opacity:1;}
  </style>
  `
    tarDiv.appendChild(div)
  }

  if (window.innerWidth > 1000 && tarDiv && !pdfDiv) {

    let div = document.createElement('div')
    let url = `https://pdf.imagestool.com`
    let img = `pdf_en_icon` 
    if (IS_zh_CN) {
      url += '/zh-CN/'
      img = `pdf_cn_icon`
    }
    div.id = 'mnskpdfs281Mns_sk'
    div.innerHTML = `
  <a href="${url}" target="_blank" style="margin-left:8px;">
      <img class="newSiteBut_9sj2" src='/images/ui/${img}.webp' height="40" / >
  </a>
  `
    tarDiv.appendChild(div)
  }


}

function reward(params) {

  let enDateStr = new Date('2026-03-16').toLocaleDateString('en', {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  })
  let cnContent = ` <div
  class="sharebox"
  style="
    margin-top: 42px;
    padding: 20px 30px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    background: white;
    border-radius: 12px;
  "
>
  <p>你好，我是这个工具的开发者🙋‍♂️</p>
  <div class="br15"></div>
  <h4>为什么要打赏？</h4>
  <p>
    我觉得这就像街头艺人类似，在街边看到唱歌卖艺，人们觉得不错打赏点零花钱，同理，你觉得这个工具帮助提高了工作效率，打赏下，合情合理嘛🌝
  </p>
  <div class="br15"></div>
  <h4>后续计划</h4>
  <p>
    这个工具肝了500小时以上的，已经基本稳定，后续计划开发更多图片工具。如果你能支持点零花钱给我，对我来说是最好的支持，亦是我前进的动力。
  </p>
  <p>2026-03-16</p>
  <div class="br15"></div>
  <div>
    <img
      src="/assets/donate.png"
      alt=""
      width="220"
      style="padding-left: 0px; flex-shrink: 0"
    />
    <div class="br15"></div>
    <div>
      <h4>微信扫码打赏</h4>
      <p style="opacity:0.6">加入QQ群反馈: 951843705 </p>
    </div>
  </div>
  <i class="close iconfont icon-close"></i>
</div>`;
  let cnContentQSH = ` `;
  let enContent = `<div class="sharebox"
  style="
    margin-top: 42px;
    padding: 20px 30px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    background: white;
    border-radius: 12px;
  "
  >
<p>Hello, I am the developer of this tool🙋‍♂️</p>
<div class="br15"></div>
<p>
  If this tool is useful to you, then please pay a reasonable fee, thank you
  very much!
</p>
<div class="br15"></div>
<h4>Plan</h4>
<p>
  This tool has lasted for more than 500 hours, the finished product you are
  using now, and we plan to develop more image tools in the future
  <a>Preview</a><br />
</p>
<p>${enDateStr}</p>
<div class="br15"></div>
<h4>Donate me</h4>
<form
  action="https://www.paypal.com/cgi-bin/webscr"
  method="post"
  target="_top"
>
  <input type="hidden" name="cmd" value="_s-xclick" /><input
    type="hidden"
    name="hosted_button_id"
    value="KHY2XSP78J4MU"
  />
  <table>
    <tr></tr>
    <tr>
      <td>
        <select name="os0">
          <option value="donate 1">donate 1 $ 1.00 USD</option>
          <option value="donate 2">donate 2 $ 2.00 USD</option>
          <option value="donate 3">donate 3 $ 3.00 USD</option>
          <option value="donate 4">donate 4 $ 4.00 USD</option>
          <option value="donate 5">donate 5 $ 5.00 USD</option>
          <option value="donate 6">donate 6 $ 6.00 USD</option>
          <option value="donate 7">donate 7 $ 7.00 USD</option>
          <option value="donate 8">donate 8 $ 8.00 USD</option>
          <option value="donate 9">donate 9 $ 9.00 USD</option>
          <option value="donate 10">donate 10 $ 10.00 USD</option>
        </select>
      </td>
    </tr>
  </table>
  <input type="hidden" name="currency_code" value="USD" /><input
    type="image"
    src="https://www.paypalobjects.com/en_GB/i/btn/btn_paynowCC_LG.gif"
    border="0"
    name="submit"
    alt="PayPal – The safer, easier way to pay online!"
  /><img
    alt=""
    border="0"
    src="https://www.paypalobjects.com/zh_XC/i/scr/pixel.gif"
    width="1"
    height="1"
  />
</form>
<i class="close iconfont icon-close"></i>


</div>
`;
  let isQSH = false;

  let sub = ``;
  if (IS_zh_CN) {
    sub = isQSH ? `我是秦始皇` : "打赏";
  } else {
    sub = `Donate`;
  }
  let ybCon = `
<style>
  .kjsduje883832_con {
    display: none;
    line-height:26px;
  }
  .kjsduje883832_con .br15 {
    height:15px;
  }
  .kjsduje883832:hover .kjsduje883832_con {
    display: block;
  }
</style>
<div
  class="kjsduje883832"
  style="position: relative; z-index:100;  display: inline-block; 
  margin-right:20px;
  
  "
>
  <div
    class="kjsduje883832_but"
    style="
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 80px;
      padding:0 12px;
      height: 28px;
      border: 1px solid rgb(231, 154, 167);
      background:rgb(231, 154, 167);
      color:white;
      border-radius: 30px;
      font-size: 12px;
      font-weight: bold;
      gap: 3px;
    "
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 256 256"
    >
      <path
        fill="white"
        d="M184 89.57V84c0-25.08-37.83-44-88-44S8 58.92 8 84v40c0 20.89 26.25 37.49 64 42.46V172c0 25.08 37.83 44 88 44s88-18.92 88-44v-40c0-20.7-25.42-37.32-64-42.43Zm-128 57.3C36.41 141.4 24 132.39 24 124v-14.07c8.16 5.78 19.09 10.44 32 13.57Zm80-23.37c12.91-3.13 23.84-7.79 32-13.57V124c0 8.39-12.41 17.4-32 22.87Zm-16 71.37c-19.59-5.47-32-14.48-32-22.87v-4.17c2.63.1 5.29.17 8 .17c3.88 0 7.67-.13 11.39-.35a121.92 121.92 0 0 0 12.61 3.76Zm0-44.62A163 163 0 0 1 96 152a163 163 0 0 1-24-1.75v-23.79A183.74 183.74 0 0 0 96 128a183.74 183.74 0 0 0 24-1.54Zm64 48a165.45 165.45 0 0 1-48 0V174.4a179.48 179.48 0 0 0 24 1.6a183.74 183.74 0 0 0 24-1.54ZM232 172c0 8.39-12.41 17.4-32 22.87V171.5c12.91-3.13 23.84-7.79 32-13.57Z"
      />
    </svg>
    ${sub}
  </div>
  <div
    class="kjsduje883832_con"
    style="position: absolute; top: 0%; right: 0; width: 500px"
  >
   ${IS_zh_CN ? (isQSH ? cnContentQSH : cnContent) : enContent}
  </div>
</div>

`;
  let ybConDiv = document.createElement("div");
  ybConDiv.innerHTML = ybCon;
  let inDiv = document.querySelector(".n1 .wid100");
  inDiv.insertBefore(ybConDiv, inDiv.children[0]);
}

function adsHeader() {
  let addAd = setInterval(() => {
    console.log(1111);
    let inDiv = document.querySelector(".n1 .PopupContentMini");
    if (inDiv) {
      clearInterval(addAd);
      let ybConDiv = document.createElement("div");
      ybConDiv.innerHTML = `
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8162202800743940"
     crossorigin="anonymous"></script>
<!-- header -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-8162202800743940"
     data-ad-slot="8910834305"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
      
      `;
      inDiv.insertAdjacentElement("afterend", ybConDiv);
    }
  }, 300);
}

function w2jFn() {
  let doE = () => {
    let rt = document.querySelector("header .red_text");
    if (rt) {
      rt.remove();
      document
        .querySelectorAll('header [href="https://imagestool.com/"]')
        .forEach((el) => {
          el.href = "https://imagestool.com/zh_CN/";
          console.log(el.href);
        });
      document.querySelectorAll(".l1 .logo>p").forEach((el) => el.remove());

      let main = document.querySelector("#app main");
      if (!main) main = document.querySelector("#app .layout_max_width_batch");

      let adBotFn = () => {
        let adBot = document.createElement("div");
        adBot.style.padding = "0";
        adBot.style.width = "220px";
        adBot.style["flex-shrink"] = "0";
        adBot.innerHTML = `
          <div
          id="adDivSet"
              style="
                width: 100%;
                min-height: calc(100vh - 60px);
              "
            >
          </div>
          `;
        return adBot;
      };
      let adUpFn = () => {
        let adUp = document.createElement("div");
        adUp.style.padding = "0";
        adUp.style.margin = "0";
        adUp.innerHTML = `
        <div
            style="
            position: fixed;
            z-index:10;
            right: 10px;
            top: 43px;
            width: 200px;
            height: calc(100vh - 60px);
            "
          >
          <ins
          class="adsbygoogle"
          style="display: block"
          data-ad-client="ca-pub-8162202800743940"
          data-ad-slot="8910834305"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
        </div>
        `;
        return adUp;
      };
      if (main && window.innerWidth >= 1001) {
        if (document.contains(document.querySelector("#adDivSet"))) {
          return;
        }

        main.appendChild(adBotFn());
        function runAdFn() {
          if (window.adsbygoogle && window.adsbygoogle.push) {
            try {
              main.appendChild(adUpFn());
              setTimeout(() => {
                (adsbygoogle = window.adsbygoogle || []).push({});
              }, 300);
            } catch (error) {
              setTimeout(() => {
                runAdFn();
              }, 1000);
            }
          } else {
            setTimeout(() => {
              runAdFn();
            }, 300);
          }
        }
        runAdFn();
        // let loadAdFn = setInterval(() => {
        //   if (runAdFn()) {
        //     clearInterval(loadAdFn);
        //   }
        // }, 300);

        return;
        setTimeout(() => {
          document.getElementById("adDivSet").innerHTML = `
        <ins
        class="adsbygoogle"
        style="display: block"
        data-ad-client="ca-pub-8162202800743940"
        data-ad-slot="8910834305"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
        `;
          (adsbygoogle = window.adsbygoogle || []).push({});
        }, 600);
      }
    }
  };
  doE();
  let testEl;
  testEl = setInterval(() => {
    let rt = document.querySelector("header .red_text");
    if (rt) {
      clearInterval(testEl);
      doE();
    }
  }, 100);
}

function mainFn_y() {
  let adWidth = 200
  function setCss() {
    let style = document.createElement('style')
    style.innerHTML = `
    .InputFile{
      padding-right:${adWidth + 20}px;
      transition: 0s !important;
    }
    .PageDownload{
      padding-right:${adWidth + 20}px;
      transition: 0s !important;
    }
    .Home main .n1{
      padding-right:${adWidth + 20}px;
      transition: 0s !important;
    }
    `
    document.querySelector('body').appendChild(style)
  }
  function addDiv() {
    let div = document.createElement('div')
    div.innerHTML = `
    <div id='mvnj_s9293_jsd' class='ad advertisement banner' style='
    width:${adWidth}px;
    height:calc(100vh - 160px);
    position: fixed;
    z-index: 10;
    top: 120px;
    right: 10px;'></div>
    `
    document.querySelector('body').appendChild(div)
  }

  function addAd_y() {
    try {
      let mvnj_s9293_jsd = document.querySelector('#mvnj_s9293_jsd')
      if (!mvnj_s9293_jsd) return
      if (mvnj_s9293_jsd.contains(document.querySelector(".adsbygoogle"))) return
      let adBox = document.createElement('div')
      adBox.innerHTML = `
    <ins class="adsbygoogle"
    style="display:inline-block;width:200px;height:600px"
     data-ad-client="ca-pub-8162202800743940"
     data-ad-slot="7635601412"
    ></ins>
      `;
      mvnj_s9293_jsd.appendChild(adBox)
      setTimeout(() => {
        (adsbygoogle = window.adsbygoogle || []).push({});
      }, 600);
    } catch (error) {
      setTimeout(() => {
        addAd_y();
      }, 2000);
    }
  }
  ////////
  if (window.innerWidth >= 1001) {
    setCss()
    addDiv()
    addAd_y();
  }

  /////////
  let count = 0
  let testAd = setInterval(() => {
    count++
    // let box = document.querySelector("#app.light .InputFile .AppIcon");
    let box = document.querySelector("#app.light .InputFile");
    let box2 = document.querySelector("#app.light .PageDownload");

    let Home = document.querySelector("#app.light .Home");
    if ((Home || box || box2) && window.innerWidth >= 1001 && window.adsbygoogle && window.adsbygoogle.push) {
      clearInterval(testAd);
      addAd_y();
      console.log("cool");
    }
    if (count > 10) {
      clearInterval(testAd);
    }
  }, 1000);
}
function mainFn_x() {

  function addAd_x() {
    let box = document.querySelector(".InputFile .AppIcon");
    if (box && window.innerWidth >= 1001) {
      if (document.contains(document.querySelector("#kjd82_9jsalsi"))) {
        return;
      }
      let adDiv = document.createElement("div");
      adDiv.style.width = "100%";
      adDiv.style.height = "60px";
      adDiv.style.margin = "0 auto";
      // adDiv.style.backgroundColor = "red";
      adDiv.style.display = "flex";
      adDiv.style["justify-content"] = "center";
      adDiv.style["align-items"] = "center";

      adDiv.setAttribute("id", "kjd82_9jsalsi");
      adDiv.innerHTML = `
      <ins
        class="adsbygoogle"
        style="display: inline-block; width: 600px; height: 60px"
        data-ad-client="ca-pub-8162202800743940"
        data-ad-slot="1749635360"
      ></ins>

        `;
      function runAdFn() {
        if (window.adsbygoogle && window.adsbygoogle.push) {
          try {
            box.appendChild(adDiv);
            (adsbygoogle = window.adsbygoogle || []).push({});
          } catch (error) {
            setTimeout(() => {
              runAdFn();
            }, 1000);
          }
        } else {
          setTimeout(() => {
            runAdFn();
          }, 300);
        }
      }
      runAdFn();
    }
  }
  addAd_x();
  let count = 0
  let testAd = setInterval(() => {
    count++
    let box = document.querySelector(".InputFile .AppIcon");
    if (box && window.innerWidth >= 1001) {
      if (document.contains(document.querySelector("#kjd82_9jsalsi"))) {
        return;
      }
      addAd_x();
      clearInterval(testAd);
      console.log("cool");
    }
    if (count > 10) {
      clearInterval(testAd);
    }
  }, 1000);
}
function fix_watermark() {
  if (location.href.includes("/images-watermark") && window.queryLocalFonts) {
    function checkChinese(str) {
      var reg = /[\u4e00-\u9fa5]/;
      var result = str.match(reg);
      return result != null;
    }
    let fonts = 123
    window.images_watermark_99jdkd = {
      async selected2() {
        const fontK_99s9d83kj4_input = document.getElementById("fontK_99s9d83kj4_input");
        let fontName = fontK_99s9d83kj4_input.value
        window.wm_font_family_93kdjf = fontName

        if (!document.getElementById(fontName)) {
          let curF = fonts.filter(f => f.postscriptName === fontName)[0]
          let newFontCss = fontName
          if (curF) {
            let blob = await curF.blob()
            let url = URL.createObjectURL(blob)
            newFontCss = url
          }
          let div = document.createElement('div')
          div.setAttribute('id', fontName)
          div.innerHTML = `
       <style>
       @font-face{
        font-family:"${fontName}";
        src:local("${fontName}"),
        url("${newFontCss}");
      }
       </style>
        `
          document.body.appendChild(div)
        }

        // document.querySelector('#style_klsdl454_kdask').innerHTML=`
        // @font-face{
        //   font-family:"${fontName}";
        //   src:local("${fontName}");
        // }
        // `

        document.getElementById("fontK_99s9d83kj4_test").style.fontFamily = fontName


      },
      async loadFonts() {
        try {
          fonts = await window.queryLocalFonts();
          if (fonts.length === 0) {
            document.getElementById("button_kdask_930_sdl").innerText = `Font permission is not enabled!!! Click the icon to the left of the address bar
            Then turn on the "Get font permissions" switch`
            return;
          }
          const fontK_99s9d83kj4 = document.getElementById("fontK_99s9d83kj4");
          let fontK_99s9d83kj4_html = ``
          let isEachEd = []

          document.getElementById("button_kdask_930_sdl").innerText = `${fonts.length} fonts loaded`

          fonts.forEach((font, index) => {
            let isC = checkChinese(`${font.fullName}${font.postscriptName}`);
            if (!isC) return
            isEachEd.push(font.postscriptName)
            fontK_99s9d83kj4_html += `
            <option value="${font.postscriptName}">${font.fullName}</option>
            `
          });

          fonts.forEach((font, index) => {
            let isC = checkChinese(`${font.fullName}${font.postscriptName}`);
            if (isC || isEachEd.includes(font.postscriptName)) return
            fontK_99s9d83kj4_html += `
            <option value="${font.postscriptName}">${font.fullName}</option>
            `
          });

          fontK_99s9d83kj4.innerHTML = fontK_99s9d83kj4_html
        } catch (e) {
          document.getElementById("button_kdask_930_sdl").innerText = `Font permission is not enabled!!! Click the icon to the left of the address bar
Then turn on the "Get font permissions" switch`

        } finally {


        }
      }
    }
    let testEl;
    testEl = setInterval(() => {
      let rt = document.querySelector(".view2 .p_b_50 .m_t_15>.Button");
      let textarea = document.querySelector(".view2 .p_b_50 textarea");
      let isShowFont = document.querySelector("#button_kdask_930_sdl");
      if (rt && textarea && !isShowFont) {
        let parentDiv = document.querySelector(".view2 .p_b_50")
        let newC = document.createElement('div')
        newC.innerHTML = `
        <div
        style="display: flex;gap: 6px;flex-flow: column;width: 222px;margin-bottom: 15px;
        "
      >
      <style id="style_klsdl454_kdask"></style>
        <button
        id="button_kdask_930_sdl"
          style="width: 100%; min-height: 32px; border: 2px solid blue"
          onClick="window.images_watermark_99jdkd.loadFonts()"
        >
          Load font
        </button>
      
        <input
        onfocus="this.value=''"
          style="width: 100%; height: 32px; border: 2px solid blue; text-align:center;"
          list="fontK_99s9d83kj4"
          id="fontK_99s9d83kj4_input"
          placeholder="Search font name"
          onchange="window.images_watermark_99jdkd.selected2()"
        />
        <datalist id="fontK_99s9d83kj4">
        </datalist>
        
        <div id="fontK_99s9d83kj4_test" style="font-size:22px; line-height:1.1">
        Preview: ABC_abc_123456789_ !?@#$%^&*()_+ Font 字体 字體 Police de caractère フォント texto
        </div>
        
      </div>
        `
        parentDiv.insertBefore(newC, parentDiv.firstChild.nextSibling);
        // clearInterval(testEl);
      }
      // if(document.querySelector('.view1').style.display==='none'){

      // }
    }, 1000);
  }
}
function fix_split() {
  if (location.href.includes("/split-images")) {
    testS();
    async function testS(params) {
      if (idbKeyval) {
        let db = await idbKeyval.get("SplitImages");
        db.mode = "";
        await idbKeyval.set("SplitImages", db);
      } else {
        setTimeout(() => {
          testS();
        }, 300);
      }
    }
  }
}

function userViewCountFn(name = 'userViewCount') {
  window[name] = 0
  let count = localStorage.getItem(name)
  if (count === null) {
    localStorage.setItem(name, '1')
  } else {
    count = count - 0
    count++
    localStorage.setItem(name, count)
  }
  window[name] = count
}

function setDownloadToast() {
  function startDFn() {
    // console.log('rrrrrr');
    let setTimeout_8kkjsd = setInterval(() => {
      let downloadBut = document.querySelector(
        "button.Button.full.size2.ly.m_10.t2"
      );
      if (downloadBut) {
        clearInterval(setTimeout_8kkjsd);
        downloadBut.addEventListener("click", () => {
          window.open("/assets/html/Downloaded");
        });
      }
    }, 500);
  }
  let time = localStorage.getItem('setDownloadToast_jks82')
  let newT = new Date().getTime()
  let dur = 12 * 1000 * 3600
  if (!time) {
    localStorage.setItem('setDownloadToast_jks82', new Date().getTime())
    startDFn()
  }
  time = localStorage.getItem('setDownloadToast_jks82')
  let isRun = newT - (time - 0)
  if (isRun > dur) {
    startDFn()
    localStorage.setItem('setDownloadToast_jks82', new Date().getTime())

  }

}
