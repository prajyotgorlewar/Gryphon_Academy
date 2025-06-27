// binding in ES6 are used to avoid identifier conflicts
// they are used to import and export modules
// export prefix promote identifier into a binding
// behind the scenes ec6 binding are wrappped in a container called module
// module has to be run onn a server

        export var color = "red";

        export function setName(newName){
            color = newName;
        }

        let Name = "Prajyot";
        export const magicNumber = 42;

        export function sum(num1, num2){
            return num1 + num2;
        }

        export class Rectangle{
            constructor(length, width){
                this.length = length;
                this.width = width;
            }
        }

        function subtract(num1, num2){
            return num1 - num2;
        }

        function multiply(num1, num2){
            return num1 * num2;
        }

export { subtract, multiply };
    
export default function divide(num1, num2) {
        return num1 / num2;
}

