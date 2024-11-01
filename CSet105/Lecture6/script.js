/*
Lecture 6 Assignment - Alex Seisler

This code is used to format a 2 by 2 matrix and provide methods that can manipulate the matrix and even matrices.
*/
var values = [1, 2, 3, 4]
//Matrix class for an individual matrix
class Matrix {
    //initializes the variables
    constructor(values) {
        this.values = values;
    }
    //get method to access the values in the matrix
    get(x, y) {
        if (x == 0) {
            if (y == 0) {
                return this.values[0];
            }
            else if (y == 1) {
                return this.values[1];
            }
        }
        else if (x == 1) {
            if (y == 0) {
                return this.values[2];
            }
            else if (y == 1) {
                return this.values[3];
            }
        }
    }
    //or return this.values[x*2+y]

    //methods performed only on a single matrix
    scalarMultiply(scalar) {
        return new Matrix(this.values.map(value => value * scalar));
    }
    add(matrix) {
        let newValues = this.values.map((value, index) => value + matrix.values[index]);
        return new Matrix(newValues);
    }
    subtract(matrix) {
        let newValues = this.values.map((value, index) => value - matrix.values[index]);
        return new Matrix(newValues);
    }
    determinant() {
        //a*d - b*c
        return (this.get(0, 0) * this.get(1, 1) - this.get(1, 0) * this.get(0, 1));
    }
    inverse() {
        let deter = this.determinant();
        let value1 = this.get(1, 1) / deter;
        let value2 = -(this.get(0, 1) / deter);
        let value3 = -(this.get(1, 0) / deter);
        let value4 = this.get(0, 0) / deter;
        let newValues = [];
        newValues.push(value1);
        newValues.push(value2);
        newValues.push(value3);
        newValues.push(value4);
        return new Matrix(newValues);

    }

}
//Class for matrices
class MatrixArray {
    constructor(matrices) {
        this.matrices = matrices;
    }
    //adds a matrix to the array
    add(matrix) {
        this.matrices.push(matrix);
    }
    //adds a matrix to the array at a specific index
    add(matrix, index) {
        this.matrices.splice(index, 0, matrix);
    }
    //Updates a matrix at a specific spot
    update(index, matrix) {
        this.matrices[index] = matrix;
    }
    //removes a matrix at a specific index
    remove(index) {
        this.matrices.splice(index, 1);
    }

    //Start of matrix on matrix operations

    //implements the methods done for a single matrix but now you can choose which matrices are performed on
    scalarMultiply(index, scalar) {
        return this.matrices[index].scalarMultiply(scalar);
    }

    addMatrices(index1, index2) {
        return this.matrices[index1].add(this.matrices[index2]);
    }

    subtractMatrices(index1, index2) {
        return this.matrices[index1].subtract(this.matrices[index2]);
    }

    determinant(index) {
        return this.matrices[index].determinant();
    }

    inverse(index) {
        return this.matrices[index].inverse();
    }

    multiplyMatrices(index1, index2) {
        return this.matrices[index1].multiply(this.matrices[index2]);
    }

}

/*
To do this without object-oriented programming we would have used built-in methods 
and a lot of arrays and separate data storing. Using OOP was a great way to accomplish 
this task because it took out a lot of repetitive code from reusing the created methods. 
It also helped in the way of storing data efficiently. Having this improved code with less 
duplication provided structure and the availability to scale in the future.
*/

/*
Triangles Class
*/
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Line {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
    length() {
        return Math.sqrt((this.end.x - this.start.x) ** 2 + (this.end.y - this.start.y) ** 2);
    }
}
class Triangle {
    constructor(p1, p2, p3) {
        this.p1 = p1;
        this.p2 = p2;
        this.p3 = p3;
    }
    perimeter() {
        if (this.valid() == 0) {
            return NaN;
        }
        let line1 = new Line(this.p1, this.p2).length();
        let line2 = new Line(this.p2, this.p3).length();
        let line3 = new Line(this.p3, this.p1).length();

        return (line1 + line2 + line3);
    }
    area() {
        if (this.valid() == 0) {
            return NaN;
        }
        let x1 = this.p1.x;
        let y1 = this.p1.y;
        let x2 = this.p2.x;
        let y2 = this.p2.y;
        let x3 = this.p3.x;
        let y3 = this.p3.y;

        return (Math.abs((x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)) / 2));
    }
    valid() {
        let line1 = new Line(this.p1, this.p2).length();
        let line2 = new Line(this.p2, this.p3).length();
        let line3 = new Line(this.p3, this.p1).length();
        let lines = [line1, line2, line3];
        let largest = Math.max(...lines);
        lines.splice(lines.indexOf(largest), 1);
        let total = lines[0] + lines[1];
        if (total <= largest) {
            return 0;
        }
        else {
            return 1;
        }
    }
}

// Example Triangle 1
const pointA1 = new Point(0, 0);
const pointB1 = new Point(4, 0);
const pointC1 = new Point(0, 3);
const triangle1 = new Triangle(pointA1, pointB1, pointC1);

// Example Triangle 2
const pointA2 = new Point(0, 0);
const pointB2 = new Point(2, 2);
const pointC2 = new Point(4, 4);
const triangle2 = new Triangle(pointA2, pointB2, pointC2);

// Calculate and print the perimeter and area for Triangle 1
console.log("--Triangle 1--");
console.log("Perimeter:", triangle1.perimeter());
console.log("Area:", triangle1.area());
console.log("");
// Calculate and print the perimeter and area for Triangle 2 (Invalid triangle)
console.log("--Triangle 2--");
console.log("Perimeter:", triangle2.perimeter());
console.log("Area:", triangle2.area());
