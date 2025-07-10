var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.startShift = function () {
        console.log('Employee start to shift');
    };
    Employee.prototype.endShift = function () {
        console.log('Employee shift has ended');
    };
    return Employee;
}());
var Mechanic = /** @class */ (function (_super) {
    __extends(Mechanic, _super);
    function Mechanic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mechanic.prototype.startShift = function () {
        console.log('mechanic start to shift');
    };
    Mechanic.prototype.endShift = function () {
        console.log('mechanic shift has ended');
    };
    return Mechanic;
}(Employee));
var employee = new Employee();
employee.startShift();
employee.endShift();
var mechanic = new Mechanic();
mechanic.startShift();
mechanic.endShift();
