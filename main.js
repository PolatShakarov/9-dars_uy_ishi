var someText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro id maxime quisquam iste praesentium minima repudiandae natus, consectetur facere sed maiores autem rerum repellat commodi nesciunt dolor itaque expedita veritatis ducimus rem earum. Facilis quia accusamus consequuntur est odit temporibus tempore sequi maxime voluptas! Recusandae, libero, laborum dolores velit eum, ipsum quam aliquid quos labore ipsam sunt? Magnam quae repellat molestiae ipsum itaque, natus totam quia sint ullam amet quisquam? Maxime nam, ea, corporis reprehenderit vel ipsam natus totam explicabo quam quae mollitia repellat repudiandae aspernatur necessitatibus voluptatem magnam blanditiis neque suscipit. Voluptatem doloremque in deleniti sit ipsum repellat?"
var newArray = someText.split(" ")
console.log(longestStringReduce(newArray));
function longestStringReduce(arr) {
    return arr.reduce((a, b) => a.length < b.length ? b : a, "");
  }
  

//------------------------------

var numbers = [1, 3, 5, 9]
var total = 0

function totalNumber(numb, totals) {

    for (let i = 0; i < numb.length; i++) {
        totals += numb[i];
    }
    console.log(totals);
}

totalNumber(numbers, total)