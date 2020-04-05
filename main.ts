// Ex1: Count number of character in a string

function charcount(myChar: string, str: string) 
{
var count:number = 0;
for (var n:number = 0; n <str.length; n++)
{
    if (str.charAt(n) == myChar)
    {
        count++;
    }
}
return count;
}
var myChar1 = "happy";
var str1 = "p";

console.log(charcount(str1,myChar1));

// Ex2: Find smallest and biggest numbers

function maxMin(array: any)
{
    return[Math.max(...array),Math.min(...array)];
}

var array1 = [1, 2, 3, 4, 5];

console.log(maxMin(array1));

// Ex3: Calculate perimeter and area

class Circle {

    r: number;
    constructor (r: number) {
        this.r=r;
    }

    getCirclePerimeter() { // calculate perimeter
        return Math.PI*2*this.r;
    }

    getCircleArea() { // calculate area
        return Math.pow(this.r,2)*Math.PI;
    }

}

let m = new Circle(7);
m.getCirclePerimeter();
m.getCircleArea();
console.log(m.getCirclePerimeter(), m.getCircleArea()); // display perimeter and area

console.log(new Circle(5).getCirclePerimeter(), new Circle(5).getCircleArea());

// Ex4: Define progress day

  
const progressDays = (runs: number[]) => { // define function progressDays

    var d: number =0;
    for (let n: number =0; n<runs.length; n++) {
        if(runs[n+1]-runs[n]>0) {
            d++;
        }
    } 
  
    return d;
      
  }
  
  
  console.log(progressDays([3, 4, 1, 2])); // display the number of progress day





 