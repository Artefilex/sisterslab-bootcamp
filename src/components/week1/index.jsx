import  SyntaxHighlighter from "react-syntax-highlighter"

export default function Week1() {
  return (
    <div className=" flex items-center justify-center h-screen flex-col px-2">
     <h1 className="text-white text-[2rem] text-center pt-2 py-8"> Alıştırmalar </h1>
      <SyntaxHighlighter  language="javascript"  className="w-full">
      {
    `
    let a = 2;
    let b = 3;
    let c = 2;
    (a == b)  // false
    a == c // True
    
    typeof 'John Doe'   // String
    typeof 3.14 // Number
    typeof true //Boolean
    typeof 234567890123456789012345678901234567890n // bigint 
    typeof undefined // Undefined?
    typeof null // onject?
    typeof Symbol('symbol') // Symbol?
    
    let x1 = 2;
    let y1 = '2';
    (x1 == y1) // True?
    x1 === y1 // False ?
    
    let x2 = 3;
    let y2 = '3';
    x2 + y2 // '33' ?
    
    let x3 = 24;
    let y3 = 'Hello';
    x3 + y3 // '24Hello' ?
    
    let name = 'Vivek';
    let surname = ' Bisht';
    name + surname // 'Vivek Bisht' ?
    
    let x4 = 3;
    let y4 = '3';
    x4 - y4 // 0 ?
    
    let x5 = 0;
    let y5 = 23;
    
    if(x5) { console.log(x5) } // Undefined
    
    if(y5) { console.log(y5) } // 23
    
    isNaN('Hello') // True 
    isNaN(345) // False
    isNaN('1') // False
    isNaN(true) // False
    isNaN(false) // False
    isNaN(undefined) // True
    
    ` 
}
  
      </SyntaxHighlighter>
    </div>
  );
}

{
    {
        `
        let a = 2;
        let b = 3;
        let c = 2;
        (a == b)  // false
        a == c // True
        
        typeof "John Doe" // String
        typeof 3.14 // Number
        typeof true //Boolean
        typeof 234567890123456789012345678901234567890n // bigint 
        typeof undefined // Undefined?
        typeof null // onject?
        typeof Symbol('symbol') // Symbol?
        
        let x1 = 2;
        let y1 = "2";
        (x1 == y1) // True?
        x1 === y1 // False ?
        
        let x2 = 3;
        let y2 = "3";
        x2 + y2 // "33" ?
        
        let x3 = 24;
        let y3 = "Hello";
        x3 + y3 // "24Hello" "?
        
        let name = "Vivek";
        let surname = " Bisht";
        name + surname // "VivekBisht" ?
        
        let x4 = 3;
        let y4 = "3";
        x4 - y4 // 0 ?
        
        let x5 = 0;
        let y5 = 23;
        
        if(x5) { console.log(x5) } // Undefined
        
        if(y5) { console.log(y5) } // 23
        
        isNaN("Hello") // True 
        isNaN(345) // False
        isNaN('1') // False
        isNaN(true) // False
        isNaN(false) // False
        isNaN(undefined) // True

        `
  }
}