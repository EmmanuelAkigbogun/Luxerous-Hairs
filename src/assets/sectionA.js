import seller1 from "./seller1.png"
import seller2 from "./seller2.png"
import seller3 from "./seller3.png"
import seller4 from "./seller4.png"
import seller5 from "./seller5.png"
import seller6 from "./seller6.png"
import seller7 from "./seller7.png"
import seller8 from "./seller8.png"
import seller9 from "./seller9.png"
import seller10 from "./seller10.png"
import seller11 from "./seller11.png"
import seller12 from "./seller12.png"
import collections1 from "./collections.png"
import button1 from "./arrow-right-black.svg"
import button2 from "./arrow-right-black.svg"
import button3 from "./arrow-right-black.svg"
import button4 from "./arrow-right-black.svg"
import button5 from "./arrow-right-black.svg"
import button6 from "./arrow-right-black.svg"
import button7 from "./arrow-right-black.svg"
import button8 from "./arrow-right-black.svg"
import button9 from "./arrow-right-black.svg"
export let review=(num)=>{
          let ol={}
          let vak=0;let li=[];let zol=""
         while(num>vak){
            li.push(vak+1)
            vak++
         }
         let lop=li.map(e=>{
            let ad=Math.random().toString().slice(3,4)
            if(ad>"0"&&ad<="5"){ad=ad}
            else if(ad=="0"){ad="5"}
            else{ad=String(Number(ad)-5)}
            ol["profile"]="lorem profile ncnncncn"+ad
            ol["comment"]="lorem comment ncnncncn lorem comment ncnncnc"+ad
            ol["star"]=ad
            zol+=","+JSON.stringify(ol)
            })
             let  kol=zol.replace(",","")
                return `[`+kol+`]`         
}

        
export default [{
        text: "Recent Products",
        shop: "Shop Now",
        image: collections1,
        buttonImage: button1,
        content: [
            {
                image: seller1,
                text: "This is the name of the product 1",
                price: "$200",
                reviews: eval(review(Number(Math.random().toString().slice(3, 5)))),
                boolean: ""
            }, {
                image: seller2,
                text: "This is the name of the product 2",
                price: "$150",
                reviews: eval(review(Number(Math.random().toString().slice(3, 5)))),
                boolean: "true"
            }, {
                image: seller3,
                text: "This is the name of the product 3",
                price: "$380",
                reviews: eval(review(Number(Math.random().toString().slice(3, 5)))),
                boolean: ""
            }, {
                image: seller4,
                text: "This is the name of the product 4",
                price: "$170",
                reviews: eval(review(Number(Math.random().toString().slice(3, 5)))),
                boolean: ""
            }]
    },
    {
        text: "Shop Best Sellers",
        shop: "Shop Now",
        image: collections1,
        buttonImage: button1,
        content: [
            {
                image: seller5,
                text: "This is the name of the product 1",
                price: "$200",
                reviews: eval(review(Number(Math.random().toString().slice(3, 5)))),
                boolean: ""
            }, {
                image: seller6,
                text: "This is the name of the product 2",
                price: "$150",
                reviews: eval(review(Number(Math.random().toString().slice(3, 5)))),
                boolean: "true"
            }, {
                image: seller7,
                text: "This is the name of the product 3",
                price: "$380",
                reviews: eval(review(Number(Math.random().toString().slice(3, 5)))),
                boolean: ""
            }, {
                image: seller8,
                text: "This is the name of the product 4",
                price: "$170",
                reviews: eval(review(Number(Math.random().toString().slice(3, 5)))),
                boolean: ""
            }]
    },
    {
        text: "Shop Haircare Products",
        shop: "Shop Now",
        image: collections1,
        buttonImage: button1,
        content: [
            {
                image: seller9,
                text: "This is the name of the product 1",
                price: "$200",
                reviews: eval(review(Number(Math.random().toString().slice(3, 5)))),
                boolean: ""
            }, {
                image: seller10,
                text: "This is the name of the product 2",
                price: "$150",
                reviews: eval(review(Number(Math.random().toString().slice(3, 5)))),
                boolean: "true"
            }, {
                image: seller11,
                text: "This is the name of the product 3",
                price: "$380",
                reviews: eval(review(Number(Math.random().toString().slice(3, 5)))),
                boolean: ""
            }, {
                image: seller12,
                text: "This is the name of the product 4",
                price: "$170",
                reviews: eval(review(Number(Math.random().toString().slice(3, 5)))),
                boolean: ""
            }]
    }]